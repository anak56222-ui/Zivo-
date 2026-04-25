import { Link } from "react-router-dom";

export default function TrendingStrip({ items }) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {items.map((item) => (
        <Link key={item} to={`/search?q=${encodeURIComponent(item)}`} className="chip whitespace-nowrap bg-white">
          {item}
        </Link>
      ))}
    </div>
  );
}
