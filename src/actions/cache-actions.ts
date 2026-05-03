"use server";

import { revalidateTag, updateTag } from "next/cache";

export async function revalidateProductsTagAction() {
  revalidateTag("products", "max");
}

export async function updateProductsTagAction() {
  updateTag("products");
}
