import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";

export const ConclusionSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-4xl">
        <Card className="p-8 md:p-12 bg-card border-border shadow-xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Team?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            This one-day outbound training is not just a program — it is a leadership transformation experience. 
            Your team will return energized, aligned, and ready to lead with confidence, compassion, and clarity.
          </p>
          
          <div className="border-t border-border pt-8 mb-8">
            <p className="text-xl text-card-foreground font-medium">
              We look forward to partnering with you to build strong leaders and an unstoppable team.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Mail className="w-5 h-5 mr-2" />
              Get in Touch
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <Phone className="w-5 h-5 mr-2" />
              Schedule a Call
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};
