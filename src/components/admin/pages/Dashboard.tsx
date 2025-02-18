import React from "react";
import { Card } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">
        Welcome, {user?.profile?.full_name}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h3 className="font-semibold mb-2">Content Sections</h3>
          <p className="text-gray-600">Manage website content sections</p>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-2">Features</h3>
          <p className="text-gray-600">Manage feature listings</p>
        </Card>

        <Card className="p-6">
          <h3 className="font-semibold mb-2">Media</h3>
          <p className="text-gray-600">Manage uploaded media files</p>
        </Card>
      </div>
    </div>
  );
}
