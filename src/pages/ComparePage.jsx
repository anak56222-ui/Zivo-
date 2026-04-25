import { products } from "../data/seedData";
import { useCompareStore } from "../store/compareStore";
import CompareTable from "../components/CompareTable";
import CTAButton from "../components/CTAButton";

export default function ComparePage() {
  const selectedIds = useCompareStore((state) => state.selectedIds);
  const clearCompare = useCompareStore((state) => state.clearCompare);
  const selectedItems = products.filter((item) => selectedIds.includes(item.id));

  return (
    <main className="page-container space-y-6 py-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-3xl font-extrabold">Compare Picks</h1>
        <CTAButton variant="secondary" onClick={clearCompare}>
          Clear Comparison
        </CTAButton>
      </div>
      <CompareTable items={selectedItems} />
      {selectedItems.length > 0 && (
        <div className="grid gap-3 sm:grid-cols-3">
          <CTAButton>Buy Now</CTAButton>
          <CTAButton>Book Now</CTAButton>
          <CTAButton variant="secondary">Learn More</CTAButton>
        </div>
      )}
    </main>
  );
}
