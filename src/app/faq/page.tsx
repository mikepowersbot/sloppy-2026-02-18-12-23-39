import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function FAQ() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-8">
      <Card className="w-full max-w-3xl">
        <CardHeader className="text-center space-y-4">
          <CardTitle className="text-4xl font-bold tracking-tight">
            Frequently Asked Questions
          </CardTitle>
          <p className="text-xl text-muted-foreground">
            Got questions? We&apos;ve got answers.
          </p>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left hover:no-underline">
                What is Sloppy?
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4">
                Sloppy is a productivity tool designed to help you organize tasks, track projects, and boost your efficiency. 
                It embraces a &quot;good enough&quot; philosophy—focusing on getting things done without over-engineering.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left hover:no-underline">
                Is Sloppy free to use?
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4">
                We offer a free tier with basic features, plus paid plans for teams and power users. 
                Check out our <a href="/pricing" className="text-primary hover:underline">Pricing page</a> for details.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left hover:no-underline">
                How does Sloppy differ from other task managers?
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4">
                Sloppy focuses on simplicity and speed. We avoid unnecessary complexity and help you 
                iterate quickly. It&apos;s perfect for developers, makers, and anyone who values velocity over perfection.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left hover:no-underline">
                Can I use Sloppy with my team?
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4">
                Absolutely! Our team plans include collaboration features like shared projects, 
                real-time updates, and role-based permissions. Invite your team and start building together.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left hover:no-underline">
                Is my data secure?
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4">
                Yes. We take security seriously. All data is encrypted in transit and at rest. 
                We comply with industry standards and offer features like two-factor authentication for added protection.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left hover:no-underline">
                How do I get started?
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4">
                Simply sign up for an account, and you&apos;ll be guided through a quick onboarding process. 
                You can start adding tasks and projects immediately. No complicated setup required!
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left hover:no-underline">
                Can I import my existing tasks?
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4">
                Yes! Sloppy supports importing from various formats including CSV, JSON, and integrations with popular tools like Todoist, Trello, and Asana. 
                Check our documentation for step-by-step guides.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border rounded-lg px-4">
              <AccordionTrigger className="text-left hover:no-underline">
                What if I need help or have feedback?
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4">
                We&apos;d love to hear from you! Reach out via our <a href="/contact" className="text-primary hover:underline">Contact page</a> or join our community forum. 
                Your feedback helps us make Sloppy better for everyone.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
}