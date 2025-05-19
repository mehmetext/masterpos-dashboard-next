"use client";

import {
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

import {
  ArchiveIcon,
  Grid2x2Icon,
  Home,
  PlusCircleIcon,
  TagIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";

interface MenuItem {
  label?: string;
  action?: React.ReactNode;
  items: {
    label: string;
    icon: React.ElementType;
    hasSubMenu?: boolean;
    href?: string;
    subMenu?: {
      label: string;
      icon: React.ElementType;
      href: string;
    }[];
  }[];
}

export default function NavMenu() {
  const pathname = usePathname();

  const navMain: MenuItem[] = [
    {
      label: "MAIN MENU",
      items: [
        {
          label: "Dashboard",
          href: "/dashboard",
          icon: Home,
        },
        {
          label: "Products",
          hasSubMenu: true,
          icon: ArchiveIcon,
          subMenu: [
            {
              label: "All Products",
              href: "/products",
              icon: Home,
            },
            {
              label: "Add New Product",
              href: "/products/new",
              icon: PlusCircleIcon,
            },
            {
              label: "Tags",
              href: "/products/tags",
              icon: TagIcon,
            },
          ],
        },
        {
          label: "Categories",
          href: "/categories",
          icon: Grid2x2Icon,
        },
      ],
    },
  ];

  return navMain.map((item) => (
    <SidebarGroup key={item.label}>
      <SidebarGroupLabel>{item.label}</SidebarGroupLabel>
      {item.action && (
        <SidebarGroupAction asChild>{item.action}</SidebarGroupAction>
      )}
      <SidebarGroupContent>
        <SidebarMenu>
          {item.items.map((item) => (
            <SidebarMenuItem key={item.label}>
              <SidebarMenuButton isActive={pathname === item.href}>
                <item.icon />
                {item.label}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  ));
}
