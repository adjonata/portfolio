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
    title: "Sirius",
    description:
      "Plataforma intuitiva e abrangente projetada para simplificar o controle e a supervisão de todos os fornecedores e contratos adjudicados do grupo Telefônica.",
    images: getImages("/projects/sirius", [
      "print-1.png",
      "print-2.png",
      "print-3.png",
      "print-4.png",
      "print-5.png",
      "print-6.png",
      "print-7.png",
    ]),
    thumbnail: "/projects/sirius/print-3.png",
    technologies: [
      technologies.vue,
      technologies.nuxt,
      technologies.typescript,
      technologies.tailwind,
      technologies.storybook,
      technologies.jest,
      technologies.docker,
      technologies.gitlab,
    ],
  },
  {
    title: "Vivo HUB",
    description:
      "Uma plataforma de venda de seguros para clientes Vivo. Contando com seguros das categorias: Residencial, Bike e Pet.",
    images: getImages("/projects/hub", [
      "print-1.png",
      "print-2.png",
      "print-3.png",
      "print-4.png",
    ]),
    thumbnail: "/projects/hub/print-1.png",
    technologies: [
      technologies.react,
      technologies.next,
      technologies.typescript,
      technologies.tailwind,
      technologies.jest,
      technologies.docker,
      technologies.gitlab,
    ],
  },
  {
    title: "Backoffice",
    description:
      "Sistema de gerenciamento vinculado à plataforma de seguros Vivo Hub.",
    images: getImages("/projects/backoffice-vivo", [
      "print-1.png",
      "print-2.png",
      "print-3.png",
      "print-4.png",
      "print-5.png",
    ]),
    thumbnail: "/projects/backoffice-vivo/print-1.png",
    technologies: [
      technologies.vue,
      technologies.vite,
      technologies.typescript,
      technologies.tailwind,
      technologies.jest,
      technologies.docker,
      technologies.gitlab,
      technologies.storybook,
    ],
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
