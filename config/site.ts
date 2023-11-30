export const siteConfig = {
  name: "Abana Projects",
  url: "https://ui.shadcn.com",
  ogImage: "https://ui.shadcn.com/og.jpg",
  description: "Strength in partnership.",
  links: {
    twitter: "https://twitter.com/",
    github: "https://github.com/",
    instagram: "https://github.com/",
    whatsapp: "https://github.com/",
  },
};
export const linksConfig = {
  mainNav: [
    {
      title: "Town Planning",
      href: "/town-planning",
    },
    {
      title: "Commodity Broking",
      href: "/commodity-broking",
    },
    {
      title: "Contact US",
      href: "/contact",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
};

export type SiteConfig = typeof siteConfig;
