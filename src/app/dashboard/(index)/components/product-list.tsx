"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  CalendarIcon,
  EllipsisVerticalIcon,
  FunnelIcon,
  PlusCircleIcon,
  RefreshCwIcon,
  Search,
  SearchIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";
import CommentsDataTable from "./data-table";

export default function ProductList({
  productResponse,
  page,
}: {
  productResponse: ProductResponse;
  page: number;
}) {
  console.log(page);
  const router = useRouter();

  return (
    <Card className="gap-10 p-[30px]">
      <div className="flex justify-between items-center gap-2">
        <p className="flex-1 font-bold text-xl">All Products</p>
        <div className="relative hidden md:block">
          <Input placeholder="Search here" className="pl-10 py-2!" />
          <Button
            size="icon"
            variant="ghost"
            className="absolute left-px top-px p-[12px] [&_svg]:size-5!"
          >
            <Search />
          </Button>
        </div>
        <Button size="icon" variant="ghost" className="border md:hidden">
          <SearchIcon />
        </Button>
        <Button size="icon" variant="ghost" className="border hidden md:flex">
          <RefreshCwIcon />
        </Button>
        <Button size="icon" variant="ghost" className="border hidden md:flex">
          <CalendarIcon />
        </Button>
        <Button size="icon" variant="ghost" className="border hidden md:flex">
          <FunnelIcon />
        </Button>
        <Button size="icon" variant="ghost" className="border">
          <EllipsisVerticalIcon />
        </Button>
        <Button>
          <PlusCircleIcon /> Add New Product
        </Button>
      </div>
      <CommentsDataTable
        data={productResponse}
        page={page}
        onPaginationChange={(pageIndex) => {
          router.push(`/dashboard?page=${pageIndex + 1}`);
        }}
        onSortingChange={(sorting) => {
          console.log(sorting);
        }}
        sorting={[]}
      />
    </Card>
  );
}
