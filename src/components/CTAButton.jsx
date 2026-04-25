export default function CTAButton({ children, variant = "primary", className = "", ...props }) {
  const base = "rounded-button px-4 py-2 text-sm font-semibold transition focus:outline-none focus:ring-2";
  const styles =
    variant === "secondary"
      ? "border border-zivo-primary text-zivo-primary hover:bg-zivo-primary hover:text-white focus:ring-zivo-primary/40 dark:border-slate-200 dark:text-slate-100"
      : "bg-zivo-accent text-zivo-primary hover:brightness-95 focus:ring-zivo-accent/40";

  return (
    <button className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  );
}
