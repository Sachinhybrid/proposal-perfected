import { Card } from "@/components/ui/card";
import { Target, Users } from "lucide-react";

export const ObjectivesSection = () => {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Training Objectives
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-8 bg-card border-border shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-card-foreground">
                Leadership Development
              </h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Shift from task mindset to leadership mindset</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Develop clarity, accountability & ownership</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Improve communication, empathy & people management</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Strengthen decision-making under pressure</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Build confidence to lead teams effectively</span>
              </li>
            </ul>
          </Card>
          
          <Card className="p-8 bg-card border-border shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-primary/10 rounded-lg">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-card-foreground">
                Team Building
              </h3>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Build trust and collaboration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Improve coordination & conflict handling</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Encourage unity, synergy & collective performance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Strengthen team communication</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-1">✓</span>
                <span>Understand strengths & behavioural patterns of team members</span>
              </li>
            </ul>
          </Card>
        </div>
        
        <Card className="mt-8 p-6 bg-primary/5 border-primary/20">
          <p className="text-center text-lg font-semibold text-foreground">
            <span className="text-primary">Outcome:</span> Participants return with clear leadership actions, improved team dynamics, and a strong sense of purpose.
          </p>
        </Card>
      </div>
    </section>
  );
};
