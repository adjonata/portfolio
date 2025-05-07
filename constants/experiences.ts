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
    position: "Desenvolvedor Frontend Pleno",
    description:
      "Trabalho desenvolvendo plataformas de seguros para a Telefônica Corretora de Seguros, atuando como voz principal do desenvolvimento Frontend em diversos projetos que abrangem vendas de seguros e emissões de apólices com as seguradoras: Akad, 88i, Zurich e Porto. Possuo também experiência com a corretora Teleport e a plataforma de pagamentos espanhola GEDOC.",
    start_date: "2022-04-01",
    end_date: null,
    currently: true,
  },
  {
    company_name: "DZ Labs",
    position: "Desenvolvedor Frontend Pleno",
    description:
      "Colaborei com a equipe no desenvolvimento de sistemas de vendas integrados com Shopify e plataformas de pagamento, atuando na integração de APIs e na personalização de funcionalidades conforme as necessidades do cliente.",
    start_date: "2022-01-01",
    end_date: "2022-05-01",
    currently: false,
  },
  {
    company_name: "Codefiction.net",
    position: "Desenvolvedor Frontend Pleno",
    description:
      "Desenvolvi interfaces para cardápios online (ex. anota.ai) e sistemas de gestão, focando na usabilidade e na experiência do usuário.",
    start_date: "2020-12-01",
    end_date: "2021-11-01",
    currently: false,
  },
  {
    company_name: "Wikidados - Soluções e Desenvolvimentos",
    position: "Desenvolvedor Frontend",
    description:
      "Trabalhei no desenvolvimento de um projeto para acompanhar frotas de caminhões e outros veículos, ajudando a monitorar e gerenciar a logística de forma mais prática. Também lidei com a gestão de silos, otimizando o controle dos estoques.",
    start_date: "2020-07-01",
    end_date: "2021-01-01",
    currently: false,
  },
];
