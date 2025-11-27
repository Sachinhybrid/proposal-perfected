import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";

export const OutcomesSection = () => {
  const outcomes = [
    "Improved leadership mindset",
    "Better teamwork & collaboration",
    "Enhanced communication",
    "Higher accountability & ownership",
    "Stronger problem-solving skills",
    "Improved inter-department coordination",
    "Better decision-making",
    "Positive attitude & behavioural change"
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <TrendingUp className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Key Outcomes for Your Organization
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            After the program, participants will demonstrate:
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {outcomes.map((outcome, index) => (
            <Card key={index} className="p-6 bg-card border-border hover:border-primary/30 hover:shadow-md transition-all">
              <div className="flex items-start gap-3">
                <span className="text-primary text-xl flex-shrink-0">✔</span>
                <p className="text-muted-foreground font-medium">{outcome}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
