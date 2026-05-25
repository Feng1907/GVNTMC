"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronDown, X } from "lucide-react";
import { categoryGroups, productCategories } from "@/data/products";
import clsx from "clsx";

interface Props {
  activeCategory: string;
  searchQuery: string;
  onCategoryChange: (cat: string) => void;
  onSearchChange: (q: string) => void;
  onClose?: () => void; // for mobile drawer
  isMobile?: boolean;
}

export default function ProductSidebar({
  activeCategory,
  searchQuery,
  onCategoryChange,
  onSearchChange,
  onClose,
  isMobile = false,
}: Props) {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    [categoryGroups[0].label]: true,
  });

  const toggleGroup = (label: string) => {
    setOpenGroups((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  const handleSelect = (cat: string) => {
    onCategoryChange(cat);
    if (isMobile && onClose) onClose();
  };

  return (
    <aside className="bg-white rounded-2xl border border-neutral-border overflow-hidden shadow-card">
      {/* Header */}
      <div className="bg-primary px-5 py-4 flex items-center justify-between">
        <h2 className="text-white font-bold text-sm tracking-widest uppercase">
          Danh mục sản phẩm
        </h2>
        {isMobile && (
          <button onClick={onClose} className="text-white/80 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Search */}
      <div className="p-4 border-b border-neutral-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Tìm sản phẩm..."
            className="input-field pl-9 py-2.5 text-sm"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-text-light hover:text-text-primary"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* All categories */}
      <div className="p-3 border-b border-neutral-border">
        <button
          onClick={() => handleSelect("Tất cả")}
          className={clsx(
            "w-full text-left px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
            activeCategory === "Tất cả"
              ? "bg-primary text-white"
              : "text-text-secondary hover:bg-primary-50 hover:text-primary"
          )}
        >
          Tất cả sản phẩm
        </button>
      </div>

      {/* Category groups with accordion */}
      <div className="p-3 space-y-1">
        {categoryGroups.map((group) => (
          <div key={group.label}>
            {/* Group header */}
            <button
              onClick={() => toggleGroup(group.label)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-neutral-light transition-colors text-left"
            >
              <span className="text-sm font-semibold text-text-primary leading-snug">
                {group.label}
              </span>
              <motion.div
                animate={{ rotate: openGroups[group.label] ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-4 h-4 text-text-secondary flex-shrink-0" />
              </motion.div>
            </button>

            {/* Children */}
            <AnimatePresence initial={false}>
              {openGroups[group.label] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pl-3 pb-1 space-y-0.5">
                    {group.children.map((child) => (
                      <button
                        key={child}
                        onClick={() => handleSelect(child)}
                        className={clsx(
                          "w-full text-left px-3 py-2 rounded-xl text-sm transition-all duration-200",
                          activeCategory === child
                            ? "bg-primary-50 text-primary font-semibold border-l-2 border-primary pl-2"
                            : "text-text-secondary hover:bg-neutral-light hover:text-primary"
                        )}
                      >
                        {child}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* Reset */}
      {(activeCategory !== "Tất cả" || searchQuery) && (
        <div className="p-4 border-t border-neutral-border">
          <button
            onClick={() => { onCategoryChange("Tất cả"); onSearchChange(""); }}
            className="w-full text-sm text-primary font-medium hover:underline flex items-center justify-center gap-1"
          >
            <X className="w-3.5 h-3.5" />
            Xóa bộ lọc
          </button>
        </div>
      )}
    </aside>
  );
}
