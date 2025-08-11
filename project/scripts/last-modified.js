export function updateLastModified() {
  let oLastModif = new Date(document.lastModified);
  let currentyear = new Date().getFullYear();

  lastModified.innerHTML = `Last Modified: <span class="highlight">${new Intl.DateTimeFormat(
    "en-US",
    {
      dateStyle: "full"
    }
  ).format(oLastModif)}</span>`;

  document.addEventListener("DOMContentLoaded", () => {
    const ts = document.getElementById("timestamp");
    if (ts) {
      ts.value = new Date().toISOString();
    }
  });
}