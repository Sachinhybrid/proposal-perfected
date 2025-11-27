import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const DeliverablesSection = () => {
  const deliverables = [
    "One-Day Experiential Leadership & Team Building Training",
    "Certified Leadership Trainer & Facilitators",
    "10–12 High-Impact Activities",
    "All training materials & props",
    "Motivational videos & presentations",
    "Real-time team reports & trainer observations",
    "Certificates of Participation",
    "Post-training summary report (optional)"
  ];

  const highlights = [
    "100% activity-based",
    "Zero boredom – highly engaging",
    "Leadership behaviour emerges naturally",
    "Memorable experiences → long-term impact",
    "Customizable for any industry",
    "Safe, supportive, and fun environment",
    "Professional facilitators experienced in corporate learning"
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Deliverables & Program Highlights
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card border-border shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-card-foreground flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              What You Get
            </h3>
            <ul className="space-y-3">
              {deliverables.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary mt-1 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          
          <Card className="p-8 bg-card border-border shadow-md">
            <h3 className="text-2xl font-semibold mb-6 text-card-foreground flex items-center gap-2">
              <CheckCircle2 className="w-6 h-6 text-primary" />
              Program Highlights
            </h3>
            <ul className="space-y-3">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary mt-1 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
};
