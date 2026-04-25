import { useEffect, useState } from "react";
import { getIntentFromQuery } from "../utils/helpers";
import IntentBadge from "./IntentBadge";
import CTAButton from "./CTAButton";

const placeholders = ["Find meditation apps...", "Compare washing machines...", "Restaurants in Hyderabad..."];

export default function SearchBar({ onSearch, className = "", large = false }) {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [query, setQuery] = useState("");
  const [intent, setIntent] = useState("Learn");

  useEffect(() => {
    const timer = setInterval(() => setPlaceholderIndex((prev) => (prev + 1) % placeholders.length), 2200);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const detectedIntent = getIntentFromQuery(query);
    setIntent(detectedIntent);
    onSearch?.(query, detectedIntent);
  };

  return (
    <form onSubmit={handleSubmit} className={`card-surface flex w-full items-center gap-2 p-2 ${className}`}>
      <input
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder={placeholders[placeholderIndex]}
        className={`w-full rounded-button bg-transparent px-4 py-2 outline-none ${large ? "text-base md:text-lg" : "text-sm"}`}
      />
      <IntentBadge intent={intent} />
      <CTAButton type="submit">Search</CTAButton>
    </form>
  );
}
