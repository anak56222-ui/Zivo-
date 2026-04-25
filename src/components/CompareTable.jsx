import CTAButton from "./CTAButton";

const checkMark = (left, right) => {
  if (left === right) return "◐";
  return Number(left) >= Number(right) ? "✅" : "❌";
};

export default function CompareTable({ items }) {
  if (items.length === 0) {
    return <div className="card-surface p-6 text-center">Select items to compare.</div>;
  }

  const specKeys = [...new Set(items.flatMap((item) => Object.keys(item.specs)))];

  return (
    <div className="space-y-4">
      <div className="hidden overflow-x-auto rounded-card border bg-white p-4 md:block">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr>
              <th className="p-2">Feature</th>
              {items.map((item, idx) => (
                <th key={item.id} className={`p-2 ${idx === 0 ? "bg-amber-50" : ""}`}>
                  <div className="font-semibold">{item.title}</div>
                  {idx === 0 && <div className="chip mt-2 bg-amber-100">Best for: {item.specs["Best For"]}</div>}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {specKeys.map((key) => (
              <tr key={key} className="border-t">
                <td className="p-2 font-medium">{key}</td>
                {items.map((item) => (
                  <td key={item.id + key} className="p-2">
                    {item.specs[key] || "—"}
                  </td>
                ))}
              </tr>
            ))}
            {items.length > 1 && (
              <tr className="border-t">
                <td className="p-2 font-medium">Winner Signal</td>
                {items.map((item) => (
                  <td key={item.id} className="p-2">
                    {checkMark(item.rating, items[0].rating)}
                  </td>
                ))}
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 md:hidden">
        {items.map((item) => (
          <div key={item.id} className="card-surface p-4">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-semibold">{item.title}</h3>
              <span className="chip bg-amber-100">Best for: {item.specs["Best For"]}</span>
            </div>
            <div className="space-y-1 text-sm">
              {Object.entries(item.specs).map(([key, value]) => (
                <div key={key} className="flex justify-between gap-3">
                  <span className="text-slate-500">{key}</span>
                  <span>{value}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-2">
              <CTAButton className="w-full">Buy Now</CTAButton>
              <CTAButton variant="secondary" className="w-full">
                Learn More
              </CTAButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
