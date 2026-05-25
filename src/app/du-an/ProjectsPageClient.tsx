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
      <section className="bg-gradient-hero text-white pt-32 pb-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl"
          >
            <div className="badge bg-white/10 border border-white/20 text-white mb-6">
              Dự án tiêu biểu
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Các dự án GVN đã triển khai
            </h1>
            <p className="text-white/70 text-base leading-relaxed">
              GVN tự hào đã hoàn thành hàng chục dự án hạ tầng CNTT cho các nhà máy, văn phòng và
              tổ chức tài chính hàng đầu tại Việt Nam.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap gap-8 mt-10"
          >
            {[
              { value: "50+", label: "Dự án hoàn thành" },
              { value: "30+", label: "Khách hàng tin tưởng" },
              { value: "10+", label: "Năm kinh nghiệm" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="text-2xl font-bold">{value}</p>
                <p className="text-white/60 text-sm">{label}</p>
              </div>
            ))}
          </motion.div>
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
