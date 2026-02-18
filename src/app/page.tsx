import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-8">
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
          <div className="grid gap-6 md:grid-cols-3">
            <div className="space-y-2">
              <h3 className="font-semibold">Rapid Development</h3>
              <p className="text-sm text-muted-foreground">
                Skip the boilerplate. Get to the core of your idea without the fuss.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Minimal Setup</h3>
              <p className="text-sm text-muted-foreground">
                Everything you need, nothing you don&apos;t. Pure productivity.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Deploy Instantly</h3>
              <p className="text-sm text-muted-foreground">
                From concept to production in minutes, not days.
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-4">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}