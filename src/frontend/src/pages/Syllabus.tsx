import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { SYLLABUS_DATA } from "../data/syllabus";
import { useMarkTopicComplete } from "../hooks/useQueries";

const LS_KEY = "cetprep_completed_topics";

function loadCompleted(): Set<string> {
  try {
    const data = localStorage.getItem(LS_KEY);
    return data ? new Set(JSON.parse(data)) : new Set();
  } catch {
    return new Set();
  }
}

function saveCompleted(set: Set<string>) {
  localStorage.setItem(LS_KEY, JSON.stringify([...set]));
}

export function Syllabus() {
  const [completed, setCompleted] = useState<Set<string>>(loadCompleted);
  const markTopicMutation = useMarkTopicComplete();

  const toggleTopic = (topicName: string) => {
    setCompleted((prev) => {
      const next = new Set(prev);
      if (next.has(topicName)) {
        next.delete(topicName);
      } else {
        next.add(topicName);
        markTopicMutation.mutate(topicName);
      }
      saveCompleted(next);
      return next;
    });
  };

  const totalTopics = SYLLABUS_DATA.reduce(
    (sum, s) => sum + s.topics.length,
    0,
  );
  const totalCompleted = completed.size;
  const overallPct = Math.round((totalCompleted / totalTopics) * 100);

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Syllabus Tracker</h1>
        <p className="text-muted-foreground mt-1">
          Track your preparation progress topic by topic
        </p>
      </div>

      {/* Overall Progress */}
      <Card className="border border-border mb-8">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="font-semibold text-foreground">
                Overall Progress
              </h3>
              <p className="text-sm text-muted-foreground">
                {totalCompleted} of {totalTopics} topics completed
              </p>
            </div>
            <div className="text-3xl font-bold text-primary">{overallPct}%</div>
          </div>
          <Progress value={overallPct} className="h-3" />
        </CardContent>
      </Card>

      {/* Subject Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {SYLLABUS_DATA.map((subj) => {
          const subjCompleted = subj.topics.filter((t) =>
            completed.has(t.name),
          ).length;
          const pct = Math.round((subjCompleted / subj.topics.length) * 100);
          return (
            <Card key={subj.id} className="border border-border">
              <CardContent className="p-4">
                <div
                  className="w-3 h-3 rounded-full mb-2"
                  style={{ backgroundColor: subj.color }}
                />
                <p className="font-medium text-sm text-foreground">
                  {subj.name}
                </p>
                <div
                  className="text-xl font-bold mt-1"
                  style={{ color: subj.color }}
                >
                  {pct}%
                </div>
                <p className="text-xs text-muted-foreground">
                  {subjCompleted}/{subj.topics.length}
                </p>
                <Progress value={pct} className="mt-2 h-1.5" />
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Accordion by Subject */}
      <Accordion type="multiple" defaultValue={SYLLABUS_DATA.map((s) => s.id)}>
        {SYLLABUS_DATA.map((subj) => {
          const subjCompleted = subj.topics.filter((t) =>
            completed.has(t.name),
          ).length;
          return (
            <AccordionItem
              key={subj.id}
              value={subj.id}
              className="mb-3 border border-border rounded-xl overflow-hidden"
            >
              <AccordionTrigger className="px-5 py-4 hover:no-underline bg-white hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: subj.color }}
                  />
                  <span className="font-semibold text-foreground">
                    {subj.name}
                  </span>
                  <Badge variant="outline" className="ml-2 text-xs">
                    {subjCompleted}/{subj.topics.length} completed
                  </Badge>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-5 pb-4 bg-white">
                <div className="space-y-2 mt-2">
                  {subj.topics.map((topic, idx) => (
                    <div
                      key={topic.name}
                      className="flex items-center gap-3 py-2.5 px-3 rounded-lg hover:bg-gray-50 transition-colors"
                      data-ocid={`syllabus.item.${idx + 1}`}
                    >
                      <Checkbox
                        id={topic.name}
                        checked={completed.has(topic.name)}
                        onCheckedChange={() => toggleTopic(topic.name)}
                        data-ocid={`syllabus.checkbox.${idx + 1}`}
                      />
                      <label
                        htmlFor={topic.name}
                        className={`text-sm cursor-pointer flex-1 ${completed.has(topic.name) ? "line-through text-muted-foreground" : "text-foreground"}`}
                      >
                        {topic.name}
                      </label>
                      {completed.has(topic.name) && (
                        <Badge
                          variant="secondary"
                          className="text-xs bg-green-100 text-green-700"
                        >
                          Done
                        </Badge>
                      )}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
    </div>
  );
}
