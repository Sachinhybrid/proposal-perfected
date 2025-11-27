import { Card } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

export const WhyOutboundSection = () => {
  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Lightbulb className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Why Outbound Training Works
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="p-6 bg-card border-border">
            <h3 className="font-semibold text-lg mb-2 text-card-foreground">Learning by Doing</h3>
            <p className="text-muted-foreground">People learn better by doing, not listening.</p>
          </Card>
          
          <Card className="p-6 bg-card border-border">
            <h3 className="font-semibold text-lg mb-2 text-card-foreground">Safe Environment</h3>
            <p className="text-muted-foreground">It breaks comfort zones in a safe environment.</p>
          </Card>
          
          <Card className="p-6 bg-card border-border">
            <h3 className="font-semibold text-lg mb-2 text-card-foreground">Natural Emergence</h3>
            <p className="text-muted-foreground">Leadership behaviours emerge naturally during activities.</p>
          </Card>
          
          <Card className="p-6 bg-card border-border">
            <h3 className="font-semibold text-lg mb-2 text-card-foreground">Team Bonding</h3>
            <p className="text-muted-foreground">It creates bonding and trust beyond the office setting.</p>
          </Card>
          
          <Card className="p-6 bg-card border-border">
            <h3 className="font-semibold text-lg mb-2 text-card-foreground">Long-term Impact</h3>
            <p className="text-muted-foreground">Principles learned stay long-term because the experience is memorable.</p>
          </Card>
          
          <Card className="p-6 bg-card border-border bg-primary/5 border-primary/20">
            <h3 className="font-semibold text-lg mb-2 text-primary">80% Retention</h3>
            <p className="text-muted-foreground">Research shows experiential learning increases retention by up to 80%.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};
