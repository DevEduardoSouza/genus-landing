export interface ProjectImage {
  src: string;
  width: string;
  height: string;
  align: "left" | "center" | "right";
}

export interface ProjectData {
  slug: string;
  name: string;
  code: string;
  type: string;
  category: string;
  status: string;
  year: string;
  tech: string[];
  description: string[];
  heroImage: string;
  gallery: ProjectImage[];
  image: string;
}

export const projects: ProjectData[] = [
  {
    slug: "clinica-viva",
    name: "Clínica Viva",
    code: "GNS-001",
    type: "Site",
    category: "site",
    status: "Entregue",
    year: "2025",
    tech: ["Next.js", "Tailwind", "Vercel"],
    description: [
      "Site institucional para clínica odontológica com foco em agendamento online e apresentação dos serviços oferecidos.",
      "O projeto foi desenvolvido com Next.js para garantir performance e SEO otimizado, essenciais para negócios locais que dependem de buscas orgânicas.",
      "A interface foi desenhada para transmitir confiança e profissionalismo, com paleta de cores suaves e tipografia limpa que facilita a leitura em qualquer dispositivo.",
    ],
    heroImage: "/images/projects/01.jpg",
    gallery: [
      { src: "/images/projects/01.jpg", width: "56.23vw", height: "37.49vw", align: "right" },
      { src: "/images/projects/02.jpg", width: "18.67vw", height: "18.74vw", align: "left" },
      { src: "/images/projects/03.jpg", width: "56.23vw", height: "37.49vw", align: "center" },
      { src: "/images/projects/01.jpg", width: "29.16vw", height: "29.16vw", align: "left" },
      { src: "/images/projects/02.jpg", width: "56.23vw", height: "37.49vw", align: "right" },
    ],
    image: "/images/projects/01.jpg",
  },
  {
    slug: "taskflow-app",
    name: "TaskFlow App",
    code: "GNS-002",
    type: "SaaS",
    category: "saas",
    status: "Em produção",
    year: "2025",
    tech: ["React", "Node.js", "Postgres", "Redis"],
    description: [
      "Plataforma de gestão de tarefas e projetos para equipes remotas, com kanban boards, automações e integrações.",
      "O sistema foi arquitetado para suportar milhares de usuários simultâneos, com backend em Node.js e cache Redis para respostas em tempo real.",
      "Inclui sistema de pagamentos via Stripe, autenticação OAuth, e dashboard analítico com métricas de produtividade da equipe.",
    ],
    heroImage: "/images/projects/02.jpg",
    gallery: [
      { src: "/images/projects/02.jpg", width: "56.23vw", height: "37.49vw", align: "center" },
      { src: "/images/projects/03.jpg", width: "29.16vw", height: "29.16vw", align: "right" },
      { src: "/images/projects/04.jpg", width: "18.67vw", height: "18.74vw", align: "left" },
      { src: "/images/projects/02.jpg", width: "56.23vw", height: "37.49vw", align: "right" },
    ],
    image: "/images/projects/02.jpg",
  },
  {
    slug: "porto-burger",
    name: "Porto Burger",
    code: "GNS-003",
    type: "E-commerce",
    category: "ecommerce",
    status: "Entregue",
    year: "2024",
    tech: ["Next.js", "Stripe", "Sanity"],
    description: [
      "E-commerce completo para rede de hamburguerias com pedidos online, gestão de cardápio e integração com delivery.",
      "O painel administrativo permite que os franqueados atualizem preços e disponibilidade em tempo real, sem necessidade de suporte técnico.",
      "Sistema de cupons, programa de fidelidade e analytics de vendas integrados nativamente na plataforma.",
    ],
    heroImage: "/images/projects/03.jpg",
    gallery: [
      { src: "/images/projects/03.jpg", width: "56.23vw", height: "37.49vw", align: "left" },
      { src: "/images/projects/04.jpg", width: "18.67vw", height: "18.74vw", align: "right" },
      { src: "/images/projects/05.jpg", width: "29.16vw", height: "29.16vw", align: "center" },
      { src: "/images/projects/03.jpg", width: "56.23vw", height: "37.49vw", align: "right" },
      { src: "/images/projects/06.jpg", width: "18.67vw", height: "18.67vw", align: "left" },
    ],
    image: "/images/projects/03.jpg",
  },
  {
    slug: "fittrack",
    name: "FitTrack",
    code: "GNS-004",
    type: "App Mobile",
    category: "app",
    status: "Em produção",
    year: "2025",
    tech: ["React Native", "Firebase", "Node.js"],
    description: [
      "Aplicativo mobile para personal trainers gerenciarem treinos, dietas e acompanhamento de alunos.",
      "A interface foi pensada para uso rápido durante treinos, com gestos intuitivos e feedback visual em tempo real sobre carga e repetições.",
      "Notificações push mantêm os alunos engajados, e o dashboard do personal mostra métricas de evolução por aluno.",
    ],
    heroImage: "/images/projects/04.jpg",
    gallery: [
      { src: "/images/projects/04.jpg", width: "29.16vw", height: "29.16vw", align: "center" },
      { src: "/images/projects/05.jpg", width: "56.23vw", height: "37.49vw", align: "right" },
      { src: "/images/projects/06.jpg", width: "18.67vw", height: "18.74vw", align: "left" },
      { src: "/images/projects/04.jpg", width: "56.23vw", height: "37.49vw", align: "center" },
    ],
    image: "/images/projects/04.jpg",
  },
  {
    slug: "studio-arc",
    name: "Studio Arc",
    code: "GNS-005",
    type: "Site",
    category: "site",
    status: "Entregue",
    year: "2024",
    tech: ["Next.js", "GSAP", "Prismic"],
    description: [
      "Portfólio online para escritório de arquitetura com animações sofisticadas e galeria de projetos interativa.",
      "O site utiliza GSAP para transições entre páginas e efeitos de scroll que valorizam as fotografias dos projetos arquitetônicos.",
      "CMS headless permite que a equipe do escritório atualize projetos e textos sem intervenção técnica.",
    ],
    heroImage: "/images/projects/05.jpg",
    gallery: [
      { src: "/images/projects/05.jpg", width: "56.23vw", height: "37.49vw", align: "right" },
      { src: "/images/projects/06.jpg", width: "29.16vw", height: "29.16vw", align: "left" },
      { src: "/images/projects/07.jpg", width: "56.23vw", height: "37.49vw", align: "center" },
      { src: "/images/projects/05.jpg", width: "18.67vw", height: "18.67vw", align: "right" },
    ],
    image: "/images/projects/05.jpg",
  },
  {
    slug: "novapay",
    name: "NovaPay",
    code: "GNS-006",
    type: "Fintech",
    category: "saas",
    status: "Em desenvolvimento",
    year: "2026",
    tech: ["React", "Node.js", "Stripe", "Postgres"],
    description: [
      "Plataforma de pagamentos para micro e pequenas empresas com split de pagamento, boletos e PIX integrados.",
      "O sistema processa transações em tempo real com reconciliação automática e relatórios financeiros detalhados.",
      "Dashboard com visão consolidada de recebimentos, taxas e previsão de fluxo de caixa.",
    ],
    heroImage: "/images/projects/06.jpg",
    gallery: [
      { src: "/images/projects/06.jpg", width: "56.23vw", height: "37.49vw", align: "center" },
      { src: "/images/projects/07.jpg", width: "18.67vw", height: "18.74vw", align: "right" },
      { src: "/images/projects/08.jpg", width: "29.16vw", height: "29.16vw", align: "left" },
      { src: "/images/projects/06.jpg", width: "56.23vw", height: "37.49vw", align: "right" },
    ],
    image: "/images/projects/06.jpg",
  },
  {
    slug: "horizon-crm",
    name: "Horizon CRM",
    code: "GNS-007",
    type: "SaaS",
    category: "saas",
    status: "Entregue",
    year: "2024",
    tech: ["Next.js", "Prisma", "Postgres", "Redis"],
    description: [
      "CRM completo para equipes de vendas com pipeline visual, automação de follow-ups e integração com WhatsApp.",
      "O sistema centraliza toda a comunicação com leads e clientes, eliminando a necessidade de planilhas e ferramentas fragmentadas.",
      "Relatórios de conversão, previsão de receita e scoring de leads baseado em machine learning.",
    ],
    heroImage: "/images/projects/07.jpg",
    gallery: [
      { src: "/images/projects/07.jpg", width: "56.23vw", height: "37.49vw", align: "left" },
      { src: "/images/projects/08.jpg", width: "18.67vw", height: "18.74vw", align: "right" },
      { src: "/images/projects/09.jpg", width: "56.23vw", height: "37.49vw", align: "center" },
      { src: "/images/projects/07.jpg", width: "29.16vw", height: "29.16vw", align: "right" },
      { src: "/images/projects/10.jpg", width: "18.67vw", height: "18.67vw", align: "left" },
    ],
    image: "/images/projects/07.jpg",
  },
  {
    slug: "verde-market",
    name: "Verde Market",
    code: "GNS-008",
    type: "E-commerce",
    category: "ecommerce",
    status: "Entregue",
    year: "2025",
    tech: ["Next.js", "Stripe", "Redis", "Sanity"],
    description: [
      "Marketplace de produtos orgânicos conectando produtores locais a consumidores conscientes.",
      "Logística integrada com cálculo de frete por região e rastreamento de pedidos em tempo real.",
      "Sistema de assinaturas semanais com cestas personalizáveis e programa de fidelidade com pontos.",
    ],
    heroImage: "/images/projects/08.jpg",
    gallery: [
      { src: "/images/projects/08.jpg", width: "56.23vw", height: "37.49vw", align: "right" },
      { src: "/images/projects/09.jpg", width: "29.16vw", height: "29.16vw", align: "left" },
      { src: "/images/projects/10.jpg", width: "56.23vw", height: "37.49vw", align: "center" },
      { src: "/images/projects/08.jpg", width: "18.67vw", height: "18.67vw", align: "right" },
    ],
    image: "/images/projects/08.jpg",
  },
  {
    slug: "cloudsync",
    name: "CloudSync",
    code: "GNS-009",
    type: "SaaS",
    category: "saas",
    status: "Em produção",
    year: "2025",
    tech: ["React", "AWS", "Node.js", "Docker"],
    description: [
      "Plataforma de sincronização e backup de arquivos corporativos com criptografia end-to-end.",
      "Interface minimalista que permite arrastar e soltar arquivos, com versionamento automático e restauração em um clique.",
      "Painel administrativo com controle de permissões por equipe, logs de auditoria e relatórios de uso de armazenamento.",
    ],
    heroImage: "/images/projects/09.jpg",
    gallery: [
      { src: "/images/projects/09.jpg", width: "29.16vw", height: "29.16vw", align: "center" },
      { src: "/images/projects/10.jpg", width: "56.23vw", height: "37.49vw", align: "right" },
      { src: "/images/projects/11.jpg", width: "18.67vw", height: "18.74vw", align: "left" },
      { src: "/images/projects/09.jpg", width: "56.23vw", height: "37.49vw", align: "left" },
    ],
    image: "/images/projects/09.jpg",
  },
  {
    slug: "artisan-coffee",
    name: "Artisan Coffee",
    code: "GNS-010",
    type: "Site",
    category: "site",
    status: "Entregue",
    year: "2024",
    tech: ["Next.js", "Sanity", "Vercel"],
    description: [
      "Site editorial para cafeteria especializada com blog de conteúdo sobre origens de café e métodos de preparo.",
      "Design focado em storytelling visual, com fotos em tela cheia e tipografia que remete ao universo artesanal.",
      "Integração com sistema de reservas e cardápio digital atualizado em tempo real via CMS.",
    ],
    heroImage: "/images/projects/10.jpg",
    gallery: [
      { src: "/images/projects/10.jpg", width: "56.23vw", height: "37.49vw", align: "left" },
      { src: "/images/projects/11.jpg", width: "18.67vw", height: "18.74vw", align: "right" },
      { src: "/images/projects/12.jpg", width: "29.16vw", height: "29.16vw", align: "center" },
      { src: "/images/projects/10.jpg", width: "56.23vw", height: "37.49vw", align: "right" },
    ],
    image: "/images/projects/10.jpg",
  },
  {
    slug: "eduplatform",
    name: "EduPlatform",
    code: "GNS-011",
    type: "EdTech",
    category: "saas",
    status: "Entregue",
    year: "2025",
    tech: ["Next.js", "Prisma", "Stripe", "AWS"],
    description: [
      "Plataforma de cursos online com sistema de aulas em vídeo, quizzes interativos e certificação automática.",
      "Professores podem criar e monetizar seus cursos com total autonomia, incluindo precificação e cupons promocionais.",
      "Sistema de gamificação com badges, rankings e trilhas de aprendizado personalizadas por aluno.",
    ],
    heroImage: "/images/projects/11.jpg",
    gallery: [
      { src: "/images/projects/11.jpg", width: "56.23vw", height: "37.49vw", align: "center" },
      { src: "/images/projects/12.jpg", width: "29.16vw", height: "29.16vw", align: "left" },
      { src: "/images/projects/13.jpg", width: "56.23vw", height: "37.49vw", align: "right" },
      { src: "/images/projects/11.jpg", width: "18.67vw", height: "18.67vw", align: "center" },
    ],
    image: "/images/projects/11.jpg",
  },
  {
    slug: "medconnect",
    name: "MedConnect",
    code: "GNS-012",
    type: "HealthTech",
    category: "app",
    status: "Em produção",
    year: "2025",
    tech: ["React Native", "Node.js", "Postgres"],
    description: [
      "Aplicativo de telemedicina conectando pacientes a médicos para consultas por vídeo, prescrições digitais e prontuário eletrônico.",
      "O sistema garante conformidade com a LGPD e regulamentações do CFM para consultas online.",
      "Integração com laboratórios para envio de resultados de exames diretamente ao prontuário do paciente.",
    ],
    heroImage: "/images/projects/12.jpg",
    gallery: [
      { src: "/images/projects/12.jpg", width: "29.16vw", height: "29.16vw", align: "right" },
      { src: "/images/projects/13.jpg", width: "56.23vw", height: "37.49vw", align: "center" },
      { src: "/images/projects/01.jpg", width: "18.67vw", height: "18.74vw", align: "left" },
      { src: "/images/projects/12.jpg", width: "56.23vw", height: "37.49vw", align: "right" },
    ],
    image: "/images/projects/12.jpg",
  },
];

export function getProject(slug: string): ProjectData | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string) {
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  const prev = idx > 0 ? projects[idx - 1] : projects[projects.length - 1];
  const next = idx < projects.length - 1 ? projects[idx + 1] : projects[0];
  return { prev, next };
}
