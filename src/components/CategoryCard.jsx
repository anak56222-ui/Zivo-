import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <Link
      to={`/category/${category.slug}`}
      className="card-surface block p-4 transition hover:-translate-y-0.5"
      style={{ borderTop: `4px solid ${category.color}` }}
    >
      <div className="mb-2 text-2xl">{category.icon}</div>
      <div className="mb-2 font-semibold">{category.label}</div>
      <span className="chip bg-white">{category.queryCount} queries</span>
    </Link>
  );
}
