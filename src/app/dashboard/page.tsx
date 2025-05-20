import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { BellIcon, GlobeIcon, MailIcon, MoonIcon, SunIcon } from "lucide-react";

export default function DashboardPage() {
  return (
    <>
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
      </Card>
    </>
  );
}
