import Link from "@/src/components/link";
import { getCatalogSummary } from "@/src/services/product-service";
import {
  revalidateProductsTagAction,
  updateProductsTagAction
} from "@/src/actions/cache-actions";

export async function HomePageContent() {
  const summary = await getCatalogSummary();

  return (
    <>
      <h1>Next.js 16 Caching Playground</h1>
      <p className="muted">
        Demo for `cacheComponents` and data-level caching in App Router.
      </p>

      <div className="card">
        <h2>Catalog Summary</h2>
        <p>Total products: {summary.totalProducts}</p>
        <p>Categories: {summary.categories.join(", ")}</p>
        <div style={{ display: "flex", gap: 8, marginTop: 12 }}>
          <form action={revalidateProductsTagAction}>
            <button type="submit">revalidateTag("products")</button>
          </form>
          <form action={updateProductsTagAction}>
            <button type="submit">updateTag("products")</button>
          </form>
        </div>
      </div>

      <div className="card">
        <h2>Dynamic product routes</h2>
        <ul>
          <li>
            <Link href="/products/p1">/products/p1</Link>
          </li>
          <li>
            <Link href="/products/p3">/products/p3</Link>
          </li>
        </ul>
      </div>

      <div className="card">
        <h2>Dynamic category routes</h2>
        <ul>
          <li>
            <Link href="/categories/laptops">/categories/laptops</Link>
          </li>
          <li>
            <Link href="/categories/phones">/categories/phones</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
