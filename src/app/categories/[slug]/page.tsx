import Link from "@/src/components/link";
import { CategoryPageContent } from "@/src/components/category-page-content";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return [{ slug: "__placeholder__" }];
}

export default async function CategoryPage(props: CategoryPageProps) {
  const { slug } = await props.params;

  return (
    <main>
      <p>
        <Link href="/">Back to home</Link>
      </p>
      <CategoryPageContent slug={slug} />
    </main>
  );
}
