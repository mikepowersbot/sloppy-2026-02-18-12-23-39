import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Rocket, CloudLightning, Shield } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Rocket,
      title: "Ship at Light Speed",
      description: "Stop over-engineering. Start delivering. Our streamlined workflow eliminates decision fatigue so you can focus on what matters—building something real.",
    },
    {
      icon: CloudLightning,
      title: "Zero Config, All Power",
      description: "No more configuration hell. Everything just works out of the box. Spend your time writing code, not tweaking settings.",
    },
    {
      icon: Shield,
      title: "Confident Deployments",
      description: "From local machine to global scale in one command. Deploy with confidence, iterate without fear.",
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
              Perfect is the enemy of done. Build it, ship it, improve it.
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex justify-center gap-4">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-6">Start Building</button>
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 border border-input bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-11 rounded-md px-6">See How It Works</button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Features Section */}
      <section className="py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Built for builders who refuse to wait
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We stripped away everything that slows you down. What&apos;s left is pure creation—fast, focused, and frictionless.
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