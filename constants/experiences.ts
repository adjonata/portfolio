export type Experience = {
  company_name: string;
  position: string;
  description: string;
  start_date: string;
  end_date: string | null;
  currently: boolean;
};

export const experiences: Experience[] = [
  {
    company_name: "Segdev",
    position: "Desenvolvedor Full Stack",
    description:
      "Atuo como desenvolvedor Full Stack nas plataformas de seguros da Telefônica Corretora de Seguros, sendo referência técnica do time em projetos que cobrem toda a jornada de venda e emissão de apólices. Contribuo com decisões de arquitetura, revisão de código e onboarding de novos desenvolvedores, colaborando para manter padrões de qualidade e evolução técnica contínua. Trabalho em toda a stack — do desenvolvimento de interfaces ao design de APIs REST, infraestrutura e monitoramento com Sentry — integrando um ecossistema robusto de parceiros: seguradoras Akad, 88i, Zurich e Porto, a corretora Teleport e a plataforma de pagamentos espanhola GEDOC.",
    start_date: "2022-04-01",
    end_date: null,
    currently: true,
  },
  {
    company_name: "DZ Labs",
    position: "Desenvolvedor Full Stack",
    description:
      "Fiz parte da equipe responsável pelo desenvolvimento de sistemas de vendas integrados com Shopify e plataformas de pagamento, atuando tanto no frontend quanto na integração e construção de APIs. Trabalhei em estreita colaboração com o time para traduzir requisitos de negócio em soluções técnicas ágeis, contribuindo diretamente para a entrega de um produto robusto e orientado à conversão.",
    start_date: "2022-01-01",
    end_date: "2022-05-01",
    currently: false,
  },
  {
    company_name: "Codefiction.net",
    position: "Desenvolvedor Full Stack",
    description:
      "Desenvolvi soluções Full Stack para cardápios digitais — incluindo integrações com a plataforma anota.ai — e sistemas de gestão internos. Colaborei ativamente com o time nas decisões de produto e arquitetura, entregando interfaces performáticas com foco em usabilidade e experiência do usuário final.",
    start_date: "2020-12-01",
    end_date: "2021-11-01",
    currently: false,
  },
  {
    company_name: "Wikidados - Soluções e Desenvolvimentos",
    position: "Desenvolvedor Full Stack",
    description:
      "Participei do desenvolvimento de uma plataforma de rastreamento e gestão de frotas, viabilizando o monitoramento em tempo real de caminhões e veículos logísticos. Contribuí também para um módulo de gestão de silos, otimizando o controle de estoque agrícola. Trabalhei em contato direto com stakeholders para alinhar requisitos e garantir que as soluções atendessem às necessidades operacionais do negócio.",
    start_date: "2020-07-01",
    end_date: "2021-01-01",
    currently: false,
  },
];
