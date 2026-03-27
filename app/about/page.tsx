import PageTransition from "@/components/page-transition";
import "@/styles/about.css";

export default function AboutPage() {
  return (
    <PageTransition>
    <main className="about">
      <div className="about__header">
        <h1 className="about__title">Sobre</h1>
      </div>

      <div className="about__content">
        <div className="about__column">
          <p>
            A Genus Tech é um estúdio de desenvolvimento de software focado em
            criar produtos digitais que fazem diferença. Trabalhamos com startups,
            empresas e empreendedores para transformar ideias em realidade através
            de código limpo e design pensado.
          </p>
          <p>
            Fundada com a crença de que um bom software deve ser acessível a todos,
            combinamos expertise técnica com profundo entendimento das necessidades
            do negócio para entregar soluções que geram resultados reais.
          </p>
        </div>
        <div className="about__column">
          <p>
            Nossa abordagem é simples: entender o problema, projetar a solução,
            construir direito. Não acreditamos em complexidade desnecessária.
            Cada linha de código tem um propósito, cada feature resolve uma
            necessidade real.
          </p>
          <p>
            De landing pages a plataformas SaaS completas, de apps mobile a
            automações personalizadas — cuidamos de todo o ciclo de desenvolvimento
            para que você possa focar no que mais importa: seu negócio.
          </p>
        </div>
      </div>

      <div className="about__stats">
        <div className="about__stat">
          <span className="about__stat-number">50+</span>
          <span className="about__stat-label">Projetos Entregues</span>
        </div>
        <div className="about__stat">
          <span className="about__stat-number">30+</span>
          <span className="about__stat-label">Clientes Satisfeitos</span>
        </div>
        <div className="about__stat">
          <span className="about__stat-number">3</span>
          <span className="about__stat-label">Anos de Experiência</span>
        </div>
        <div className="about__stat">
          <span className="about__stat-number">99%</span>
          <span className="about__stat-label">Satisfação do Cliente</span>
        </div>
      </div>

      <div className="about__services">
        <h2 className="about__services-title">Serviços</h2>
        <div className="about__services-grid">
          <div className="about__service">
            <h3 className="about__service-name">Sites</h3>
            <p className="about__service-desc">
              Landing pages, sites institucionais, portfólios. Rápidos, responsivos
              e otimizados para conversão.
            </p>
          </div>
          <div className="about__service">
            <h3 className="about__service-name">Aplicações Web</h3>
            <p className="about__service-desc">
              Aplicações web customizadas, dashboards, painéis administrativos.
              Construídos com frameworks modernos e escaláveis.
            </p>
          </div>
          <div className="about__service">
            <h3 className="about__service-name">Produtos SaaS</h3>
            <p className="about__service-desc">
              Desenvolvimento SaaS completo. Do MVP à produção, com pagamentos,
              autenticação e infraestrutura.
            </p>
          </div>
          <div className="about__service">
            <h3 className="about__service-name">Apps Mobile</h3>
            <p className="about__service-desc">
              Aplicativos mobile multiplataforma com React Native. Uma base de
              código, todas as plataformas.
            </p>
          </div>
          <div className="about__service">
            <h3 className="about__service-name">E-commerce</h3>
            <p className="about__service-desc">
              Lojas online com integração de pagamento, gestão de estoque
              e analytics.
            </p>
          </div>
          <div className="about__service">
            <h3 className="about__service-name">Automação</h3>
            <p className="about__service-desc">
              Scripts customizados, integrações e workflows para automatizar
              processos repetitivos do negócio.
            </p>
          </div>
        </div>
      </div>

      <div className="about__team">
        <h2 className="about__team-title">Equipe</h2>
        <div className="about__team-grid">
          <div className="about__member">
            <div className="about__member-photo">
              <img src="/team/eduardo.jpeg" alt="Eduardo Souza" />
            </div>
            <span className="about__member-index">01</span>
            <h3 className="about__member-name">Eduardo Souza</h3>
            <span className="about__member-role">Full Stack Developer</span>
            <a
              href="https://linkedin.com/in/eduardo-souza-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="about__member-link"
            >
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="about__member">
            <div className="about__member-photo">
              <img src="/team/caiojpeg.jpeg" alt="Caio Alves" />
            </div>
            <span className="about__member-index">02</span>
            <h3 className="about__member-name">Caio Alves</h3>
            <span className="about__member-role">Developer</span>
            <a
              href="https://linkedin.com/in/caioalves14"
              target="_blank"
              rel="noopener noreferrer"
              className="about__member-link"
            >
              <span>LinkedIn</span>
            </a>
          </div>
          <div className="about__member">
            <div className="about__member-photo">
              <img src="/team/andesson.jpeg" alt="Andesson Reis" />
            </div>
            <span className="about__member-index">03</span>
            <h3 className="about__member-name">Andesson Reis</h3>
            <span className="about__member-role">Developer</span>
            <a
              href="https://linkedin.com/in/andesson-reis"
              target="_blank"
              rel="noopener noreferrer"
              className="about__member-link"
            >
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </main>
    </PageTransition>
  );
}
