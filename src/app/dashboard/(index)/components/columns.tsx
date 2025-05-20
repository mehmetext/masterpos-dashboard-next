"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { formatPrice } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
export default function productsColumns(): ColumnDef<Product>[] {
  return [
    {
      id: "select",
      size: 10,
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllRowsSelected()}
          onCheckedChange={(checked) => table.toggleAllRowsSelected(!!checked)}
          aria-label="Select all"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(checked) => row.toggleSelected(!!checked)}
          aria-label="Select row"
        />
      ),
    },
    {
      accessorKey: "product",
      header: "Product",
      minSize: 300,
      cell: ({ row }) => {
        // TODO: detayları koy
        return (
          <div className="flex items-center gap-2">
            <Image
              src={row.original.imageUrl}
              alt={row.original.name}
              width={50}
              height={50}
              className="rounded-md size-12 object-cover"
            />
            <div className="">
              <p className="font-bold">{row.original.name}</p>
              <p className="text-sm text-muted-foreground">
                {row.original.category}
              </p>
            </div>
          </div>
        );
      },
    },
    {
      accessorKey: "productCode",
      header: "Product Code",
      cell: ({ row }) => {
        return row.original.productCode;
      },
    },
    {
      accessorKey: "barcode",
      header: "Barcode",
      cell: ({ row }) => {
        return row.original.barcode;
      },
    },
    {
      accessorKey: "stock",
      header: "Stock",
      cell: ({ row }) => {
        return row.original.stock;
      },
    },
    {
      accessorKey: "price",
      header: "Price",
      cell: ({ row }) => {
        return (
          <p className="font-semibold">{formatPrice(row.original.price)}</p>
        );
      },
    },
    {
      accessorKey: "status",
      header: "Status",
      cell: ({ row }) => {
        return row.original.status ? "Active" : "Inactive";
      },
    },
  ];
}
