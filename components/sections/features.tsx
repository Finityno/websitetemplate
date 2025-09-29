import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Palette, Code } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Fast & Modern",
    description: "Built with Next.js 15 for optimal performance and user experience.",
  },
  {
    icon: Palette,
    title: "Beautiful UI",
    description: "Elegant components from shadcn/ui with full dark mode support.",
  },
  {
    icon: Code,
    title: "Developer Ready",
    description: "Clean, extensible code structure ready for your next project.",
  },
];

export function Features() {
  return (
    <section className="container py-16 md:py-24">
      <div className="flex flex-col items-center gap-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Everything You Need
        </h2>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl">
          A solid foundation with modern tools and best practices built in.
        </p>
      </div>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="relative overflow-hidden">
            <CardHeader>
              <feature.icon className="h-10 w-10 mb-2" />
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  );
}