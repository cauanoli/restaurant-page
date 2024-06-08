import "./styles.css";

import { renderHome } from "./pages/home";

(function () {
    const homeButton = document.querySelector("#link-home");
    const menuButton = document.querySelector("#link-menu");
    const aboutButton = document.querySelector("#link-about");

    renderHome();
})();
