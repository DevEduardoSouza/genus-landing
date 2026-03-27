import PageTransition from "@/components/page-transition";
import ContactForm from "@/components/contact-form";
import "@/styles/contact.css";

export default function ContactPage() {
  return (
    <PageTransition>
    <main className="contact">
      <div className="contact__header">
        <h1 className="contact__title">Contato</h1>
        <p className="contact__subtitle">
          Tem um projeto em mente? Vamos conversar sobre ele.
        </p>
      </div>

      <ContactForm />

      <div className="contact__info">
        <div className="contact__info-block">
          <span className="contact__info-label">Email</span>
          <a href="mailto:contato@genustech.com.br" className="contact__info-value">
            contato@genustech.com.br
          </a>
        </div>
        <div className="contact__info-block">
          <span className="contact__info-label">WhatsApp</span>
          <a
            href="https://wa.me/5500000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__info-value"
          >
            +55 (00) 00000-0000
          </a>
        </div>
        <div className="contact__info-block">
          <span className="contact__info-label">Localização</span>
          <span className="contact__info-value">Brasil</span>
        </div>
      </div>
    </main>
    </PageTransition>
  );
}
