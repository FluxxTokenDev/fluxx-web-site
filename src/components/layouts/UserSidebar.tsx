import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import {
  LayoutDashboard,
  Wallet,
  ShoppingCart,
  Settings,
  LogOut,
} from "lucide-react";

export default function UserSidebar() {
  const location = useLocation();
  const { signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      window.location.href = "/";
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const navigation = [
    {
      name: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Wallet",
      href: "/dashboard/wallet",
      icon: Wallet,
    },
    {
      name: "Shop",
      href: "/dashboard/shop",
      icon: ShoppingCart,
    },
    {
      name: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <div className="w-64 bg-white border-r min-h-screen p-4">
      <div className="flex flex-col h-full">
        <div className="space-y-4">
          <div className="px-3 py-2">
            <img src="/fluxxlogo.png" alt="Fluxx" className="h-8" />
          </div>
          <nav className="space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  "flex items-center px-3 py-2 text-sm font-medium rounded-md",
                  location.pathname === item.href
                    ? "bg-gray-100 text-gray-900"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                )}
              >
                <item.icon
                  className={cn(
                    "mr-3 h-6 w-6",
                    location.pathname === item.href
                      ? "text-gray-500"
                      : "text-gray-400",
                  )}
                />
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-auto">
          <button
            onClick={handleSignOut}
            className="flex items-center px-3 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 w-full rounded-md"
          >
            <LogOut className="mr-3 h-6 w-6 text-gray-400" />
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
