const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");

const copy = {
  es: {
    "meta.title": "Piconera Tech — desarrollo de aplicaciones",
    "meta.description":
      "Piconera Tech, desarrollo de aplicaciones. Apps, juegos y herramientas con raíces andaluzas: útiles y hechas a medida.",
    "meta.ogDescription": "Desarrollo de aplicaciones. Raíces andaluzas, tecnología que conecta.",
    skip: "Saltar al contenido",
    "nav.label": "Principal",
    "nav.menu": "Abrir menú",
    "nav.projects": "Proyectos",
    "nav.approach": "Enfoque",
    "nav.contact": "Contacto",
    "lang.group": "Idioma",
    "hero.eyebrow": "Desarrollo de aplicaciones",
    "hero.title": "Raíces andaluzas. Tecnología que conecta.",
    "hero.lede":
      "Piconera Tech se dedica al desarrollo de aplicaciones: apps, juegos y herramientas para el día a día. Productos claros y pensados para usarse sin ruido.",
    "hero.projects": "Ver proyectos",
    "hero.contact": "Contacto",
    "hero.logoAlt": "Logotipo de Piconera Tech: una P con llama y el nombre de la marca",
    "pillars.label": "Qué hacemos",
    "pillars.1.title": "Desarrollamos soluciones",
    "pillars.1.text": "Web, móvil y herramientas a medida, del prototipo a la publicación.",
    "pillars.2.title": "Aplicaciones a medida",
    "pillars.2.text": "Android, PWA y extensiones. Interfaces claras y datos en el dispositivo.",
    "pillars.3.title": "Innovación local",
    "pillars.3.text": "Tecnología cercana, nacida de lo que hace falta.",
    "work.eyebrow": "Porfolio",
    "work.title": "Proyectos",
    "work.intro":
      "Una selección de lo que ya existe en GitHub. Esta base se irá completando con capturas, tiendas y casos.",
    "filters.label": "Filtrar proyectos",
    "filters.all": "Todas",
    "filters.apps": "Apps",
    "filters.leisure": "Ocio",
    "filters.tools": "Herramientas",
    "youlist.aria": "YouList en Chrome Web Store",
    "youlist.alt": "Icono de YouList",
    "youlist.desc":
      "Ordena tus suscripciones de YouTube en listas por tema y ve solo lo nuevo de cada una. Extensión para Chrome.",
    "bienestoy.aria": "Bienestoy, abrir la app",
    "bienestoy.alt": "Icono de Bienestoy",
    "bienestoy.desc":
      "Marca cada día si cumpliste tu rutina y sigue tu peso y tus medidas en el mismo sitio. Tus datos no salen del móvil.",
    "checkeasy.aria": "Checkeasy en Google Play",
    "checkeasy.alt": "Icono de Checkeasy",
    "checkeasy.desc": "Haz una lista maestra una vez y adáptala a cada viaje. Marca lo que ya va en la maleta y no te dejes nada.",
    "comi2.aria": "Comi2 en GitHub",
    "comi2.alt": "Icono de Comi2",
    "comi2.desc":
      "Planifica el menú de la semana con lo que tienes en la despensa, guarda tus recetas y saca la lista de la compra. Sin cuentas: en el navegador o en Android.",
    "mestruendo.alt": "Icono de Mestruendo",
    "mestruendo.desc": "Registra tu ciclo y tus síntomas y consulta predicciones y estadísticas. Privado: todo se guarda en tu dispositivo.",
    "moybi.alt": "Icono de MoyBi",
    "moybi.desc": "Cataloga tus monedas y billetes con fotos y etiquetas y ordénalos en colecciones. Todo guardado en tu dispositivo.",
    "rocketa.aria": "Rocketa en Google Play",
    "rocketa.alt": "Icono de Rocketa",
    "rocketa.banner": "assets/apps/banners/rocketa.jpg?v=20261019",
    "rocketa.desc": "Elige el momento justo para despegar y deja que la gravedad te lleve hasta la meta. 64 niveles de precisión.",
    "shame.alt": "Icono de Shame!",
    "shame.desc": "Un móvil en el centro y cartas que piden anécdotas. Contadlas en voz alta y descubrid lo que nunca os habíais dicho.",
    "slash.aria": "Slash Highlight en GitHub",
    "slash.alt": "Icono de Slash Highlight",
    "slash.desc": "Plugin de Obsidian que colorea comandos, menciones y palabras clave para que tus notas se lean de un vistazo.",
    "tetengocalado.aria": "TeTengoCalado, jugar en el navegador",
    "tetengocalado.alt": "Icono de TeTengoCalado",
    "tetengocalado.banner": "assets/apps/banners/tetengocalado.jpg?v=20261025",
    "tetengocalado.desc":
      "Todos responden en secreto y tú adivinas el orden. Un juego en grupo para ver cuánto conoces a tu gente.",
    "tetengocalado.url": "https://tetengocalado.com/es",
    "quotadock.aria": "QuotaDock en GitHub: código y descargas para Windows",
    "quotadock.alt": "Icono de QuotaDock",
    "quotadock.banner": "assets/apps/banners/quotadock.png?v=20261025",
    "quotadock.desc": "Mira cuánto te queda de tus cuotas de IA sin abrir nada: un icono junto al reloj con todos tus proveedores. Para Windows.",
    "tag.game": "Juego",
    "tag.app": "App",
    "tag.tool": "Herramienta",
    "tag.extension": "Extensión",
    "tag.plugin": "Plugin",
    "tag.group": "En grupo",
    "tag.opensource": "Código abierto",
    "tag.soon": "Próximamente",
    "cta.open": "Abrir app",
    "cta.play": "Jugar",
    "approach.eyebrow": "Cómo trabajamos",
    "approach.title": "Poco humo, mucha función",
    "step1.title": "Entender el uso real",
    "step1.text": "Partimos del hábito diario, no del stack. Si no se usa, no se construye.",
    "step2.title": "Probar pronto",
    "step2.text": "QA, accesibilidad y publicación forman parte del mismo ciclo de desarrollo.",
    "step3.title": "Dejarlo en tu dispositivo",
    "step3.text": "Preferimos datos locales, copias JSON y cero cuentas cuando el producto lo permite.",
    "contact.eyebrow": "Contacto",
    "contact.title": "De nuestras necesidades, soluciones.",
    "contact.lede":
      "Convertimos lo que nos hace falta en el día a día en desarrollo de software: apps, juegos y herramientas que usamos y publicamos.",
    "contact.cta": "Escribir a piconeratech@gmail.com",
    "contact.mailto": "mailto:piconeratech@gmail.com?subject=Hola%20Piconera%20Tech",
    "contact.place": "Respuesta en horario de oficina",
    "footer.tagline": "Desarrollo de aplicaciones",
    "notfound.title": "Página no encontrada — Piconera Tech",
    "notfound.heading": "Esta página no está en el mapa.",
    "notfound.text": "Vuelve al inicio de Piconera Tech.",
    "notfound.home": "Ir al inicio",
  },
  en: {
    "meta.title": "Piconera Tech — application development",
    "meta.description":
      "Piconera Tech, application development. Apps, games, and tools with Andalusian roots: useful and made to measure.",
    "meta.ogDescription": "Application development. Andalusian roots, technology that connects.",
    skip: "Skip to content",
    "nav.label": "Main",
    "nav.menu": "Open menu",
    "nav.projects": "Projects",
    "nav.approach": "Approach",
    "nav.contact": "Contact",
    "lang.group": "Language",
    "hero.eyebrow": "Application development",
    "hero.title": "Andalusian roots. Technology that connects.",
    "hero.lede":
      "Piconera Tech builds applications: apps, games, and everyday tools. Clear products, made to be used without noise.",
    "hero.projects": "See projects",
    "hero.contact": "Contact",
    "hero.logoAlt": "Piconera Tech logo: a P with a flame and the brand name",
    "pillars.label": "What we do",
    "pillars.1.title": "We build solutions",
    "pillars.1.text": "Web, mobile, and custom tools, from prototype to release.",
    "pillars.2.title": "Custom applications",
    "pillars.2.text": "Android, PWAs, and extensions. Clear interfaces and data on the device.",
    "pillars.3.title": "Local innovation",
    "pillars.3.text": "Close technology, born from what is needed.",
    "work.eyebrow": "Portfolio",
    "work.title": "Projects",
    "work.intro":
      "A selection of what already lives on GitHub. This page will grow with screenshots, stores, and case studies.",
    "filters.label": "Filter projects",
    "filters.all": "All",
    "filters.apps": "Apps",
    "filters.leisure": "Leisure",
    "filters.tools": "Tools",
    "youlist.aria": "YouList on the Chrome Web Store",
    "youlist.alt": "YouList icon",
    "youlist.desc": "Sort your YouTube subscriptions into lists by topic and see only what's new in each. A Chrome extension.",
    "bienestoy.aria": "Bienestoy, open the app",
    "bienestoy.alt": "Bienestoy icon",
    "bienestoy.desc": "Check off each day whether you kept your routine and track your weight and measurements in one place. Your data stays on your phone.",
    "checkeasy.aria": "Checkeasy on Google Play",
    "checkeasy.alt": "Checkeasy icon",
    "checkeasy.desc": "Build a master list once and adapt it to every trip. Tick off what's already in the suitcase and leave nothing behind.",
    "comi2.aria": "Comi2 on GitHub",
    "comi2.alt": "Comi2 icon",
    "comi2.desc": "Plan the week's menu from what's in your pantry, keep your recipes, and get the shopping list. No account needed: in the browser or on Android.",
    "mestruendo.alt": "Mestruendo icon",
    "mestruendo.desc": "Log your cycle and symptoms and check predictions and statistics. Private: everything is stored on your device.",
    "moybi.alt": "MoyBi icon",
    "moybi.desc": "Catalog your coins and banknotes with photos and tags, and sort them into collections. Everything stored on your device.",
    "rocketa.aria": "Rocketa on Google Play",
    "rocketa.alt": "Rocketa icon",
    "rocketa.banner": "assets/apps/banners/rocketa-en.jpg?v=20261019",
    "rocketa.desc": "Pick the right moment to launch and let gravity carry you to the goal. 64 levels of precision.",
    "shame.alt": "Shame! icon",
    "shame.desc": "One phone in the middle and cards that ask for anecdotes. Tell them out loud and find out what you'd never told each other.",
    "slash.aria": "Slash Highlight on GitHub",
    "slash.alt": "Slash Highlight icon",
    "slash.desc": "Obsidian plugin that colors commands, mentions, and keywords so your notes can be read at a glance.",
    "tetengocalado.aria": "TeTengoCalado, play in your browser",
    "tetengocalado.alt": "TeTengoCalado icon",
    "tetengocalado.banner": "assets/apps/banners/tetengocalado-en.jpg?v=20261025",
    "tetengocalado.desc":
      "Everyone answers in secret and you guess the order. A group game to see how well you know your people.",
    "tetengocalado.url": "https://tetengocalado.com/en",
    "quotadock.aria": "QuotaDock on GitHub: source code and Windows downloads",
    "quotadock.alt": "QuotaDock icon",
    "quotadock.banner": "assets/apps/banners/quotadock-en.png?v=20261025",
    "quotadock.desc": "See how much of your AI quotas you have left without opening anything: an icon beside the clock with all your providers. For Windows.",
    "tag.game": "Game",
    "tag.app": "App",
    "tag.tool": "Tool",
    "tag.extension": "Extension",
    "tag.plugin": "Plugin",
    "tag.group": "Party",
    "tag.opensource": "Open source",
    "tag.soon": "Coming soon",
    "cta.open": "Open app",
    "cta.play": "Play",
    "approach.eyebrow": "How we work",
    "approach.title": "Little smoke, lots of function",
    "step1.title": "Understand real use",
    "step1.text": "We start from the daily habit, not the stack. If it won't be used, we don't build it.",
    "step2.title": "Test early",
    "step2.text": "QA, accessibility, and release are part of the same development cycle.",
    "step3.title": "Keep it on your device",
    "step3.text": "We prefer local data, JSON backups, and zero accounts when the product allows it.",
    "contact.eyebrow": "Contact",
    "contact.title": "From our needs, solutions.",
    "contact.lede":
      "We turn what we need day to day into software: apps, games, and tools we use and publish.",
    "contact.cta": "Write to piconeratech@gmail.com",
    "contact.mailto": "mailto:piconeratech@gmail.com?subject=Hello%20Piconera%20Tech",
    "contact.place": "Replies during office hours",
    "footer.tagline": "Application development",
    "notfound.title": "Page not found — Piconera Tech",
    "notfound.heading": "This page is not on the map.",
    "notfound.text": "Back to the Piconera Tech home.",
    "notfound.home": "Go to home",
  },
};

