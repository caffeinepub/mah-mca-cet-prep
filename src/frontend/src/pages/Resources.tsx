import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { LOCAL_RESOURCES } from "../data/resources";

const SUBJECT_TABS = [
  { id: "all", label: "All" },
  { id: "math", label: "Mathematics" },
  { id: "computerConcepts", label: "Computer Concepts" },
  { id: "logicalReasoning", label: "Logical Reasoning" },
  { id: "english", label: "English" },
];

const TYPE_COLORS: Record<string, string> = {
  notes: "bg-blue-100 text-blue-700",
  formula: "bg-purple-100 text-purple-700",
  tips: "bg-green-100 text-green-700",
  video: "bg-red-100 text-red-700",
  practice: "bg-orange-100 text-orange-700",
};

export function Resources() {
  const [activeTab, setActiveTab] = useState("all");

  const filtered =
    activeTab === "all"
      ? LOCAL_RESOURCES
      : LOCAL_RESOURCES.filter((r) => r.subject === activeTab);

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Study Resources</h1>
        <p className="text-muted-foreground mt-1">
          Curated notes, formula sheets, tips and videos for MAH-MCA-CET
          preparation
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-6 flex-wrap h-auto gap-1">
          {SUBJECT_TABS.map((t) => (
            <TabsTrigger
              key={t.id}
              value={t.id}
              data-ocid={`resources.${t.id}.tab`}
            >
              {t.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {SUBJECT_TABS.map((tab) => (
          <TabsContent key={tab.id} value={tab.id}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((r, idx) => (
                <Card
                  key={r.id}
                  className="border border-border hover:shadow-md transition-shadow group"
                  data-ocid={`resources.item.${idx + 1}`}
                >
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-3xl shrink-0">{r.icon}</span>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold text-foreground text-sm leading-tight">
                            {r.title}
                          </h3>
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${TYPE_COLORS[r.type]}`}
                          >
                            {r.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {r.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors"
                      onClick={() =>
                        r.url !== "#" && window.open(r.url, "_blank")
                      }
                      data-ocid={`resources.open.button.${idx + 1}`}
                    >
                      <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                      {r.type === "video" ? "Watch Now" : "Access Resource"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            {filtered.length === 0 && (
              <div
                className="text-center py-12"
                data-ocid="resources.empty_state"
              >
                <p className="text-muted-foreground">
                  No resources found for this subject.
                </p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
