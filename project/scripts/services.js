import { fetchAndPopulateProducts } from "./forms.js";
import { setupNavigation } from "./navigation.js";
import { updateLastModified } from "./last-modified.js";

fetchAndPopulateProducts();
setupNavigation();
updateLastModified();