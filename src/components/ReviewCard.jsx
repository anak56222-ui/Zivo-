export default function ReviewCard({ review }) {
  return (
    <div className="card-surface p-4">
      <div className="mb-2 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 font-semibold">
          {review.name.slice(0, 1)}
        </div>
        <div>
          <div className="font-medium">{review.name}</div>
          <div className="text-xs">⭐ {review.rating}</div>
        </div>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300">{review.text}</p>
    </div>
  );
}
