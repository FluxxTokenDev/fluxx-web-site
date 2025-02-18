import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";
import UserSidebar from "./UserSidebar";

export default function UserLayout() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  // We no longer automatically redirect admin users

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <UserSidebar />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
