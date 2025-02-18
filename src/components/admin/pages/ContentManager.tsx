import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { ContentSection } from "@/types/schema";
import { getContentSection, updateContentSection } from "@/lib/content";

export default function ContentManager() {
  const [sections, setSections] = useState<ContentSection[]>([]);
  const [selectedSection, setSelectedSection] = useState<ContentSection | null>(
    null,
  );

  useEffect(() => {
    // Load content sections
    // TODO: Add function to get all sections
  }, []);

  const handleSave = async () => {
    if (!selectedSection) return;

    try {
      await updateContentSection(selectedSection.id, selectedSection);
      // Refresh sections
    } catch (error) {
      console.error("Error saving section:", error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Content Manager</h1>
        <Button>New Section</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 col-span-1">
          <h3 className="font-semibold mb-4">Sections</h3>
          <div className="space-y-2">
            {sections.map((section) => (
              <Button
                key={section.id}
                variant="ghost"
                className="w-full justify-start"
                onClick={() => setSelectedSection(section)}
              >
                {section.name}
              </Button>
            ))}
          </div>
        </Card>

        {selectedSection && (
          <Card className="p-6 col-span-2">
            <h3 className="font-semibold mb-4">Edit Section</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <Input
                  value={selectedSection.name}
                  onChange={(e) =>
                    setSelectedSection({
                      ...selectedSection,
                      name: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">
                  Content
                </label>
                <Textarea
                  value={JSON.stringify(selectedSection.content, null, 2)}
                  onChange={(e) =>
                    setSelectedSection({
                      ...selectedSection,
                      content: JSON.parse(e.target.value),
                    })
                  }
                  rows={10}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  checked={selectedSection.is_published}
                  onCheckedChange={(checked) =>
                    setSelectedSection({
                      ...selectedSection,
                      is_published: checked,
                    })
                  }
                />
                <label>Published</label>
              </div>

              <Button onClick={handleSave}>Save Changes</Button>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
