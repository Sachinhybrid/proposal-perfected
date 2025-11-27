import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ProposalHero = () => {
  return (
    <section className="pt-32 pb-16 px-4 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="flex gap-2 justify-center flex-wrap">
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              Experiential
            </Badge>
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              Transformational
            </Badge>
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              Activity-Based Learning
            </Badge>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Outbound Leadership &<br />Team Building Training Program
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Duration: 1 Day
          </p>
          
          <Card className="p-8 bg-card border-border shadow-lg max-w-3xl mx-auto">
            <p className="text-lg text-card-foreground leading-relaxed">
              Organizations grow when leaders grow. This One-Day Outbound Leadership Program is designed to transform managers, executives, and emerging leaders through a powerful combination of experiential learning, high-energy activities, reflection sessions, leadership models, and real-life business simulations.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};
