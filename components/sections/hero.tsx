import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="container flex flex-col items-center gap-8 pt-20 pb-16 md:pt-32 md:pb-24">
      <div className="flex max-w-[64rem] flex-col items-center gap-5 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Build Something Amazing
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          A modern, clean template powered by Next.js and shadcn/ui.
          Easily customizable and ready to scale for your next project.
        </p>
        <div className="flex gap-4">
          <Button size="lg" className="gap-2">
            Get Started <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}