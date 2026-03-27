import PageTransition from "@/components/page-transition";
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

      <div className="contact__card">
        <div className="contact__card-index">01</div>
        <h2 className="contact__card-title">WhatsApp</h2>
        <p className="contact__card-desc">
          Envie uma mensagem direta e respondemos em até 24h.
        </p>
        <a
          href="https://wa.me/557488359787"
          target="_blank"
          rel="noopener noreferrer"
          className="contact__card-link"
        >
          <span>Iniciar conversa</span>
        </a>
      </div>

      <div className="contact__info">
        <div className="contact__info-block">
          <span className="contact__info-label">WhatsApp</span>
          <a
            href="https://wa.me/557488359787"
            target="_blank"
            rel="noopener noreferrer"
            className="contact__info-value"
          >
            +55 (74) 8835-9787
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
