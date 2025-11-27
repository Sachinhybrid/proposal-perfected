import { Card } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

export const ProgramFocusSection = () => {
  const focusPoints = [
    "Building strong leadership mindset",
    "Enhancing team collaboration",
    "Improving communication & decision-making",
    "Developing accountability and ownership",
    "Strengthening emotional intelligence & problem-solving"
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <Card className="p-8 md:p-10 bg-card border-border shadow-lg">
          <h3 className="text-2xl font-bold text-card-foreground mb-6">
            The program focuses on:
          </h3>
          
          <ul className="space-y-4 mb-8">
            {focusPoints.map((point, index) => (
              <li key={index} className="flex items-start gap-3 text-lg text-muted-foreground">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          
          <div className="pt-6 border-t border-border">
            <p className="text-lg font-semibold text-card-foreground italic">
              This is not a theory class — it is full of activities, challenges, and real-time learning.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};
