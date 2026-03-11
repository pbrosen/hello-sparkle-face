import { Headphones } from "lucide-react";
import HarkenLogo from "./HarkenLogo";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <HarkenLogo className="h-6 w-auto text-foreground" />
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} HarkenAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
