"use client";

import { DataTable } from "@/components/ui/data-table";
import { SortingState } from "@tanstack/react-table";
import productsColumns from "./columns";

export default function CommentsDataTable({
  data,
  pagination,
  onPaginationChange,
  onSortingChange,
  sorting,
}: {
  data: Product[];
  pagination: {
    page: number;
    totalPages: number;
    totalItems: number;
  };
  onPaginationChange: (pageIndex: number, pageSize: number) => void;
  onSortingChange: (sorting: SortingState) => void;
  sorting: SortingState;
}) {
  return (
    <DataTable
      columns={productsColumns()}
      data={data}
      manualPagination
      pageCount={pagination.totalPages}
      pageIndex={pagination.page - 1}
      onPaginationChange={onPaginationChange}
      manualSorting
      onSortingChange={onSortingChange}
      sorting={sorting}
      total={pagination.totalItems}
    />
  );
}
