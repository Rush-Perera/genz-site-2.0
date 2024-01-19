import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    newTab: false,
    path: "/#features",
  },
  {
    id: 2.1,
    title: "Projects",
    newTab: false,
    path: "/projects",
  },
  {
    id: 2.3,
    title: "Packages",
    newTab: false,
    path: "/packages",
  },
  {
    id: 3,
    title: "Policies",
    newTab: false,
    path: "/docs",
    submenu: [
      {
        id: 31,
        title: "Inroduction",
        newTab: false,
        path: "/docs",
      },
      {
        id: 31,
        title: "Terms and Conditions",
        newTab: false,
        path: "/docs/terms-and-conditions",
      },
      {
        id: 34,
        title: "Privacy Policy",
        newTab: false,
        path: "/docs/privacy-policy",
      },
      {
        id: 35,
        title: "Refund Policy",
        newTab: false,
        path: "/docs/refund-policy",
      },
      
    ],
  },

  {
    id: 4,
    title: "Consultation",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
