import Link from "@/src/components/link";
import { Suspense } from "react";
import { getProductsByCategory } from "@/src/services/product-service";
import {
  revalidateProductsTagAction,
  updateProductsTagAction
} from "@/src/actions/cache-actions";

async function CategoryProducts({ slug }: { slug: string }) {
  const products = await getProductsByCategory(slug);

  if (!products.length) {
    return <p className="muted">No products found in category: {slug}</p>;
  }

  return (
    <div className="card">
      <h2>Products in {slug}</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/products/${product.id}`}>
              {product.title} (${product.price})
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

async function CategoryContent({ slug }: { slug: string }) {
  return (
    <>
      <h1>Category Route: {slug}</h1>
      <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
        <form action={revalidateProductsTagAction}>
          <button type="submit">revalidateTag("products")</button>
        </form>
        <form action={updateProductsTagAction}>
          <button type="submit">updateTag("products")</button>
        </form>
      </div>
      <Suspense fallback={<p className="muted">Loading category data...</p>}>
        <CategoryProducts slug={slug} />
      </Suspense>
    </>
  );
}

export function CategoryPageContent({ slug }: { slug: string }) {
  return (
    <Suspense fallback={<p className="muted">Resolving route params...</p>}>
      <CategoryContent slug={slug} />
    </Suspense>
  );
}
