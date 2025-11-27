import { Card } from "@/components/ui/card";
import { Award, Zap, Users, Settings, HeartHandshake, BarChart } from "lucide-react";

export const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Award,
      title: "Proven Expertise",
      description: "Expertise in leadership, team behaviour & organizational psychology"
    },
    {
      icon: Zap,
      title: "Activity-Based Learning",
      description: "Proven activity-based learning methodology"
    },
    {
      icon: Users,
      title: "Engaging Trainers",
      description: "Engaging, high-energy trainers"
    },
    {
      icon: Settings,
      title: "Custom Design",
      description: "Custom-designed experiences"
    },
    {
      icon: HeartHandshake,
      title: "Strong Support",
      description: "Strong follow-up support"
    },
    {
      icon: BarChart,
      title: "Measurable Results",
      description: "Guaranteed transformation & measurable outcomes"
    }
  ];

  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Why Choose Us
        </h2>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Card key={index} className="p-6 bg-card border-border hover:border-primary/30 hover:shadow-lg transition-all">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="p-4 bg-primary/10 rounded-full">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {reason.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
