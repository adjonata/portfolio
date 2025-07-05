export type Technology = {
  image: string;
  name: string;
  description: string;
  website: string;
  color: string;
};

const getImageUrl = (filename: string) => `/technologies/${filename}`;

type TechnologiesNames =
  | "vue"
  | "nuxt"
  | "react"
  | "next"
  | "typescript"
  | "tailwind"
  | "vite"
  | "nodejs"
  | "storybook"
  | "jest"
  | "docker"
  | "gitlab"
  | "javascript"
  | "sass"
  | "redux"
  | "pinia"
  | "express"
  | "nest"
  | "sequelize"
  | "mongodb"
  | "postgresql"
  | "jwt"
  | "githubActions"
  | "nginx"
  | "heroku"
  | "vercel"
  | "netlify"
  | "figma"
  | "vsCode"
  | "clickup"
  | "supabase"
  | "jira";

export const technologies: Record<TechnologiesNames, Technology> = {
  vue: {
    image: getImageUrl("vue.png"),
    name: "Vue.js",
    description:
      "Framework progressivo para a construção de interfaces de usuário.",
    website: "https://vuejs.org/",
    color: "#42b883",
  },
  nuxt: {
    image: getImageUrl("nuxtjs.png"),
    name: "Nuxt.js",
    description:
      "Framework baseado em Vue.js para criar aplicações SSR e estáticas.",
    website: "https://nuxt.com/",
    color: "#00c58e",
  },
  react: {
    image: getImageUrl("react.png"),
    name: "React.js",
    description:
      "Biblioteca para construção de interfaces de usuário baseada em componentes.",
    website: "https://react.dev/",
    color: "#61dafb",
  },
  supabase: {
    image: getImageUrl("supabase.png"),
    name: "Supabase",
    description:
      "Supabase é uma alternativa open source ao Firebase, que oferece banco de dados PostgreSQL, autenticação, storage e APIs em tempo real — ideal para criar backends modernos de forma rápida e eficiente.",
    website: "https://supabase.com/",
    color: "#3ecf8e",
  },
  next: {
    image: getImageUrl("nextjs.png"),
    name: "Next.js",
    description:
      "Framework React para aplicações web otimizadas, com SSR e SSG.",
    website: "https://nextjs.org/",
    color: "#000000",
  },
  typescript: {
    image: getImageUrl("typescript.png"),
    name: "TypeScript",
    description:
      "Superset do JavaScript que adiciona tipagem estática opcional.",
    website: "https://www.typescriptlang.org/",
    color: "#3178c6",
  },
  tailwind: {
    image: getImageUrl("tailwind.png"),
    name: "Tailwind",
    description:
      "Framework CSS utilitário para criar designs modernos utilizando classes.",
    website: "https://tailwindcss.com/",
    color: "#38bdf8",
  },
  vite: {
    image: getImageUrl("vite.png"),
    name: "Vite",
    description: "Ferramenta de build rápida para projetos frontend modernos.",
    website: "https://vitejs.dev/",
    color: "#646cff",
  },
  nodejs: {
    image: getImageUrl("nodejs.png"),
    name: "Node.js",
    description:
      "Ambiente de execução JavaScript assíncrono baseado no motor V8 do Chrome.",
    website: "https://nodejs.org/",
    color: "#339933",
  },
  storybook: {
    image: getImageUrl("storybook.svg"),
    name: "Storybook",
    description:
      "Ferramenta para desenvolvimento e documentação de componentes UI.",
    website: "https://storybook.js.org/",
    color: "#ff4785",
  },
  jest: {
    image: getImageUrl("jest.png"),
    name: "Jest",
    description:
      "Framework de testes JavaScript com foco em simplicidade e desempenho.",
    website: "https://jestjs.io/",
    color: "#99425b",
  },
  docker: {
    image: getImageUrl("docker.png"),
    name: "Docker",
    description:
      "Plataforma para criação, distribuição e execução de aplicações em contêineres.",
    website: "https://www.docker.com/",
    color: "#2496ed",
  },
  gitlab: {
    image: getImageUrl("gitlab.png"),
    name: "GitLab",
    description:
      "Plataforma DevOps completa para CI/CD, repositórios Git e gerenciamento de projetos.",
    website: "https://about.gitlab.com/",
    color: "#fc6d26",
  },
  javascript: {
    image: getImageUrl("javascript.webp"),
    name: "JavaScript",
    description: "Linguagem base para desenvolvimento web frontend e backend.",
    website: "https://developer.mozilla.org/docs/Web/JavaScript",
    color: "#f7df1e",
  },
  sass: {
    image: getImageUrl("sass.png"),
    name: "Sass",
    description:
      "Pré-processador CSS para estilos mais dinâmicos e organizados.",
    website: "https://sass-lang.com/",
    color: "#cc6699",
  },
  redux: {
    image: getImageUrl("redux.png"),
    name: "Redux",
    description:
      "Gerenciamento de estado previsível para aplicações JavaScript.",
    website: "https://redux.js.org/",
    color: "#764abc",
  },
  pinia: {
    image: getImageUrl("pinia.png"),
    name: "Pinia",
    description: "Gerenciador de estado oficial para Vue.js.",
    website: "https://pinia.vuejs.org/",
    color: "#ffd859",
  },
  express: {
    image: getImageUrl("expressjs.png"),
    name: "Express.js",
    description: "Framework minimalista e flexível para Node.js.",
    website: "https://expressjs.com/",
    color: "#000000",
  },
  nest: {
    image: getImageUrl("nest.png"),
    name: "NestJS",
    description: "Framework para construção de aplicações Node.js escaláveis.",
    website: "https://nestjs.com/",
    color: "#e0234e",
  },
  sequelize: {
    image: getImageUrl("sequelize.png"),
    name: "Sequelize",
    description: "ORM para Node.js com suporte a múltiplos bancos de dados.",
    website: "https://sequelize.org/",
    color: "#52b0e7",
  },
  mongodb: {
    image: getImageUrl("mongodb.svg"),
    name: "MongoDB",
    description: "Banco de dados NoSQL orientado a documentos.",
    website: "https://www.mongodb.com/",
    color: "#47a248",
  },
  postgresql: {
    image: getImageUrl("postgresql.png"),
    name: "PostgreSQL",
    description: "Banco de dados relacional open source avançado.",
    website: "https://www.postgresql.org/",
    color: "#336791",
  },
  jwt: {
    image: getImageUrl("jwt.png"),
    name: "JWT",
    description: "JSON Web Token, padrão para autenticação e autorização.",
    website: "https://jwt.io/",
    color: "#000000",
  },
  githubActions: {
    image: getImageUrl("githubActions.png"),
    name: "GitHub Actions",
    description: "Automação de workflows de CI/CD diretamente no GitHub.",
    website: "https://github.com/features/actions",
    color: "#2088ff",
  },
  nginx: {
    image: getImageUrl("nginx.png"),
    name: "Nginx",
    description: "Servidor web e proxy reverso de alta performance.",
    website: "https://nginx.org/",
    color: "#269539",
  },
  heroku: {
    image: getImageUrl("heroku.png"),
    name: "Heroku",
    description: "Plataforma de cloud para deploy de aplicações.",
    website: "https://heroku.com/",
    color: "#430098",
  },
  vercel: {
    image: getImageUrl("vercel.svg"),
    name: "Vercel",
    description: "Plataforma para deploy de aplicações frontend modernas.",
    website: "https://vercel.com/",
    color: "#000000",
  },
  netlify: {
    image: getImageUrl("netlify.png"),
    name: "Netlify",
    description:
      "Plataforma para automação e deploy de sites estáticos e JAMstack.",
    website: "https://www.netlify.com/",
    color: "#00ad9f",
  },
  figma: {
    image: getImageUrl("figma.png"),
    name: "Figma",
    description: "Ferramenta de design colaborativo para interfaces digitais.",
    website: "https://figma.com/",
    color: "#a259ff",
  },
  vsCode: {
    image: getImageUrl("vscode.webp"),
    name: "VSCode",
    description:
      "Editor de código-fonte moderno, extensível e multiplataforma.",
    website: "https://code.visualstudio.com/",
    color: "#0078d7",
  },
  clickup: {
    image: getImageUrl("clickup.png"),
    name: "ClickUp",
    description:
      "Ferramenta de produtividade e gestão de projetos colaborativos.",
    website: "https://clickup.com/",
    color: "#7b68ee",
  },
  jira: {
    image: getImageUrl("jira.png"),
    name: "Jira",
    description: "Plataforma de gerenciamento ágil de projetos e tarefas.",
    website: "https://www.atlassian.com/software/jira",
    color: "#0052cc",
  },
};

export type TechnologyCategory = {
  categoryName: string;
  technologies: Technology[];
};

export const technologiesCategories: TechnologyCategory[] = [
  {
    categoryName: "Frontend",
    technologies: [
      technologies.javascript,
      technologies.typescript,
      technologies.vue,
      technologies.react,
      technologies.next,
      technologies.nuxt,
      technologies.tailwind,
      technologies.sass,
      technologies.vite,
      technologies.storybook,
      technologies.redux,
      technologies.pinia,
    ],
  },
  {
    categoryName: "Backend",
    technologies: [
      technologies.nodejs,
      technologies.express,
      technologies.nest,
      technologies.sequelize,
      technologies.supabase,
      technologies.mongodb,
      technologies.postgresql,
      technologies.jwt,
      technologies.jest,
    ],
  },
  {
    categoryName: "Devops",
    technologies: [
      technologies.docker,
      technologies.gitlab,
      technologies.nginx,
      technologies.heroku,
      technologies.vercel,
      technologies.netlify,
      technologies.githubActions,
    ],
  },
  {
    categoryName: "Ferramentas",
    technologies: [
      technologies.figma,
      technologies.vsCode,
      technologies.clickup,
      technologies.jira,
    ],
  },
];
