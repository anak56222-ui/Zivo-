import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import CTAButton from "../components/CTAButton";
import { popularComparisons, products } from "../data/seedData";
import { useCompareStore } from "../store/compareStore";

export default function CompareAnythingPage() {
  const navigate = useNavigate();
  const clearCompare = useCompareStore((state) => state.clearCompare);
  const addToCompare = useCompareStore((state) => state.addToCompare);
  const [left, setLeft] = useState("");
  const [right, setRight] = useState("");

  const options = useMemo(() => products.map((item) => ({ id: item.id, label: item.title })), []);

  const startComparison = () => {
    if (!left || !right || left === right) return;
    clearCompare();
    addToCompare(left);
    addToCompare(right);
    navigate("/compare");
  };

  return (
    <main className="page-container space-y-8 py-10">
      <section className="mx-auto max-w-4xl space-y-4 text-center">
        <h1 className="text-4xl font-extrabold">Not sure which one to pick? Let us decide.</h1>
        <p className="text-slate-600 dark:text-slate-300">Choose two options and we will generate a side-by-side comparison instantly.</p>
      </section>

      <section className="mx-auto grid max-w-4xl gap-4 md:grid-cols-2">
        <select value={left} onChange={(event) => setLeft(event.target.value)} className="card-surface p-4">
          <option value="">Compare Product A</option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
        <select value={right} onChange={(event) => setRight(event.target.value)} className="card-surface p-4">
          <option value="">Compare Product B</option>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </section>

      <div className="text-center">
        <CTAButton onClick={startComparison}>Compare Now</CTAButton>
      </div>

      <section className="space-y-3">
        <h2 className="text-lg font-bold">Popular comparisons</h2>
        <div className="flex flex-wrap gap-2">
          {popularComparisons.map((item) => (
            <button key={item} onClick={() => navigate(`/search?q=${encodeURIComponent(item)}`)} className="chip bg-white">
              {item}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
}
