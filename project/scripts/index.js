import { setupNavigation } from "./navigation.js";
import { updateLastModified } from "./last-modified.js";
import { populateColorOptions } from "./forms.js";
import { populateMaterialOptions } from "./forms.js";       

document.getElementById("exploreBtn").addEventListener("click", () => {
  window.location.href = "gallery.html";
});

setupNavigation();
updateLastModified();
populateColorOptions();
populateMaterialOptions();