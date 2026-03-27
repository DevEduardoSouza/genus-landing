"use client";

import ScrambleLink from "./scramble-link";
import "@/styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__left">
        &copy; {new Date().getFullYear()} Genus Tech
      </div>
      <div className="footer__right">
        <ScrambleLink
          href="#"
          text="Github"
          className="footer__link"
        />
        <ScrambleLink
          href="#"
          text="Instagram"
          className="footer__link"
        />
        <ScrambleLink
          href="mailto:contato@genustech.com.br"
          text="Email"
          className="footer__link"
          external
        />
      </div>
    </footer>
  );
}
