import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { categories } from "../data/seedData";
import SearchBar from "./SearchBar";

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();

  const submitSearch = (query) => {
    if (!query) return;
    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <header className="sticky top-0 z-20 border-b bg-white/90 backdrop-blur dark:bg-slate-950/90">
      <div className="page-container py-3">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-xl font-extrabold">
            Zivo
          </Link>
          <div className="hidden flex-1 md:block">
            <SearchBar onSearch={submitSearch} />
          </div>
          <div className="ml-auto hidden items-center gap-2 md:flex">
            <button className="chip">Login</button>
            <button className="chip">Cart</button>
          </div>
          <button className="chip md:hidden" onClick={() => setMobileOpen((prev) => !prev)}>
            ☰
          </button>
        </div>

        <div className="group relative mt-3 hidden md:block">
          <button className="chip bg-white">Categories ▾</button>
          <div className="invisible absolute left-0 top-10 grid w-full grid-cols-3 gap-2 rounded-card border bg-white p-3 opacity-0 shadow-card transition group-hover:visible group-hover:opacity-100 dark:bg-slate-900">
            {categories.map((category) => (
              <Link key={category.slug} to={`/category/${category.slug}`} className="rounded-button p-2 hover:bg-slate-50 dark:hover:bg-slate-800">
                {category.icon} {category.label}
              </Link>
            ))}
          </div>
        </div>

        {mobileOpen && (
          <div className="mt-3 space-y-2 md:hidden">
            <SearchBar onSearch={submitSearch} />
            <nav className="grid grid-cols-2 gap-2">
              {categories.map((category) => (
                <Link key={category.slug} to={`/category/${category.slug}`} className="chip justify-center bg-white">
                  {category.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
