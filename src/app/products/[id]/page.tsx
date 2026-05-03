import Link from "@/src/components/link";
import { ProductPageContent } from "@/src/components/product-page-content";

export async function generateStaticParams() {
  return [{ id: "__placeholder__" }];
}

export default async function ProductPage(props: {
  params: Promise<{ id: string }>;
}) {
  "use cache";
  const { id } = await props.params;
  return (
    <main>
      <p>
        <Link href="/">Back to home</Link>
      </p>
      <ProductPageContent id={id} />
    </main>
  );
}
