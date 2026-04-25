import { products } from "../data/seedData";

export const getCategoryBySlug = (categories, slug) => categories.find((cat) => cat.slug === slug);
export const getProductById = (id) => products.find((item) => item.id === id);
export const getProductsByCategory = (slug) => products.filter((item) => item.category === slug);

export const getIntentFromQuery = (query = "") => {
  const value = query.toLowerCase();
  if (/(buy|price|best deal|subscription)/.test(value)) return "Buy";
  if (/(book|trip|tour|restaurant|hotel|reservation)/.test(value)) return "Book";
  if (/(vs|compare|difference)/.test(value)) return "Compare";
  return "Learn";
};

export const normalizeValue = (value) => {
  if (typeof value === "number") return value;
  const numeric = Number(String(value).replace(/[^0-9.]/g, ""));
  return Number.isNaN(numeric) ? 0 : numeric;
};
