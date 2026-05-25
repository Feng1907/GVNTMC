"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function getPages(current: number, total: number): (number | "...")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

  const pages: (number | "...")[] = [1];

  if (current > 3) pages.push("...");

  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);
  for (let i = start; i <= end; i++) pages.push(i);

  if (current < total - 2) pages.push("...");
  pages.push(total);

  return pages;
}

export default function ProductPagination({
  currentPage,
  totalPages,
  onPageChange,
}: Props) {
  if (totalPages <= 1) return null;

  const pages = getPages(currentPage, totalPages);

  return (
    <nav
      aria-label="Phân trang sản phẩm"
      className="flex items-center justify-center gap-1.5 mt-10 flex-wrap"
    >
      {/* Prev */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={clsx(
          "w-9 h-9 rounded-xl border flex items-center justify-center text-sm transition-all duration-200",
          currentPage === 1
            ? "border-neutral-border text-text-light cursor-not-allowed"
            : "border-neutral-border text-text-secondary hover:border-primary hover:text-primary"
        )}
        aria-label="Trang trước"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {/* Pages */}
      {pages.map((p, i) =>
        p === "..." ? (
          <span key={`dots-${i}`} className="w-9 h-9 flex items-center justify-center text-text-light text-sm">
            ···
          </span>
        ) : (
          <button
            key={p}
            onClick={() => onPageChange(p as number)}
            className={clsx(
              "w-9 h-9 rounded-xl border text-sm font-medium transition-all duration-200",
              p === currentPage
                ? "bg-primary border-primary text-white shadow-sm"
                : "border-neutral-border text-text-secondary hover:border-primary hover:text-primary"
            )}
            aria-current={p === currentPage ? "page" : undefined}
          >
            {p}
          </button>
        )
      )}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={clsx(
          "w-9 h-9 rounded-xl border flex items-center justify-center text-sm transition-all duration-200",
          currentPage === totalPages
            ? "border-neutral-border text-text-light cursor-not-allowed"
            : "border-neutral-border text-text-secondary hover:border-primary hover:text-primary"
        )}
        aria-label="Trang sau"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </nav>
  );
}
