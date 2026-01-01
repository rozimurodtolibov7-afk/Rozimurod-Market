import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, Lightbulb } from "lucide-react";

interface PlaceholderProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function Placeholder({ 
  title = "Coming Soon",
  description = "This page is being built. Check back soon!",
  icon = <Lightbulb className="w-16 h-16" />
}: PlaceholderProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30 flex flex-col">
      <Header />

      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-md">
          <div className="mb-6 flex justify-center text-primary/50">
            {icon}
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" className="rounded-lg" asChild>
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Go Home
              </Link>
            </Button>
            <Button className="rounded-lg bg-gradient-to-r from-primary to-accent" asChild>
              <Link to="/marketplace">Browse Products</Link>
            </Button>
          </div>
          <p className="mt-8 text-xs text-muted-foreground">
            💡 Want to help complete this page? Let us know what features you'd like to see!
          </p>
        </div>
      </div>
    </div>
  );
}
