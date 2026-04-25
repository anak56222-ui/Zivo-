import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import FilterSidebar from "../components/FilterSidebar";
import ProductCard from "../components/ProductCard";
import { categories, products } from "../data/seedData";
import { getCategoryBySlug } from "../utils/helpers";
import { useCompareStore } from "../store/compareStore";
import { normalizeValue } from "../utils/helpers";

export default function CategoryPage() {
  const { slug } = useParams();
  const category = getCategoryBySlug(categories, slug);
  const [page, setPage] = useState(1);
  const selectedIds = useCompareStore((state) => state.selectedIds);
  const [filters, setFilters] = useState({ category: "", maxPrice: 0, rating: 0, location: "" });

  const filtered = useMemo(
    () =>
      products.filter((item) => {
        if (item.category !== slug) return false;
        if (filters.maxPrice && normalizeValue(item.price) > filters.maxPrice) return false;
        if (filters.rating && item.rating < filters.rating) return false;
        if (filters.location && item.location !== filters.location) return false;
        return true;
      }),
    [slug, filters],
  );

  const pageItems = filtered.slice(0, page * 6);

  if (!category) return <main className="page-container py-10">Category not found.</main>;

  return (
    <main className="page-container space-y-6 py-8">
      <section className="card-surface p-6" style={{ borderTop: `6px solid ${category.color}` }}>
        <h1 className="text-3xl font-extrabold">
          {category.icon} {category.label}
        </h1>
      </section>

      <div className="grid gap-6 md:grid-cols-[280px_1fr]">
        <div className="hidden md:block">
          <FilterSidebar products={filtered} filters={filters} onChange={(k, v) => setFilters((prev) => ({ ...prev, [k]: v }))} />
        </div>
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-slate-600">{filtered.length} results</div>
            <div className="flex items-center gap-2">
              <details className="md:hidden">
                <summary className="chip cursor-pointer bg-white">Filters</summary>
                <div className="fixed inset-x-0 bottom-0 z-40 max-h-[75vh] overflow-auto rounded-t-card border bg-white p-4 shadow-card">
                  <FilterSidebar
                    products={filtered}
                    filters={filters}
                    onChange={(k, v) => setFilters((prev) => ({ ...prev, [k]: v }))}
                  />
                </div>
              </details>
              <Link to="/compare" className="chip bg-amber-100">
                Compare ({selectedIds.length}/3)
              </Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {pageItems.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {pageItems.length < filtered.length && (
            <button className="chip bg-white" onClick={() => setPage((prev) => prev + 1)}>
              Load More
            </button>
          )}
        </section>
      </div>
    </main>
  );
}
