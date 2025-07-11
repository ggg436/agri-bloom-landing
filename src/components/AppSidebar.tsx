
import {
  Home,
  BarChart3,
  Users,
  Settings,
  Leaf,
  TrendingUp,
  Database,
  Bell
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";

const menuItems = [
  { title: "Dashboard", icon: Home, url: "#" },
  { title: "Analytics", icon: BarChart3, url: "#" },
  { title: "Crops", icon: Leaf, url: "#" },
  { title: "Performance", icon: TrendingUp, url: "#" },
  { title: "Data", icon: Database, url: "#" },
  { title: "Users", icon: Users, url: "#" },
  { title: "Alerts", icon: Bell, url: "#" },
  { title: "Settings", icon: Settings, url: "#" },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <Leaf className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">AgriTech</span>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url} className="flex items-center gap-2">
                      <item.icon className="h-4 w-4" />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <div className="text-xs text-muted-foreground">
          © 2024 AgriTech Dashboard
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
