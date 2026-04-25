import { useNavigate } from "react-router-dom";
import CategoryCard from "../components/CategoryCard";
import SearchBar from "../components/SearchBar";
import TrendingStrip from "../components/TrendingStrip";
import { categories, trendingSearches } from "../data/seedData";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <main className="page-container space-y-10 py-10">
      <section className="space-y-6 text-center">
        <h1 className="mx-auto max-w-3xl text-3xl font-extrabold leading-tight md:text-5xl">
          India's smartest marketplace — from wellness to wanderlust
        </h1>
        <div className="mx-auto max-w-3xl">
          <SearchBar large onSearch={(q) => navigate(`/search?q=${encodeURIComponent(q)}`)} />
        </div>
      </section>

      <section className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {categories.map((category) => (
          <CategoryCard key={category.slug} category={category} />
        ))}
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">Trending searches</h2>
        <TrendingStrip items={trendingSearches} />
      </section>

      <section className="card-surface flex flex-wrap items-center justify-center gap-3 p-4 text-sm font-medium">
        <span>10,000+ curated products</span>
        <span>·</span>
        <span>6 categories</span>
        <span>·</span>
        <span>India-first</span>
      </section>
    </main>
  );
}
