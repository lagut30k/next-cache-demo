import { getProductById } from "@/src/services/product-service";
import { cacheTag } from "next/cache";

type ProductInsightsProps = {
  id: string;
};

export async function ProductInsights({ id }: ProductInsightsProps) {
  "use cache";
  cacheTag("products");

  const product = await getProductById(id);

  if (!product) {
    return <p className="muted">Product not found.</p>;
  }

  return (
    <div className="card">
      <h3>Component cache (`use cache`)</h3>
      <p className="muted">
        This block is cached as a component and also reads cached service data.
      </p>
      <p>
        <strong>SKU:</strong> {product.id}
      </p>
      <p>
        <strong>Title:</strong> {product.title}
      </p>
    </div>
  );
}
