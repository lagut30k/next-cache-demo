export type Product = {
  id: string;
  category: string;
  title: string;
  price: number;
  description: string;
};

const PRODUCTS: Product[] = [
  {
    id: "p1",
    category: "laptops",
    title: "Aurora Pro 14",
    price: 1899,
    description: "Lightweight dev laptop with 32GB RAM."
  },
  {
    id: "p2",
    category: "laptops",
    title: "Nimbus Air 13",
    price: 1299,
    description: "Portable machine for daily work."
  },
  {
    id: "p3",
    category: "phones",
    title: "Pulse X",
    price: 999,
    description: "Phone with high refresh OLED display."
  },
  {
    id: "p4",
    category: "phones",
    title: "Pulse Mini",
    price: 699,
    description: "Compact model with strong battery."
  }
];

export function getAllProducts() {
  return PRODUCTS;
}
