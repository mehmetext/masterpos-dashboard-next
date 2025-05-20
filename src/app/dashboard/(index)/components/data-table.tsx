"use client";

import { DataTable } from "@/components/ui/data-table";
import { SortingState } from "@tanstack/react-table";
import productsColumns from "./columns";

export default function CommentsDataTable({
  data,
  page,
  onPaginationChange,
  onSortingChange,
  sorting,
}: {
  data: ProductResponse;
  page: number;
  onPaginationChange: (pageIndex: number, pageSize: number) => void;
  onSortingChange: (sorting: SortingState) => void;
  sorting: SortingState;
}) {
  return (
    <DataTable
      columns={productsColumns()}
      data={data.data}
      manualPagination
      pageCount={data.totalPages}
      pageIndex={page - 1}
      onPaginationChange={onPaginationChange}
      manualSorting
      onSortingChange={onSortingChange}
      sorting={sorting}
      total={data.totalItems}
    />
  );
}
