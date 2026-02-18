import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Rocket, CloudLightning, Shield } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Rocket,
      title: "Ship 10x Faster",
      description: "Stop wrestling with configuration. Our battle-tested templates and best practices let you launch production-ready apps in hours, not weeks.",
    },
    {
      icon: CloudLightning,
      title: "Zero Setup, Zero Stress",
      description: "No more dependency hell or environment headaches. Everything is pre-configured and ready to code. Start building meaningful features from minute one.",
    },
    {
      icon: Shield,
      title: "Deploy with Confidence",
      description: "Push to production with one click. Automatic CI/CD, instant rollbacks, and enterprise-grade security built in. Sleep soundly knowing your app is live and secure.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="flex items-center justify-center bg-muted/30 p-8 py-24">
        <Card className="w-full max-w-2xl">
          <CardHeader className="text-center space-y-4">
            <CardTitle className="text-4xl font-bold tracking-tight">
              Build Faster. Ship Sooner.
            </CardTitle>
            <p className="text-xl text-muted-foreground">
              The modern developer platform that eliminates boilerplate and gets your ideas into production in record time. Focus on what matters—your product.
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="flex justify-center gap-4">
              <Button size="lg">Start Building Free</Button>
              <Button size="lg" variant="outline">
                See How It Works
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
              Stop configuring. Start creating.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We've engineered every detail so you can focus on building features users love. This is development, simplified.
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