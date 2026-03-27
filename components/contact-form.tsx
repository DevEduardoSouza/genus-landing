"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="contact__form">
        <p style={{ fontSize: "var(--text-2xl)", fontWeight: 700, letterSpacing: "-0.02em" }}>
          Mensagem enviada.
        </p>
        <p style={{ fontSize: "var(--text-base)", opacity: 0.5, marginTop: "var(--space-sm)", textTransform: "none" as const }}>
          Retornaremos em breve.
        </p>
      </div>
    );
  }

  return (
    <form className="contact__form" onSubmit={handleSubmit}>
      <div className="contact__field">
        <label className="contact__label" htmlFor="name">Nome</label>
        <input
          className="contact__input"
          type="text"
          id="name"
          name="name"
          required
          autoComplete="name"
        />
      </div>

      <div className="contact__field">
        <label className="contact__label" htmlFor="email">Email</label>
        <input
          className="contact__input"
          type="email"
          id="email"
          name="email"
          required
          autoComplete="email"
        />
      </div>

      <div className="contact__field">
        <label className="contact__label" htmlFor="message">Mensagem</label>
        <textarea
          className="contact__textarea"
          id="message"
          name="message"
          required
          rows={4}
        />
      </div>

      <div className="contact__checkbox">
        <input type="checkbox" id="lgpd" name="lgpd" required />
        <label className="contact__checkbox-label" htmlFor="lgpd">
          Concordo que meus dados sejam utilizados para responder esta solicitação, conforme a LGPD.
        </label>
      </div>

      <button type="submit" className="contact__submit">
        Enviar Mensagem
      </button>
    </form>
  );
}
