export interface Crumb {
  name: string;
  url?: string;
}

export interface RouteInfo {
  title: string;
  items: Crumb[];
}

export const routes: Record<string, RouteInfo> = {
    "/blog": {
    title: "Nuestro Blog",
    items: [
      { name: "Inicio", url: "/" },
      { name: "blog" },
    ],
  },
    "/contact": {
    title: "Contáctanos",
    items: [
      { name: "Inicio", url: "/" },
      { name: "Contacto" },
    ],
  },
    "/services": {
    title: "Nuestros Servicios",
    items: [
      { name: "Inicio", url: "/" },
      { name: "Servicios" },
    ],
  },
  "/about": {
    title: "Acerca de nosotros",
    items: [
      { name: "Inicio", url: "/" },
      { name: "Acerca de nosotros" },
    ],
  },
  "/appointment": {
    title: "Reservar Cita",
    items: [
      { name: "Inicio", url: "/" },
      { name: "Cita" },
    ],
  },
  "/team": {
    title: "Nuestro Equipo",
    items: [
      { name: "Inicio", url: "/" },
      { name: "Equipo" },
    ],
  },
  "/feature": {
    title: "Características",
    items: [
      { name: "Inicio", url: "/" },
      { name: "Características" },
    ],
  },
  "/testimonial": {
    title: "Testimonios",
    items: [
      { name: "Inicio", url: "/" },
      { name: "Testimonios" },
    ],
  },
};
