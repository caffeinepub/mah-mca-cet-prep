import sys

with open('/home/ubuntu/workspace/src/frontend/src/pages/Dashboard.tsx', 'r') as f:
    content = f.read()

new_section = """
        {/* Mock Prediction Tests */}
        <section data-ocid="mock_prediction.section">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
                <Brain className="w-6 h-6 text-purple-600" />
                Mock Prediction Tests
              </h2>
              <p className="text-muted-foreground text-sm mt-1">
                3 full-length mocks with 150 unique questions each, covering all MCA CET topics
              </p>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onNavigate("mock-prediction")}
              data-ocid="mock_prediction.view_all.button"
            >
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {([1, 2, 3] as const).map((id, idx) => {
              const colors = [
                { color: "#1E63D6", bg: "#EBF0FD" },
                { color: "#7C3AED", bg: "#EDE9FE" },
                { color: "#D97706", bg: "#FEF3C7" },
              ];
              const { color, bg } = colors[idx];
              return (
                <motion.div
                  key={id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card
                    className="border-2 hover:shadow-lg transition-all cursor-pointer group"
                    style={{ borderColor: `${color}33` }}
                    onClick={() => onNavigate("mock-prediction")}
                  >
                    <CardContent className="p-6">
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 text-lg font-bold"
                        style={{ backgroundColor: bg, color }}
                      >
                        M{id}
                      </div>
                      <h3 className="font-bold text-foreground text-lg mb-1">
                        Mock {id} Prediction
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4">
                        150 Questions · 4 Subjects · Exam Level
                      </p>
                      <div className="flex flex-wrap gap-1 mb-4">
                        {["Math", "CS", "Reasoning", "English"].map((s) => (
                          <Badge
                            key={s}
                            variant="outline"
                            className="text-xs"
                            style={{ borderColor: color, color }}
                          >
                            {s}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        className="w-full font-semibold group-hover:opacity-90 transition-opacity"
                        style={{ backgroundColor: color }}
                        onClick={(e) => {
                          e.stopPropagation();
                          onNavigate("mock-prediction");
                        }}
                        data-ocid={`mock_prediction.start.button.${id}`}
                      >
                        Start Mock {id}
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </section>
"""

old = "        {/* Mock Exams + Syllabus Tracker */}"
new_content = content.replace(old, new_section + old, 1)

with open('/home/ubuntu/workspace/src/frontend/src/pages/Dashboard.tsx', 'w') as f:
    f.write(new_content)

print('Done, changed:', new_content != content)
