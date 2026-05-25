"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { projects, PROJECT_FILTERS } from "@/data/projects";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectFilterTabs from "@/components/projects/ProjectFilterTabs";
import ProjectCTASection from "@/components/projects/ProjectCTASection";
import CTASection from "@/components/CTASection";

const PER_PAGE = 8;

export default function ProjectsPageClient() {
  const [activeFilter, setActiveFilter] = useState("Tất cả");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (activeFilter === "Tất cả") return projects;
    return projects.filter((p) => p.categories.includes(activeFilter));
  }, [activeFilter]);

  const counts = useMemo(() => {
    const c: Record<string, number> = { "Tất cả": projects.length };
    PROJECT_FILTERS.slice(1).forEach((f) => {
      c[f] = projects.filter((p) => p.categories.includes(f)).length;
    });
    return c;
  }, []);

  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleFilter = (f: string) => {
    setActiveFilter(f);
    setPage(1);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-hero overflow-hidden pt-28 pb-16">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none" />

        <div className="container-custom relative z-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-5">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                Dự án tiêu biểu
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
                Dự án GVN <span className="text-accent">đã triển khai</span>
              </h1>
              <p className="text-white/70 text-lg leading-relaxed">
                GVN tự hào đã hoàn thành hàng chục dự án hạ tầng CNTT cho các nhà máy, văn phòng và
                tổ chức tài chính hàng đầu tại Việt Nam.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="flex gap-6 md:gap-8 flex-shrink-0"
            >
              {[
                { value: "50+", label: "Dự án hoàn thành" },
                { value: "30+", label: "Khách hàng" },
                { value: "10+", label: "Năm kinh nghiệm" },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <p className="text-2xl font-bold text-white">{value}</p>
                  <p className="text-xs text-white/60 mt-0.5">{label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 40L1440 40L1440 0C1440 0 1080 40 720 40C360 40 0 0 0 0L0 40Z" fill="#F8FAFC" />
          </svg>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding bg-neutral-light">
        <div className="container-custom">
          {/* Filter tabs */}
          <div className="mb-8">
            <ProjectFilterTabs
              active={activeFilter}
              onChange={handleFilter}
              counts={counts}
            />
          </div>

          {/* Result count */}
          <p className="text-sm text-text-secondary mb-6">
            Hiển thị{" "}
            <span className="font-semibold text-text-primary">{filtered.length}</span> dự án
            {activeFilter !== "Tất cả" && (
              <>
                {" "}trong danh mục{" "}
                <span className="font-semibold text-primary">{activeFilter}</span>
              </>
            )}
          </p>

          {/* Grid */}
          {paginated.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {paginated.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-text-secondary">
              Không có dự án nào trong danh mục này.
            </div>
          )}

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-10">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                <button
                  key={p}
                  onClick={() => {
                    setPage(p);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`w-9 h-9 rounded-full text-sm font-semibold transition-all ${
                    p === page
                      ? "bg-primary text-white"
                      : "bg-white border border-neutral-border text-text-secondary hover:border-primary hover:text-primary"
                  }`}
                  aria-current={p === page ? "page" : undefined}
                >
                  {p}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      <ProjectCTASection />
      <CTASection />
    </>
  );
}
