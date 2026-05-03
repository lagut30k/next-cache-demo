import type { Metadata } from "next";
import Link from "@/src/components/link";
import { getAllProducts } from "@/src/services/mock-db";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next.js 16 Cache Demo",
  description: "Demo for cacheComponents and data-level caching"
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const products = getAllProducts();
  const grouped = Object.entries(
    products.reduce<Record<string, typeof products>>((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {})
  );

  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <aside className="left-nav">
            <nav aria-label="Catalog navigation">
              <ul className="tree-root">
                <li>
                  <Link href="/">Home</Link>
                </li>
                {grouped.map(([category, categoryProducts]) => (
                  <li key={category}>
                    <Link href={`/categories/${category}`}>{category}</Link>
                    <ul>
                      {categoryProducts.map((product) => (
                        <li key={product.id}>
                          <Link href={`/products/${product.id}`}>
                            {product.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
          <div className="content">{children}</div>
        </div>
      </body>
    </html>
  );
}
