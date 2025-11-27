import { Card } from "@/components/ui/card";
import { DollarSign } from "lucide-react";

export const InvestmentSection = () => {
  const includes = [
    "Facilitator fee",
    "Training modules",
    "Activity setups & materials",
    "Certificates",
    "Travel & logistics (if applicable)"
  ];

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="p-3 bg-primary/10 rounded-lg">
              <DollarSign className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Investment
          </h2>
        </div>
        
        <Card className="p-8 bg-card border-border shadow-lg max-w-3xl mx-auto">
          <p className="text-center text-muted-foreground mb-6 text-lg">
            To be customized based on group size and location
          </p>
          
          <div className="border-t border-border pt-6">
            <h3 className="text-xl font-semibold mb-4 text-card-foreground">
              Package Includes:
            </h3>
            <ul className="space-y-3">
              {includes.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-muted-foreground">
                  <span className="text-primary mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Card>
      </div>
    </section>
  );
};