function readLang() {
  try {
    return localStorage.getItem("piconera-lang") === "en" ? "en" : "es";
  } catch {
    return "es";
  }
}

function applyLanguage(lang) {
  const text = copy[lang] || copy.es;
  document.documentElement.lang = lang === "en" ? "en" : "es";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = text[el.dataset.i18n];
    if (value != null) el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const value = text[el.dataset.i18nAria];
    if (value != null) el.setAttribute("aria-label", value);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const value = text[el.dataset.i18nAlt];
    if (value != null) el.setAttribute("alt", value);
  });

  document.querySelectorAll("[data-i18n-src]").forEach((el) => {
    const value = text[el.dataset.i18nSrc];
    if (value != null) el.setAttribute("src", value);
  });

  document.querySelectorAll("[data-i18n-content]").forEach((el) => {
    const value = text[el.dataset.i18nContent];
    if (value != null) el.setAttribute("content", value);
  });

  document.querySelectorAll("[data-i18n-href]").forEach((el) => {
    const value = text[el.dataset.i18nHref];
    if (value != null) el.setAttribute("href", value);
  });

  document.querySelectorAll("[data-set-lang]").forEach((button) => {
    const active = button.dataset.setLang === lang;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  try {
    localStorage.setItem("piconera-lang", lang);
  } catch {
    /* preference stays for this visit */
  }
}

applyLanguage(readLang());

document.querySelectorAll("[data-set-lang]").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.setLang);
  });
});

if (toggle && links) {
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const group = button.dataset.filter;

    filters.forEach((item) => item.setAttribute("aria-pressed", "false"));
    button.setAttribute("aria-pressed", "true");

    projects.forEach((card) => {
      const match = group === "all" || card.dataset.group === group;
      card.classList.toggle("hidden", !match);
    });
  });
});
