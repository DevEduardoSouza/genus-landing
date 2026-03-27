"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import PageTransition from "@/components/page-transition";
import { projects as allProjects } from "@/lib/projects-data";
import "@/styles/projects.css";

const categories = [
  { label: "Todos", value: "all" },
  { label: "Sites", value: "site" },
  { label: "SaaS", value: "saas" },
  { label: "E-commerce", value: "ecommerce" },
  { label: "Apps", value: "app" },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? allProjects
      : allProjects.filter((p) => p.category === filter);

  return (
    <PageTransition>
    <main className="projects">
      <div className="projects__header">
        <h1 className="projects__title">Projetos</h1>
        <span className="projects__count">{filtered.length} projetos</span>
      </div>

      <div className="projects__filter">
        {categories.map((cat) => (
          <button
            key={cat.value}
            className={`projects__filter-btn ${
              filter === cat.value ? "projects__filter-btn--active" : ""
            }`}
            onClick={() => setFilter(cat.value)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="projects__grid">
        {filtered.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="projects__item"
          >
            <div className="projects__item-image">
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="projects__item-meta">
              <span className="projects__item-name">{project.name}</span>
              <span className="projects__item-type">{project.type}</span>
            </div>
            <div className="projects__item-tech">
              {project.tech.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </main>
    </PageTransition>
  );
}
