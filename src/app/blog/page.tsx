import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const placeholderPosts = [
  {
    id: 1,
    title: "Getting Started with Sloppy",
    excerpt: "Learn how to set up your first project and start building faster than ever before. We'll cover the basics and get you up and running in minutes.",
    date: "2026-02-18",
    readTime: "5 min read",
    category: "Tutorial"
  },
  {
    id: 2,
    title: "Best Practices for Rapid Development",
    excerpt: "Discover the workflows and techniques that help our team ship products at lightning speed. From iteration cycles to feedback loops.",
    date: "2026-02-18",
    readTime: "8 min read",
    category: "Guides"
  },
  {
    id: 3,
    title: "Why We Built Sloppy",
    excerpt: "The story behind the project and our philosophy on software development. Sometimes being a little messy is actually the right answer.",
    date: "2026-02-18",
    readTime: "6 min read",
    category: "Announcements"
  },
  {
    id: 4,
    title: "Deploying with Confidence",
    excerpt: "A deep dive into our deployment strategy and how we ensure zero-downtime releases even with rapid iteration.",
    date: "2026-02-18",
    readTime: "7 min read",
    category: "DevOps"
  },
  {
    id: 5,
    title: "The Art of Minimalism in Code",
    excerpt: "How to do more with less. We explore the principles of minimal setup and why configuration should be a means, not an end.",
    date: "2026-02-18",
    readTime: "4 min read",
    category: "Philosophy"
  },
  {
    id: 6,
    title: "Community Showcase: Projects Built with Sloppy",
    excerpt: "See what others are building. From startups to side projects, discover the amazing things our community creates.",
    date: "2026-02-18",
    readTime: "5 min read",
    category: "Community"
  }
];

export default function BlogIndex() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight mb-4">
            Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts on rapid development, minimalism, and shipping faster.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {placeholderPosts.map((post) => (
            <Card key={post.id} className="flex flex-col h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {post.category}
                  </span>
                </div>
                <CardTitle className="text-xl line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto pt-4 border-t flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-16 text-center text-sm text-muted-foreground">
          <p>Placeholder posts generated at 2/18/2026, 1:45:00 PM</p>
        </div>
      </div>
    </div>
  );
}