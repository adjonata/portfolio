export type LinkItem = {
  title: string;
  link: string;
  icon: string;
};

export const socialItems: LinkItem[] = [
  {
    title: "GitHub",
    link: "https://github.com/adjonata/",
    icon: "uil:github",
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/alex-djonata-684405151/",
    icon: "uil:linkedin",
  },
];

export type ContactItem = {
  icon: string;
  title: string;
  username: string;
  link: string;
};

export const contactItems: ContactItem[] = [
  {
    title: "Email",
    link: "mailto:djonataalex@gmail.com",
    icon: "uil:envelope",
    username: "djonataalex@gmail.com",
  },
  {
    title: "Telefone",
    link: "tel:45998031093",
    icon: "uil:phone",
    username: "(45) 99803-1093",
  },
  {
    title: "Whatsapp",
    link: "https://wa.me/5545998031093",
    icon: "uil:whatsapp",
    username: "(45) 99803-1093",
  },
  {
    title: "Linkedin",
    link: "https://www.linkedin.com/in/alex-djonata-684405151/",
    icon: "uil:linkedin",
    username: "Alex Djonata",
  },
];
