import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Media } from "@/types/schema";
import { uploadFile, deleteFile } from "@/lib/storage";
import { supabase } from "@/lib/supabase";

export default function MediaManager() {
  const [media, setMedia] = useState<Media[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  useEffect(() => {
    loadMedia();
  }, []);

  const loadMedia = async () => {
    const { data, error } = await supabase
      .from("media")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Error loading media:", error);
      return;
    }

    setMedia(data);
  };

  const handleFileUpload = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    try {
      await uploadFile(file, "site-media");
      await loadMedia();
    } catch (error) {
      console.error("Error uploading file:", error);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (url: string) => {
    try {
      await deleteFile(url);
      await loadMedia();
    } catch (error) {
      console.error("Error deleting file:", error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Media Manager</h1>
        <div>
          <Input
            type="file"
            onChange={handleFileUpload}
            disabled={isUploading}
            className="hidden"
            id="file-upload"
          />
          <label htmlFor="file-upload">
            <Button as="span" disabled={isUploading}>
              {isUploading ? "Uploading..." : "Upload File"}
            </Button>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {media.map((item) => (
          <Card key={item.id} className="p-4">
            <div className="aspect-square relative mb-2">
              {item.type.startsWith("image/") ? (
                <img
                  src={item.url}
                  alt={item.name}
                  className="w-full h-full object-cover rounded"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-gray-100 rounded">
                  {item.type}
                </div>
              )}
            </div>
            <p className="text-sm truncate mb-2">{item.name}</p>
            <Button
              variant="destructive"
              size="sm"
              className="w-full"
              onClick={() => handleDelete(item.url)}
            >
              Delete
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
