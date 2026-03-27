"use client";

import { useParams } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { getProject, getAdjacentProjects } from "@/lib/projects-data";
import ScrambleLink from "@/components/scramble-link";
import PageTransition from "@/components/page-transition";
import { registerGSAP, gsap, ScrollTrigger } from "@/lib/gsap-config";
import "@/styles/project-detail.css";

export default function ProjectDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const project = getProject(slug);
  const { prev, next } = getAdjacentProjects(slug);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const prevImage = useCallback(() => {
    if (!project) return;
    setLightboxIndex((i) => (i > 0 ? i - 1 : project.gallery.length - 1));
  }, [project]);

  const nextImage = useCallback(() => {
    if (!project) return;
    setLightboxIndex((i) => (i < project.gallery.length - 1 ? i + 1 : 0));
  }, [project]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, closeLightbox, prevImage, nextImage]);

  // GSAP scroll animations for gallery images
  useEffect(() => {
    registerGSAP();
    const images = document.querySelectorAll(".project-page__gallery-image");
    images.forEach((img) => {
      gsap.fromTo(
        img,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: img,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, [slug]);

  if (!project) {
    return (
      <main className="project-page">
        <div style={{ padding: "20vw 4vw", textAlign: "center" }}>
          <h1 style={{ fontSize: "var(--text-3xl)", fontWeight: 700 }}>
            Projeto não encontrado
          </h1>
          <Link
            href="/projects"
            style={{ fontSize: "var(--text-base)", marginTop: "2vw", display: "inline-block" }}
          >
            [Voltar aos projetos]
          </Link>
        </div>
      </main>
    );
  }

  return (
    <PageTransition>
      <main className="project-page">
        <div className="project-page__wrapper">

          {/* Prev/Next lateral navigation */}
          <div className="project-page__nav">
            {prev && (
              <Link
                href={`/projects/${prev.slug}`}
                className="project-page__nav-link project-page__nav-link--prev"
              >
                <span className="project-page__nav-squares">
                  <span className="project-page__nav-square" />
                  <span className="project-page__nav-square" />
                </span>
                <span>&nbsp;Projeto Ant.&nbsp;</span>
                <span className="project-page__nav-squares">
                  <span className="project-page__nav-square" />
                  <span className="project-page__nav-square" />
                </span>
              </Link>
            )}
            {next && (
              <Link
                href={`/projects/${next.slug}`}
                className="project-page__nav-link project-page__nav-link--next"
              >
                <span className="project-page__nav-squares">
                  <span className="project-page__nav-square" />
                  <span className="project-page__nav-square" />
                </span>
                <span>&nbsp;Próx. Projeto&nbsp;</span>
                <span className="project-page__nav-squares">
                  <span className="project-page__nav-square" />
                  <span className="project-page__nav-square" />
                </span>
              </Link>
            )}
          </div>

          {/* Header bar */}
          <header className="project-page__header">
            <div className="project-page__breadcrumb">
              <span className="project-page__breadcrumb-label">Projeto</span>
              <span className="project-page__breadcrumb-chevron">&#9654;&#9654;&#9654;</span>
              <div className="project-page__breadcrumb-title">
                <span>[{project.code}] / [{project.name}]</span>
              </div>
            </div>
            <div className="project-page__meta">
              <div className="project-page__meta-item">
                <span className="project-page__meta-label">Status:</span>
                <span className="project-page__meta-chevron">&#9654;</span>
                <span>{project.status}</span>
              </div>
              <div className="project-page__meta-item">
                <span className="project-page__meta-label">Tipo:</span>
                <span className="project-page__meta-chevron">&#9654;</span>
                <span>{project.type}</span>
              </div>
              <div className="project-page__meta-item">
                <span className="project-page__meta-label">Ano:</span>
                <span className="project-page__meta-chevron">&#9654;</span>
                <span>{project.year}</span>
              </div>
            </div>
          </header>

          {/* Body: text + hero */}
          <section className="project-page__body">
            <div className="project-page__text">
              <div className="project-page__text-dots">
                <span className="project-page__text-dot" />
                <span className="project-page__text-dot" />
                <span className="project-page__text-dot" />
              </div>

              {project.description.map((paragraph, i) => (
                <div key={i}>
                  <p className={i > 0 ? `indent-${Math.min(i + 1, 3)}` : ""}>
                    {paragraph}
                  </p>
                  {i < project.description.length - 1 && (
                    <span className="project-page__text-separator">.</span>
                  )}
                </div>
              ))}

              <div className="project-page__tech">
                {project.tech.map((t) => (
                  <span key={t} className="project-page__tech-tag">{t}</span>
                ))}
              </div>
            </div>

            <div className="project-page__hero">
              <Image
                src={project.heroImage}
                alt={project.name}
                fill
                sizes="35vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
          </section>

          {/* Gallery */}
          <section className="project-page__gallery">
            {project.gallery.map((img, i) => (
              <div key={i} className="project-page__gallery-item">
                <div
                  className="project-page__gallery-image"
                  data-align={img.align}
                  style={{ width: img.width, height: img.height }}
                  onClick={() => openLightbox(i)}
                >
                  <Image
                    src={img.src}
                    alt={`${project.name} — ${i + 1}`}
                    fill
                    sizes="60vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            ))}
          </section>

          {/* Footer bar */}
          <footer className="project-page__footer">
            <div className="project-page__footer-left">
              <span>[{project.year}]</span>
              <span className="project-page__footer-separator" />
              <span>[{project.type}]</span>
            </div>
            <div className="project-page__footer-right">
              <div className="project-page__footer-arrows">
                <span>&#9660;</span>
                <span>&#9660;</span>
                <span>&#9660;</span>
              </div>
              <div className="project-page__footer-location">
                <span>[{project.code}]</span>
                <span>[Genus Tech]</span>
              </div>
            </div>
          </footer>

        </div>

        {/* Lightbox */}
        <div className={`lightbox ${lightboxOpen ? "lightbox--open" : ""}`}>
          <button className="lightbox__close" onClick={closeLightbox}>
            <span>Fechar</span>
          </button>
          <span className="lightbox__counter-left">
            {String(lightboxIndex + 1).padStart(2, "0")}
          </span>
          <div className="lightbox__image">
            {lightboxOpen && project.gallery[lightboxIndex] && (
              <Image
                src={project.gallery[lightboxIndex].src}
                alt={`${project.name} — ${lightboxIndex + 1}`}
                width={1200}
                height={800}
                style={{ objectFit: "contain", width: "100%", height: "auto" }}
              />
            )}
          </div>
          <span className="lightbox__counter-right">
            {String(project.gallery.length).padStart(2, "0")}
          </span>
          <div className="lightbox__nav">
            <button className="lightbox__nav-btn" onClick={prevImage}>
              <span>&larr; Anterior</span>
            </button>
            <button className="lightbox__nav-btn" onClick={nextImage}>
              <span>Próxima &rarr;</span>
            </button>
          </div>
        </div>

      </main>
    </PageTransition>
  );
}
