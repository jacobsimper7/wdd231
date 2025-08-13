import { setupNavigation } from "./navigation.js";
import { updateLastModified } from "./last-modified.js";

setupNavigation();
updateLastModified();

const params = new URLSearchParams(window.location.search);

let html = "<h2>Order Confirmation</h2>";
for (const [key, value] of params.entries()) {
  html += `<p><strong>${key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}:</strong> ${decodeURIComponent(value)}</p>`;
}

document.getElementById("result").innerHTML = html;