import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Switch } from "@/components/ui/switch";
import {
  BellIcon,
  ChevronDownIcon,
  GlobeIcon,
  LogOutIcon,
  MailIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react";

export default function Header() {
  return (
    <Card className="p-6 flex-row items-center justify-center">
      <div className="flex-1 flex flex-col">
        <p className="text-2xl font-bold">Products</p>
        <p className="text-muted-foreground">Manage your products</p>
      </div>
      <div className="flex items-center justify-center gap-3">
        <SunIcon className="size-5" />
        <Switch className="[&_[data-slot=switch-thumb]]:bg-primary [&_[data-slot=switch-thumb]]:size-6 h-6 w-12 data-[state=checked]:bg-input" />
        <MoonIcon className="size-5" />
      </div>
      <div className="w-px h-full bg-border" />
      <div className="flex gap-[30px] items-center justify-center">
        <GlobeIcon className="size-5" />
        <div className="relative">
          <BellIcon className="size-5" />
          <Badge
            variant="accent"
            className="absolute -top-4 -right-4 size-6 rounded-full font-semibold"
          >
            12
          </Badge>
        </div>
        <MailIcon className="size-5" />
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="px-2! py-2 h-auto hover:bg-input hover:text-inherit"
          >
            <Avatar className="h-12 w-12 rounded-full grayscale">
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">Patricia Peter</span>
              <span className="truncate text-xs text-muted-foreground">
                Super Admin
              </span>
            </div>
            <ChevronDownIcon className="ml-3 size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)]">
          <DropdownMenuItem>
            <LogOutIcon className="size-5" />
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </Card>
  );
}
