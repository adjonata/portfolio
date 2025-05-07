export type SectionItem = {
  title: string;
  subtitle: string;
  id: string;
  icon: string;
};

export const sections = {
  projects: {
    title: "Projetos",
    subtitle: "Confira meus projetos de destaque",
    id: "projects",
    icon: "uil:folder-open",
  },
  experiences: {
    title: "Experiências",
    subtitle: "Confira minhas experiências de trabalho",
    id: "experiences",
    icon: "uil:bookmark",
  },
  technologies: {
    title: "Conhecimentos",
    subtitle: "Confira as tecnologias em que tenho experiência",
    icon: "material-symbols:book-2-outline",
    id: "technologies",
  },
  contact: {
    title: "Contato",
    subtitle: "Entre em contato para oportunidades",
    id: "contact",
    icon: "uil:phone",
  },
};
