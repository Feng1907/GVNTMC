"use client";

import { useRef } from "react";
import { PROJECT_FILTERS } from "@/data/projects";

interface Props {
  active: string;
  onChange: (filter: string) => void;
  counts: Record<string, number>;
}

export default function ProjectFilterTabs({ active, onChange, counts }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={scrollRef}
      className="flex gap-2 overflow-x-auto pb-2 scrollbar-none"
      style={{ scrollbarWidth: "none" }}
    >
      {PROJECT_FILTERS.map((filter) => {
        const isActive = filter === active;
        const count = counts[filter] ?? 0;
        return (
          <button
            key={filter}
            onClick={() => onChange(filter)}
            className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
              isActive
                ? "bg-primary text-white shadow-md"
                : "bg-white border border-neutral-border text-text-secondary hover:border-primary hover:text-primary"
            }`}
          >
            {filter}
            {filter !== "Tất cả" && (
              <span
                className={`ml-1.5 text-xs px-1.5 py-0.5 rounded-full ${
                  isActive ? "bg-white/20 text-white" : "bg-gray-100 text-text-secondary"
                }`}
              >
                {count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
