import { Link } from "react-router-dom";
import CTAButton from "./CTAButton";
import { useCompareStore, maxCompareItems } from "../store/compareStore";

export default function ProductCard({ product }) {
  const selectedIds = useCompareStore((state) => state.selectedIds);
  const toggleCompare = useCompareStore((state) => state.toggleCompare);
  const isSelected = selectedIds.includes(product.id);
  const compareDisabled = !isSelected && selectedIds.length >= maxCompareItems;

  return (
    <article className="card-surface overflow-hidden">
      <div className="h-36 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700" />
      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold">{product.title}</h3>
          <span className="chip text-xs">{product.badge}</span>
        </div>
        <p className="text-sm text-slate-600 dark:text-slate-300">{product.description}</p>
        <div className="text-sm">⭐ {product.rating} · {product.location}</div>
        <div className="flex items-center justify-between gap-2">
          <span className="font-semibold">{product.price}</span>
          <Link to={`/product/${product.id}`}>
            <CTAButton variant="secondary">View</CTAButton>
          </Link>
        </div>
        <div className="flex items-center justify-between gap-2">
          <CTAButton className="w-full">{product.cta}</CTAButton>
          <button
            disabled={compareDisabled}
            onClick={() => toggleCompare(product.id)}
            className={`rounded-button border px-3 py-2 text-sm ${
              isSelected ? "border-zivo-success bg-emerald-50 text-zivo-success" : "border-slate-300"
            } disabled:opacity-40`}
          >
            Compare
          </button>
        </div>
      </div>
    </article>
  );
}
