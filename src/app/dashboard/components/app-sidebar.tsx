import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Menu, Search } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import NavMenu from "./nav-menu";
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="!border-r-0">
      {/* Header */}
      <SidebarHeader className="flex-row items-center justify-between p-8 border-b">
        <Link href="/dashboard">
          <picture>
            <img src="/images/logo.svg" alt="master POS" className="h-14" />
          </picture>
        </Link>
        <Button
          size="icon"
          variant="ghost"
          className="group-data-[collapsible=icon]:hidden"
        >
          <Menu className="size-7" />
        </Button>
      </SidebarHeader>
      {/* Content */}
      <SidebarContent className="p-8 gap-8">
        <div className="group-data-[collapsible=icon]:hidden relative">
          <Input placeholder="Search here" className="pl-11" />
          <Search className="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        </div>
        <NavMenu />
      </SidebarContent>
      {/* Rail */}
      <SidebarRail />
    </Sidebar>
  );
}
