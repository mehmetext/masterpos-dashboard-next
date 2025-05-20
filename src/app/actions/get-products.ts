"use server";

export async function getProducts(page: number) {
  const response = await fetch(
    `https://devcase.isiksoftyazilim.com/api/products?page=${page}`
  );

  const data = await response.json();
  return data as ProductResponse;
}
