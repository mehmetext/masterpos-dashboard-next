import { getProducts } from "@/app/actions/get-products";
import Header from "@/components/header";
import { Card } from "@/components/ui/card";
import { cn, formatNumber } from "@/lib/utils";
import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import ProductList from "./components/product-list";
export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const { page } = await searchParams;

  const productResponse = await getProducts(
    isNaN(Number(page)) ? 1 : Number(page)
  );

  return (
    <>
      <Header />
      <div className="grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <CardItem title="Active Products" value={247384} percentage={15} />
        <CardItem title="New Products" value={2368} percentage={2} />
        <CardItem title="Completed Order" value={33847} percentage={-4.5} />
        <CardItem title="Pending Payment" value={1284} percentage={5} />
        <CardItem title="Canceled Order" value={836} percentage={-5} />
      </div>
      <ProductList
        productResponse={productResponse}
        page={isNaN(Number(page)) ? 1 : Number(page)}
      />
    </>
  );
}

function CardItem({
  title,
  value,
  percentage,
}: {
  title: string;
  value: number;
  percentage: number;
}) {
  return (
    <Card className="gap-4 py-5 px-6">
      <p className="text-muted-foreground">{title}</p>
      <p className="text-3xl font-bold">{formatNumber(value)}</p>
      <div
        className={cn("flex items-center gap-2", {
          "text-green-500": percentage > 0,
          "text-red-500": percentage < 0,
        })}
      >
        {percentage > 0 ? (
          <TrendingUpIcon className="size-4" />
        ) : (
          <TrendingDownIcon className="size-4" />
        )}
        <p className="font-bold">{percentage}%</p>
      </div>
    </Card>
  );
}
