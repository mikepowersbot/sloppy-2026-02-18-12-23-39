import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
  {
    title: "Total Projects",
    value: "12",
    description: "Active projects this month",
    change: "+2 from last month",
  },
  {
    title: "Storage Used",
    value: "8.5 GB",
    description: "Of 50 GB allocated",
    change: "17% utilized",
  },
  {
    title: "Page Views",
    value: "24.5K",
    description: "Last 30 days",
    change: "+12.5% from last month",
  },
  {
    title: "Active Users",
    value: "1,234",
    description: "Unique visitors",
    change: "+8.2% from last month",
  },
];

const recentActivity = [
  { action: "Project deployed", project: "E-commerce Site", time: "2 hours ago" },
  { action: "Template applied", project: "Blog v2", time: "5 hours ago" },
  { action: "Storage upgraded", project: "All projects", time: "1 day ago" },
  { action: "New team member", project: "Marketing Site", time: "2 days ago" },
  { action: "Analytics report", project: "Dashboard", time: "3 days ago" },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen py-8 px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground mt-2">
            Overview of your projects and activity
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">{stat.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.description}
                </p>
                <p className="text-xs text-green-600 mt-2 font-medium">
                  {stat.change}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid gap-4 lg:grid-cols-3">
          {/* Recent Activity */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
              <CardDescription>
                Latest actions across your projects
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                  >
                    <div>
                      <p className="font-medium">{activity.action}</p>
                      <p className="text-sm text-muted-foreground">
                        {activity.project}
                      </p>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {activity.time}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>
                Common tasks and shortcuts
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <a
                  href="/pricing"
                  className="block w-full text-left px-4 py-2 rounded-md border hover:bg-accent transition-colors"
                >
                  Upgrade Plan
                </a>
                <a
                  href="/about"
                  className="block w-full text-left px-4 py-2 rounded-md border hover:bg-accent transition-colors"
                >
                  View Documentation
                </a>
                <a
                  href="/contact"
                  className="block w-full text-left px-4 py-2 rounded-md border hover:bg-accent transition-colors"
                >
                  Contact Support
                </a>
                <a
                  href="#"
                  className="block w-full text-left px-4 py-2 rounded-md border hover:bg-accent transition-colors"
                >
                  Export Data
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Project Overview */}
        <Card className="mt-4">
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
            <CardDescription>
              Status of your recent projects
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { name: "E-commerce Site", status: "Deployed", health: "100%" },
                { name: "Blog v2", status: "Draft", health: "85%" },
                { name: "Marketing Site", status: "Deployed", health: "100%" },
                { name: "Portfolio", status: "Review", health: "92%" },
              ].map((project, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between border-b pb-4 last:border-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium">{project.name}</p>
                    <p className="text-sm text-muted-foreground">
                      Status: {project.status}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium">{project.health}</p>
                    <p className="text-sm text-muted-foreground">Health</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}