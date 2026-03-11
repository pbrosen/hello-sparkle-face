import { Button } from "@/components/ui/button";
import { Headphones } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="section-container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
            <Headphones className="h-4 w-4 text-primary" />
          </div>
          <span className="font-heading text-lg font-semibold tracking-tight text-foreground">
            HarkenAI
          </span>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Download
          </Button>
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
            Log In
          </Button>
          <Button variant="hero" size="sm">
            Get Started Free
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
