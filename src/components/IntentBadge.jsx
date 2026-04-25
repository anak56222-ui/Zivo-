const intentColors = {
  Buy: "bg-amber-100 text-amber-800 border-amber-200",
  Book: "bg-emerald-100 text-emerald-800 border-emerald-200",
  Compare: "bg-indigo-100 text-indigo-800 border-indigo-200",
  Learn: "bg-slate-100 text-slate-700 border-slate-200",
};

export default function IntentBadge({ intent }) {
  const style = intentColors[intent] || intentColors.Learn;
  return <span className={`chip ${style}`}>{intent}</span>;
}
