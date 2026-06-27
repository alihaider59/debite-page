const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("btn");
const closeBtn = document.getElementById("close");
const overlay = document.getElementById("nav-overlay");
const dropdowns = document.querySelectorAll(".dropdown");

function openNav() {
  navbar?.classList.add("active");
  overlay?.classList.add("active");
  document.body.classList.add("nav-open");
  menuBtn?.setAttribute("aria-expanded", "true");
  overlay?.setAttribute("aria-hidden", "false");
}

function closeNav() {
  navbar?.classList.remove("active");
  overlay?.classList.remove("active");
  document.body.classList.remove("nav-open");
  menuBtn?.setAttribute("aria-expanded", "false");
  overlay?.setAttribute("aria-hidden", "true");
  dropdowns.forEach((dropdown) => dropdown.classList.remove("open"));
}

if (menuBtn) {
  menuBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    openNav();
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", closeNav);
}

if (overlay) {
  overlay.addEventListener("click", closeNav);
}

dropdowns.forEach((dropdown) => {
  const link = dropdown.querySelector("a");
  if (!link) return;

  link.addEventListener("click", (e) => {
    if (window.innerWidth > 1023) return;
    e.preventDefault();
    dropdown.classList.toggle("open");
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 1023) {
    closeNav();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeNav();
  }
});

// Close menu when a top-level nav link is tapped (not dropdown parent)
navbar?.querySelectorAll("li:not(.dropdown) a").forEach((link) => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 1023) closeNav();
  });
});
