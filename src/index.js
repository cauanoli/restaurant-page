import { createHomePage } from "./pages/home";
import "./style.css";

(function () {
  const root = document.querySelector("#content");
  const home = createHomePage();

  function clearRoot() {
    root.textContent = "";
  }

  function initializeHomePage() {
    clearRoot();
    root.appendChild(home);
    root.classList = "home";
  }

  initializeHomePage();
})();
