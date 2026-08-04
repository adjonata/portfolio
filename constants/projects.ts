import { technologies, type Technology } from ".";

export interface Project {
  images: string[];
  thumbnail: string;
  title: string;
  description: string;
  link?: string;
  technologies: Technology[];
}

const getImages = (path: string, images: string[]) => {
  return images.map((img) => `${path}/${img}`);
};

export const projects: Project[] = [
  {
    title: "Pizzaria Tasty",
    description:
      "Sistema completo e gerenciável que permite o controle de pedidos, categorias, produtos e adicionais. Conta com sistema de cupons de desconto e cálculo automático da taxa de entrega por quilômetro, utilizando a API do Google Maps.",
    images: getImages("/projects/tasty", [
      "print-1.png",
      "print-2.png",
      "print-2.1.png",
      "print-3.png",
      "print-4.png",
      "print-5.png",
      "print-6.png",
      "print-7.png",
      "print-8.png",
    ]),
    thumbnail: "/projects/tasty/print-1.png",
    technologies: [
      technologies.vue,
      technologies.nuxt,
      technologies.vite,
      technologies.typescript,
      technologies.tailwind,
      technologies.jest,
      technologies.pinia,
      technologies.postgresql,
      technologies.supabase,
      technologies.vercel,
      technologies.githubActions,
    ],
  },
  {
    title: "TCS",
    description:
      "Uma plataforma de venda de seguros para colaboradores do grupo Telefônica.",
    images: getImages("/projects/telefonica", [
      "print-1.png",
      "print-2.png",
      "print-3.png",
      "print-4.png",
      "print-5.png",
    ]),
    thumbnail: "/projects/telefonica/print-1.png",
    technologies: [
      technologies.react,
      technologies.next,
      technologies.typescript,
      technologies.tailwind,
      technologies.jest,
      technologies.docker,
      technologies.gitlab,
    ],
    link: "https://www.telefonicacorretora.com/",
  },
  {
    title: "Anota AI",
    description:
      "Uma plataforma que automatiza o atendimento e a gestão de pedidos para restaurantes e delivery",
    images: getImages("/projects/anotaai", [
      "print-1.png",
      "print-2.png",
      "print-3.png",
    ]),
    thumbnail: "/projects/anotaai/print-1.png",
    technologies: [
      technologies.vue,
      technologies.vite,
      technologies.typescript,
      technologies.tailwind,
      technologies.jest,
      technologies.docker,
      technologies.gitlab,
    ],
    link: "https://anota.ai/home/",
  },
];
