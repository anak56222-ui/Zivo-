import { useMemo } from "react";

export default function FilterSidebar({ products, filters, onChange }) {
  const locations = useMemo(() => [...new Set(products.map((item) => item.location))], [products]);
  const categories = useMemo(() => [...new Set(products.map((item) => item.category))], [products]);

  return (
    <aside className="card-surface h-fit space-y-4 p-4 md:sticky md:top-24">
      <h3 className="font-semibold">Filters</h3>
      <label className="block text-sm">
        Subcategory
        <select
          value={filters.category}
          onChange={(event) => onChange("category", event.target.value)}
          className="mt-1 w-full rounded-button border p-2"
        >
          <option value="">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>

      <label className="block text-sm">
        Max budget (INR)
        <input
          type="number"
          min="0"
          value={filters.maxPrice}
          onChange={(event) => onChange("maxPrice", Number(event.target.value) || 0)}
          className="mt-1 w-full rounded-button border p-2"
          placeholder="Any"
        />
      </label>

      <label className="block text-sm">
        Minimum rating
        <input
          type="range"
          min="0"
          max="5"
          step="0.5"
          value={filters.rating}
          onChange={(event) => onChange("rating", Number(event.target.value))}
          className="mt-2 w-full"
        />
        <div className="text-xs text-slate-500">⭐ {filters.rating} and above</div>
      </label>

      <label className="block text-sm">
        Location
        <select
          value={filters.location}
          onChange={(event) => onChange("location", event.target.value)}
          className="mt-1 w-full rounded-button border p-2"
        >
          <option value="">All cities</option>
          {locations.map((loc) => (
            <option key={loc} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </label>
    </aside>
  );
}
