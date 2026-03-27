"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import ProjectCard from "./project-card";
import HoverCursor from "./hover-cursor";
import { registerGSAP, gsap, ScrollTrigger } from "@/lib/gsap-config";

import { projects as projectsData } from "@/lib/projects-data";

const sizes: ("sm" | "md" | "lg" | "xl")[] = [
  "lg", "sm", "md", "xl", "sm", "md", "lg", "md", "sm", "lg", "md", "xl", "sm",
];

const projects = projectsData.map((p, i) => ({
  name: p.name,
  type: p.type,
  image: p.image,
  size: sizes[i] ?? ("md" as const),
  href: `/projects/${p.slug}`,
}));

// Extra card for 13th spot (UrbanStay doesn't exist in data, reuse first)
if (projects.length < 13) {
  projects.push({ ...projects[0], size: "sm", href: `/projects/${projectsData[0].slug}` });
}

export default function HomeGallery() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState<{ name: string; type: string } | null>(null);

  const onHoverStart = useCallback((name: string, type: string) => {
    setHovered({ name, type });
  }, []);

  const onHoverEnd = useCallback(() => {
    setHovered(null);
  }, []);

  useEffect(() => {
    registerGSAP();

    const cards = galleryRef.current?.querySelectorAll(".project-card");
    if (!cards) return;

    const scrollHint = document.querySelector(".home__scroll-hint");
    if (scrollHint) {
      gsap.to(scrollHint, {
        opacity: 0,
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "50px top",
          scrub: true,
        },
      });
    }

    cards.forEach((card) => {
      gsap.fromTo(
        card,
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 60%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const cardProps = (i: number) => ({
    ...projects[i],
    onHoverStart,
    onHoverEnd,
  });

  return (
    <>
      <HoverCursor
        visible={!!hovered}
        name={hovered?.name ?? ""}
        type={hovered?.type ?? ""}
      />
      <div className="home__gallery" ref={galleryRef}>
        {/* Row 1: single large left */}
        <div className="home__gallery-row home__gallery-row--left">
          <ProjectCard {...cardProps(0)} />
        </div>

        <div className="home__spacer" />

        {/* Row 2: small right */}
        <div className="home__gallery-row home__gallery-row--right">
          <ProjectCard {...cardProps(1)} />
        </div>

        {/* Row 3: medium center */}
        <div className="home__gallery-row home__gallery-row--center">
          <ProjectCard {...cardProps(2)} />
        </div>

        <div className="home__spacer" />

        {/* Row 4: extra large center */}
        <div className="home__gallery-row home__gallery-row--center">
          <ProjectCard {...cardProps(3)} />
        </div>

        {/* Row 5: spread - two cards */}
        <div className="home__gallery-row home__gallery-row--spread">
          <ProjectCard {...cardProps(4)} />
          <ProjectCard {...cardProps(5)} />
        </div>

        <div className="home__spacer" />

        {/* Row 6: large right */}
        <div className="home__gallery-row home__gallery-row--right">
          <ProjectCard {...cardProps(6)} />
        </div>

        {/* Row 7: medium left */}
        <div className="home__gallery-row home__gallery-row--left">
          <ProjectCard {...cardProps(7)} />
        </div>

        <div className="home__spacer--lg" />

        {/* Row 8: small left */}
        <div className="home__gallery-row home__gallery-row--left">
          <ProjectCard {...cardProps(8)} />
        </div>

        {/* Row 9: large center */}
        <div className="home__gallery-row home__gallery-row--center">
          <ProjectCard {...cardProps(9)} />
        </div>

        {/* Row 10: spread - two cards */}
        <div className="home__gallery-row home__gallery-row--spread">
          <ProjectCard {...cardProps(10)} />
          <ProjectCard {...cardProps(11)} />
        </div>

        <div className="home__spacer" />

        {/* Row 11: small right */}
        <div className="home__gallery-row home__gallery-row--right">
          <ProjectCard {...cardProps(12)} />
        </div>

        <div className="home__spacer" />
      </div>
    </>
  );
}
