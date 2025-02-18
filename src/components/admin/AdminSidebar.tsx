import React from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/hooks/useAuth";
import { hasPermission } from "@/lib/auth";
import {
  LayoutDashboard,
  Settings,
  FileText,
  Image,
  Users,
  LogOut,
} from "lucide-react";

export default function AdminSidebar() {
  const location = useLocation();
  const { user, signOut } = useAuth();

  const navigation = [
    {
      name: "Dashboard",
      href: "/admin",
      icon: LayoutDashboard,
      permission: "manage_content" as const,
    },
    {
      name: "Content",
      href: "/admin/content",
      icon: FileText,
      permission: "manage_content" as const,
    },
    {
      name: "Media",
      href: "/admin/media",
      icon: Image,
      permission: "manage_content" as const,
    },
    {
      name: "Settings",
      href: "/admin/settings",
      icon: Settings,
      permission: "manage_site_settings" as const,
    },
    {
      name: "Users",
      href: "/admin/users",
      icon: Users,
      permission: "manage_users" as const,
    },
  ];

  return (
    <div className="w-64 bg-white border-r min-h-screen p-4">
      <div className="flex flex-col h-full">
        <div className="space-y-4">
          <div className="px-3 py-2">
            <h2 className="text-lg font-semibold">Admin Panel</h2>
          </div>
          <nav className="space-y-1">
            {navigation.map((item) => {
              if (!hasPermission(user?.profile?.role!, item.permission)) {
                return null;
              }

              return (
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
              );
            })}
          </nav>
        </div>
        <div className="mt-auto">
          <button
            onClick={() => signOut()}
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
