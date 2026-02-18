import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, Lightning, Shield } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Rocket,
      title: "Rapid Development",
      description: "Skip the boilerplate. Get to the core of your idea without the fuss. Build faster with our streamlined workflow.",
    },
    {
      icon: Lightning,
      title: "Minimal Setup",
      description: "Everything you need, nothing you don&apos;t. Pure productivity with zero configuration overhead.",
    },
    {
      icon: Shield,
      title: "Deploy Instantly",
      description: "From concept to production in minutes, not days. One-click deployment to any platform.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex items-center justify-center bg-muted/30 p-8 py-24">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-4xl font-bold tracking-tight">
              Sloppy
            </CardTitle>
            <p className="text-xl text-muted-foreground">
              Build faster. Ship sooner. Embrace the chaos.
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex justify-center gap-4">
              <Button size="lg">Get Started</Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Features Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Why Choose Sloppy?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to build and ship your next big idea, without the complexity.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="relative overflow-hidden group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
