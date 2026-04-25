import { useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import FilterSidebar from "../components/FilterSidebar";
import IntentBadge from "../components/IntentBadge";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import { products } from "../data/seedData";
import { getIntentFromQuery, normalizeValue } from "../utils/helpers";

export default function SearchPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParam = new URLSearchParams(location.search).get("q") || "";
  const [filters, setFilters] = useState({ category: "", maxPrice: 0, rating: 0, location: "" });

  const intent = getIntentFromQuery(queryParam);
  const intents = ["Buy", "Compare", "Learn", "Book"];

  const results = useMemo(
    () =>
      products.filter((item) => {
        const inQuery = `${item.title} ${item.description} ${item.location}`.toLowerCase().includes(queryParam.toLowerCase());
        if (!inQuery) return false;
        if (filters.category && item.category !== filters.category) return false;
        if (filters.maxPrice && normalizeValue(item.price) > filters.maxPrice) return false;
        if (filters.rating && item.rating < filters.rating) return false;
        if (filters.location && item.location !== filters.location) return false;
        return true;
      }),
    [queryParam, filters],
  );

  return (
    <main className="page-container space-y-6 py-8">
      <div className="sticky top-16 z-10 space-y-3 bg-zivo-background/95 py-2 backdrop-blur">
        <SearchBar onSearch={(query) => navigate(`/search?q=${encodeURIComponent(query)}`)} />
        <div className="flex gap-2 overflow-x-auto">
          {intents.map((item) => (
            <IntentBadge key={item} intent={item} />
          ))}
          <span className="chip bg-amber-50">Detected: {intent}</span>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[280px_1fr]">
        <div className="hidden md:block">
          <FilterSidebar products={products} filters={filters} onChange={(k, v) => setFilters((prev) => ({ ...prev, [k]: v }))} />
        </div>
        <section className="space-y-4">
          <details className="md:hidden">
            <summary className="chip cursor-pointer bg-white">Open Filters</summary>
            <div className="mt-2">
              <FilterSidebar products={products} filters={filters} onChange={(k, v) => setFilters((prev) => ({ ...prev, [k]: v }))} />
            </div>
          </details>
          <h1 className="text-2xl font-extrabold">Search Results</h1>
          <div className="text-sm text-slate-600">
            {results.length} results for <strong>{queryParam || "all items"}</strong>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {results.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
