export function setupNavigation() {
  document.addEventListener("DOMContentLoaded", () => {
    const hamBtn = document.getElementById("ham-btn");
    const nav = document.querySelector("header nav");

  if (hamBtn && nav) {
    hamBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      nav.classList.toggle("open");
    });

    // Optional: close nav when clicking outside (mobile UX)
    document.addEventListener("click", (e) => {
      if (
        nav.classList.contains("open") &&
        !nav.contains(e.target) &&
        e.target !== hamBtn
      ) {
        nav.classList.remove("open");
      }
    });
  }
});
}