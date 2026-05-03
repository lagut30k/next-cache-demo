import { cacheTag } from "next/cache";
import { getAllProducts } from "./mock-db";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getProductById(id: string) {
  "use cache";
  cacheTag("products");

  await sleep(1200);
  return getAllProducts().find((product) => product.id === id) ?? null;
}

export async function getProductsByCategory(category: string) {
  "use cache";
  cacheTag("products");

  await sleep(1400);
  return getAllProducts().filter((product) => product.category === category);
}

export async function getCatalogSummary() {
  "use cache";
  cacheTag("products");

  await sleep(400);
  const products = getAllProducts();
  const categories = new Set(products.map((product) => product.category));
  return {
    totalProducts: products.length,
    categories: [...categories]
  };
}
