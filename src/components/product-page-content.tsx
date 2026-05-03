import { Suspense } from "react";
import { ProductInsights } from "@/src/components/product-insights";
import { getProductById } from "@/src/services/product-service";
import {
  revalidateProductsTagAction,
  updateProductsTagAction
} from "@/src/actions/cache-actions";
import { cacheLife, cacheTag } from "next/cache";

async function ProductPrimaryData({ id }: { id: string }) {
  const product = await getProductById(id);

  if (!product) {
    return <p className="muted">No product with id: {id}</p>;
  }

  return (
    <div className="card">
      <h2>Data cache (`use cache`)</h2>
      <p>
        <strong>{product.title}</strong> - ${product.price}
      </p>
      <p className="muted">{product.description}</p>
    </div>
  );
}

async function ProductBody({ id }: { id: string }) {
  "use cache";
  cacheTag("products");
  cacheLife("minutes");

  return (
    <>
      <h1>Product Route: {id}</h1>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <form action={revalidateProductsTagAction}>
          <button type="submit">revalidateTag("products")</button>
        </form>
        <form action={updateProductsTagAction}>
          <button type="submit">updateTag("products")</button>
        </form>
      </div>
      <Suspense fallback={<p className="muted">Loading product data...</p>}>
        <ProductPrimaryData id={id} />
      </Suspense>
      <Suspense fallback={<p className="muted">Loading cached component...</p>}>
        <ProductInsights id={id} />
      </Suspense>
    </>
  );
}

export function ProductPageContent({ id }: { id: string }) {
  return (
    <Suspense fallback={<p className="muted">Resolving route params...</p>}>
      <ProductBody id={id} />
    </Suspense>
  );
}
