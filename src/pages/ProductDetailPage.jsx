import { Link, useParams } from "react-router-dom";
import CTAButton from "../components/CTAButton";
import ProductCard from "../components/ProductCard";
import ReviewCard from "../components/ReviewCard";
import { products } from "../data/seedData";

const sampleReviews = [
  { name: "Aarav Sharma", rating: 5, text: "Great value and very relevant recommendations for Indian users." },
  { name: "Meera Reddy", rating: 4.5, text: "Clear comparison and easy booking flow. Loved the UI." },
];

export default function ProductDetailPage() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  if (!product) return <main className="page-container py-10">Product not found.</main>;

  const similar = products.filter((item) => item.category === product.category && item.id !== product.id).slice(0, 3);

  return (
    <main className="page-container space-y-6 py-8">
      <nav className="text-sm text-slate-500">
        <Link to="/">Home</Link> / <Link to={`/category/${product.category}`}>Category</Link> / {product.title}
      </nav>
      <section className="grid gap-6 lg:grid-cols-2">
        <div className="card-surface h-72 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-700" />
        <div className="space-y-4">
          <h1 className="text-3xl font-extrabold">{product.title}</h1>
          <p className="text-slate-600 dark:text-slate-300">{product.description}</p>
          <div>⭐ {product.rating} (1,240 reviews)</div>
          <div className="grid grid-cols-2 gap-3">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="card-surface p-3">
                <div className="text-xs text-slate-500">{key}</div>
                <div className="font-semibold">{value}</div>
              </div>
            ))}
          </div>
          <CTAButton className="w-full sm:w-auto">{product.cta}</CTAButton>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">Reviews</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {sampleReviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold">Similar products</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {similar.map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
        </div>
      </section>
    </main>
  );
}
