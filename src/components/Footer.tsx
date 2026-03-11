import { Headphones } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-10">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Headphones className="h-4 w-4 text-primary" />
          <span className="font-heading text-sm font-semibold text-foreground">HarkenAI</span>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} HarkenAI. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
