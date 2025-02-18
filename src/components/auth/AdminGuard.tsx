import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { Loader2 } from "lucide-react";

export default function AdminGuard() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  if (
    !user?.profile?.role ||
    !["super_admin", "admin", "editor"].includes(user.profile.role)
  ) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}
