import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-8">
      <Card className="w-full max-w-3xl">
        <CardHeader className="text-center space-y-4">
          <CardTitle className="text-4xl font-bold tracking-tight">
            About Sloppy
          </CardTitle>
          <p className="text-xl text-muted-foreground">
            The story behind the chaos
          </p>
        </CardHeader>
        <CardContent className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sloppy was born from a simple belief: development doesn&apos;t have to be perfect to be powerful. 
              We&apos;re here to challenge the notion that every line of code must be pristine before it sees the light of day. 
              Our mission is to empower developers to build, experiment, and iterate faster by embracing a more pragmatic approach to software creation.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">The Philosophy</h2>
            <p className="text-muted-foreground leading-relaxed">
              In a world obsessed with perfect architecture and endless refactoring, we choose action over perfection. 
              Sloppy isn&apos;t about writing bad code—it&apos;s about writing <em>enough</em> code to solve real problems today, 
              not hypothetical problems tomorrow. We believe that the best software emerges from real usage, not from endless planning.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Where It Started</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sloppy began as an internal tool for a small team tired of wrestling with complex boilerplate and configuration. 
              What started as a simple &quot;get it done&quot; approach quickly evolved into a full-fledged philosophy. 
              We stripped away everything that wasn&apos;t essential and kept only what mattered: a fast, reliable way to turn ideas into working software.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">What We Stand For</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="font-semibold">Velocity</h3>
                <p className="text-sm text-muted-foreground">
                  Move fast and learn faster. Every minute saved on setup is a minute spent building.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Pragmatism</h3>
                <p className="text-sm text-muted-foreground">
                  Use the right tool for the job, not the trendiest one. Simplicity wins.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Iteration</h3>
                <p className="text-sm text-muted-foreground">
                  Perfect is the enemy of good. Ship, learn, improve—repeat.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">Community</h3>
                <p className="text-sm text-muted-foreground">
                  We&apos;re building this together. Feedback, contributions, and chaos welcome.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4 pt-4 border-t">
            <h2 className="text-2xl font-semibold">Join the Movement</h2>
            <p className="text-muted-foreground leading-relaxed">
              Whether you&apos;re a seasoned developer tired of over-engineering or a beginner looking for a straightforward way to build, 
              Sloppy is here to help. Embrace the chaos. Build something meaningful.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}