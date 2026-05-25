"use client";

import { SlidersHorizontal } from "lucide-react";
import clsx from "clsx";

type SortOption = "default" | "name-asc" | "name-desc" | "newest";

interface Props {
  total: number;
  page: number;
  perPage: number;
  sort: SortOption;
  onSortChange: (s: SortOption) => void;
  onOpenFilter?: () => void; // mobile
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
  { value: "default", label: "Sắp xếp mặc định" },
  { value: "newest", label: "Mới nhất" },
  { value: "name-asc", label: "Tên A → Z" },
  { value: "name-desc", label: "Tên Z → A" },
];

export default function ProductToolbar({
  total,
  page,
  perPage,
  sort,
  onSortChange,
  onOpenFilter,
}: Props) {
  const from = total === 0 ? 0 : (page - 1) * perPage + 1;
  const to = Math.min(page * perPage, total);

  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-6 bg-white rounded-xl border border-neutral-border px-4 py-3">
      {/* Left — count */}
      <p className="text-sm text-text-secondary">
        {total === 0 ? (
          "Không tìm thấy sản phẩm"
        ) : (
          <>
            Hiển thị{" "}
            <strong className="text-text-primary">
              {from}–{to}
            </strong>{" "}
            trong{" "}
            <strong className="text-text-primary">{total}</strong> sản phẩm
          </>
        )}
      </p>

      {/* Right — sort + mobile filter */}
      <div className="flex items-center gap-2 ml-auto">
        {/* Mobile filter button */}
        <button
          onClick={onOpenFilter}
          className="lg:hidden flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-text-secondary border border-neutral-border rounded-xl hover:border-primary hover:text-primary transition-colors"
        >
          <SlidersHorizontal className="w-4 h-4" />
          Lọc
        </button>

        {/* Sort select */}
        <select
          value={sort}
          onChange={(e) => onSortChange(e.target.value as SortOption)}
          className="text-sm border border-neutral-border rounded-xl px-3 py-2 text-text-secondary bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary cursor-pointer"
        >
          {SORT_OPTIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
