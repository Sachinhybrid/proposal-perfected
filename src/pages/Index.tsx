import { ProposalHeader } from "@/components/ProposalHeader";
import { ProposalHero } from "@/components/ProposalHero";
import { ProgramFocusSection } from "@/components/ProgramFocusSection";
import { ObjectivesSection } from "@/components/ObjectivesSection";
import { WhyOutboundSection } from "@/components/WhyOutboundSection";
import { ProgramSchedule } from "@/components/ProgramSchedule";
import { DeliverablesSection } from "@/components/DeliverablesSection";
import { OutcomesSection } from "@/components/OutcomesSection";
import { InvestmentSection } from "@/components/InvestmentSection";
import { WhyChooseUsSection } from "@/components/WhyChooseUsSection";
import { ConclusionSection } from "@/components/ConclusionSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <ProposalHeader />
      <ProposalHero />
      <ProgramFocusSection />
      <ObjectivesSection />
      <WhyOutboundSection />
      <ProgramSchedule />
      <DeliverablesSection />
      <OutcomesSection />
      <InvestmentSection />
      <WhyChooseUsSection />
      <ConclusionSection />
      
      <footer className="py-8 px-4 border-t border-border bg-muted/30">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 SCALEON - The Growth Partner. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
