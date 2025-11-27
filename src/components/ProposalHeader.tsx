import logo from "@/assets/scaleon-logo.png";

export const ProposalHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <img src={logo} alt="SCALEON - The Growth Partner" className="h-12 w-auto" />
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Leadership Training Proposal</p>
        </div>
      </div>
    </header>
  );
};
