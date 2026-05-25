"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, Calendar, ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: (index % 4) * 0.08 }}
    >
      <Link href={`/du-an/${project.slug}`} className="group block card card-hover-lift overflow-hidden h-full">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          />
          {project.featured && (
            <div className="absolute top-3 left-3 bg-accent text-white text-xs font-bold px-2 py-1 rounded-lg">
              Nổi bật
            </div>
          )}
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-primary/75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <span className="flex items-center gap-2 text-white font-semibold text-sm translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              Xem chi tiết <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Category tags */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            {project.categories.slice(0, 2).map((cat) => (
              <span
                key={cat}
                className="text-xs font-semibold text-primary bg-primary-50 px-2 py-0.5 rounded-full"
              >
                {cat}
              </span>
            ))}
            {project.categories.length > 2 && (
              <span className="text-xs text-text-secondary bg-gray-100 px-2 py-0.5 rounded-full">
                +{project.categories.length - 2}
              </span>
            )}
          </div>

          <h3 className="font-bold text-text-primary text-sm leading-snug mb-3 line-clamp-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="text-xs text-text-secondary line-clamp-2 mb-4">{project.shortDesc}</p>

          <div className="flex items-center justify-between text-xs text-text-secondary border-t border-neutral-border pt-3">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              <span className="line-clamp-1">{project.location.split(",")[0]}</span>
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {project.year}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
