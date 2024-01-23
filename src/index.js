import "./style.css";
import { createHomePage } from "./pages/home";
import { createProductsPage } from "./pages/products";

(function () {
  const root = document.querySelector("#content");
  const home = createHomePage();
  const products = createProductsPage();
  let currentPage = null;

  function addNavigationEvents() {
    const homePageLink = document.querySelector(".logo");
    const productsPageLink = document.querySelector(
      ".navigation__link--products"
    );
    const contactPageLink = document.querySelector(
      ".navigation__link--contact"
    );

    homePageLink.addEventListener("click", () => {
      displayPage(home, "home");
    });

    productsPageLink.addEventListener("click", () => {
      displayPage(products, "products");
    });
  }

  function clearRoot() {
    root.textContent = "";
  }

  function displayPage(page, name) {
    if (currentPage !== name) {
      clearRoot();
      root.appendChild(page);
      root.classList = name;
      currentPage = name;
      console.log("navigated to page ", name);
    }
  }

  addNavigationEvents();
  displayPage(home, "home");
})();
