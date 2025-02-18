import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/useAuth";
import { supabase } from "@/lib/supabase";
import { Wallet, CircleDollarSign, ArrowUpDown, Settings } from "lucide-react";
import { Link } from "react-router-dom";

type UserWallet = {
  id: string;
  balance: number;
  address: string;
};

type Transaction = {
  id: string;
  type: "deposit" | "withdrawal" | "transfer";
  amount: number;
  status: "pending" | "completed" | "failed";
  description: string;
  created_at: string;
};

export default function UserDashboard() {
  const { user } = useAuth();
  const [wallet, setWallet] = useState<UserWallet | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    if (user) {
      loadWallet();
      loadTransactions();
    }
  }, [user]);

  const loadWallet = async () => {
    const { data } = await supabase
      .from("user_wallets")
      .select("*")
      .eq("user_id", user?.id)
      .single();

    setWallet(data);
  };

  const loadTransactions = async () => {
    const { data } = await supabase
      .from("transactions")
      .select("*")
      .eq("user_id", user?.id)
      .order("created_at", { ascending: false })
      .limit(5);

    setTransactions(data || []);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto space-y-8">
        <h1 className="text-2xl font-bold">
          Welcome, {user?.profile?.full_name}
        </h1>

        {/* Admin CMS Link */}
        {user?.profile?.role &&
          ["super_admin", "admin", "editor"].includes(user.profile.role) && (
            <Link to="/admin">
              <Card className="p-6 mb-6 hover:bg-gray-50 transition-colors cursor-pointer">
                <div className="flex items-center space-x-4">
                  <Settings className="h-8 w-8 text-blue-500" />
                  <div>
                    <h3 className="font-semibold">Content Management System</h3>
                    <p className="text-sm text-gray-500">
                      Manage website content and settings
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Wallet Card */}
          <Card className="p-6">
            <div className="flex items-center space-x-4">
              <Wallet className="h-8 w-8 text-blue-500" />
              <div>
                <h3 className="font-semibold">Your Wallet</h3>
                <p className="text-2xl font-bold">
                  {wallet?.balance?.toFixed(8) || "0.00000000"} FLUXX
                </p>
                <p className="text-sm text-gray-500 truncate">
                  Address: {wallet?.address || "Not available"}
                </p>
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Quick Actions</h3>
            <div className="space-y-2">
              <Button className="w-full" variant="outline">
                <CircleDollarSign className="mr-2 h-4 w-4" />
                Deposit
              </Button>
              <Button className="w-full" variant="outline">
                <ArrowUpDown className="mr-2 h-4 w-4" />
                Transfer
              </Button>
            </div>
          </Card>

          {/* Recent Transactions */}
          <Card className="p-6">
            <h3 className="font-semibold mb-4">Recent Transactions</h3>
            <div className="space-y-4">
              {transactions.map((tx) => (
                <div
                  key={tx.id}
                  className="flex items-center justify-between text-sm"
                >
                  <div>
                    <p className="font-medium">{tx.type}</p>
                    <p className="text-gray-500">{tx.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{tx.amount} FLUXX</p>
                    <p
                      className={`text-${tx.status === "completed" ? "green" : "yellow"}-500`}
                    >
                      {tx.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
