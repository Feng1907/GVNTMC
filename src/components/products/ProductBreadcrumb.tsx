"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

interface Props {
  crumbs: Crumb[];
}

export default function ProductBreadcrumb({ crumbs }: Props) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-white border-b border-neutral-border py-3"
    >
      <div className="container-custom">
        <ol className="flex items-center gap-1.5 text-sm flex-wrap">
          <li>
            <Link
              href="/"
              className="flex items-center gap-1 text-text-secondary hover:text-primary transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              Trang chủ
            </Link>
          </li>
          {crumbs.map((crumb, i) => (
            <li key={i} className="flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-text-light flex-shrink-0" />
              {crumb.href ? (
                <Link
                  href={crumb.href}
                  className="text-text-secondary hover:text-primary transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-semibold text-text-primary line-clamp-1">
                  {crumb.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
