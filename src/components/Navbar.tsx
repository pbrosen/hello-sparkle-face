import { Button } from "@/components/ui/button";
import HarkenLogo from "./HarkenLogo";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="section-container flex h-16 items-center justify-between">
        <HarkenLogo className="h-7 w-auto text-foreground" />
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
