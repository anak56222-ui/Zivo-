import { useEffect, useState } from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import { categories } from "./data/seedData";
import LandingPage from "./pages/LandingPage";
import CategoryPage from "./pages/CategoryPage";
import ComparePage from "./pages/ComparePage";
import ProductDetailPage from "./pages/ProductDetailPage";
import SearchPage from "./pages/SearchPage";
import CompareAnythingPage from "./pages/CompareAnythingPage";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen">
      <NavBar />
      <button
        onClick={() => setDarkMode((prev) => !prev)}
        className="fixed bottom-4 right-4 z-30 rounded-full border bg-white px-3 py-2 text-sm shadow-card dark:bg-slate-900"
      >
        {darkMode ? "Light" : "Dark"}
      </button>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/category/:slug" element={<CategoryPage />} />
        <Route path="/compare" element={<ComparePage />} />
        <Route path="/product/:id" element={<ProductDetailPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/compare-anything" element={<CompareAnythingPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      <footer className="mt-12 border-t bg-white py-8 dark:bg-slate-950">
        <div className="page-container grid gap-6 md:grid-cols-3">
          <div>
            <div className="text-lg font-extrabold">Zivo</div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              India-first intelligent marketplace for discovery, comparison, and booking.
            </p>
          </div>
          <div>
            <div className="mb-2 font-semibold">Categories</div>
            <div className="space-y-1 text-sm">
              {categories.map((category) => (
                <div key={category.slug}>
                  <Link to={`/category/${category.slug}`}>{category.label}</Link>
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-1 text-sm">
            <div className="font-semibold">Company</div>
            <div>
              <Link to="/">About</Link>
            </div>
            <div>
              <Link to="/">Contact</Link>
            </div>
            <div>
              <Link to="/compare-anything">Compare Anything</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
