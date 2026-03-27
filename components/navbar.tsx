"use client";

import Link from "next/link";
import ScrambleLink from "./scramble-link";
import "@/styles/navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__logo">
        <Link href="/">Genus Tech</Link>
      </div>
      <nav className="navbar__nav">
        <ScrambleLink href="/about" text="Sobre" className="navbar__link" />
        <ScrambleLink href="/projects" text="Projetos" className="navbar__link" />
        <ScrambleLink href="https://wa.me/557488359787" text="Contato" className="navbar__link" external />
      </nav>
    </header>
  );
}
