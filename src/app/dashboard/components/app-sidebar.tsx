import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import * as React from "react";
import NavMenu from "./nav-menu";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      {/* Header */}
      <SidebarHeader className="h-16 flex items-center justify-center border-b"></SidebarHeader>
      {/* Content */}
      <SidebarContent>
        <NavMenu />
      </SidebarContent>
      {/* Rail */}
      <SidebarRail />
    </Sidebar>
  );
}
