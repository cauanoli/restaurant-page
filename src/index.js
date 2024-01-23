import "./style.css";
import { createHomePage } from "./pages/home";
import { createProductsPage } from "./pages/products";
import { createContactPage } from "./pages/contact";

(function () {
  const root = document.querySelector("#content");
  const home = createHomePage();
  const products = createProductsPage();
  const contact = createContactPage();

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

      productsPageLink.classList.remove("active");
      contactPageLink.classList.remove("active");
    });

    productsPageLink.addEventListener("click", () => {
      displayPage(products, "products");
      if (!productsPageLink.classList.contains("active")) {
        productsPageLink.classList.add("active");

        contactPageLink.classList.remove("active");
      }
    });

    contactPageLink.addEventListener("click", () => {
      if (!contactPageLink.classList.contains("active")) {
        contactPageLink.classList.add("active");

        productsPageLink.classList.remove("active");
      }
      displayPage(contact, "contact");
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
