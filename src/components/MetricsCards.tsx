
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Users, Leaf, Droplets, Sun } from "lucide-react";

const metrics = [
  {
    title: "Total Farms",
    value: "2,450",
    change: "+12%",
    trend: "up",
    icon: Leaf,
  },
  {
    title: "Active Users",
    value: "1,230",
    change: "+8%",
    trend: "up",
    icon: Users,
  },
  {
    title: "Water Usage",
    value: "85%",
    change: "-5%",
    trend: "down",
    icon: Droplets,
  },
  {
    title: "Weather Score",
    value: "92",
    change: "+3%",
    trend: "up",
    icon: Sun,
  },
];

export function MetricsCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {metrics.map((metric) => (
        <Card key={metric.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              {metric.title}
            </CardTitle>
            <metric.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{metric.value}</div>
            <p className="text-xs text-muted-foreground flex items-center">
              {metric.trend === "up" ? (
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
              ) : (
                <TrendingDown className="h-3 w-3 text-red-500 mr-1" />
              )}
              {metric.change} from last month
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
