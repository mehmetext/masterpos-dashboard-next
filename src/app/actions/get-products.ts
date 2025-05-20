"use server";

export async function getProducts(page: number) {
  const response = await fetch(`${process.env.API}/products?page=${page}`);

  const data = await response.json();
  return data as ProductResponse;
}
