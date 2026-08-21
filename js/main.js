const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
const filters = document.querySelectorAll(".filter");
const projects = document.querySelectorAll(".project");

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
