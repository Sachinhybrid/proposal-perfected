import logo from "@/assets/scaleon-logo.png";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export const ProposalHeader = () => {
  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border print:hidden">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <img src={logo} alt="SCALEON - The Growth Partner" className="h-12 w-auto" />
        <div className="flex items-center gap-4">
          <Button 
            onClick={handleDownloadPDF}
            className="flex items-center gap-2"
            variant="default"
          >
            <Download className="h-4 w-4" />
            Download PDF
          </Button>
          <div className="text-right">
            <p className="text-sm text-muted-foreground">Leadership Training Proposal</p>
          </div>
        </div>
      </div>
    </header>
  );
};
