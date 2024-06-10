import "./styles.css";

import { renderHome } from "./pages/home";
import { renderMenu } from "./pages/menu";

(function () {
    const pages = {
        home: {
            name: "home",
            render: renderHome,
        },
        menu: {
            name: "menu",
            render: renderMenu,
        },
        about: {
            name: "about",
        },
    };

    let currentPage;
    init();

    function init() {
        updateToPage(pages.home);
        addMenuEvents();

        function addMenuEvents() {
            const homeButton = document.querySelector("#link-home");
            const menuButton = document.querySelector("#link-menu");
            const aboutButton = document.querySelector("#link-about");

            function resetButtonsState() {
                [homeButton, menuButton, aboutButton].forEach((button) => {
                    button.classList.remove("active");
                });
            }

            homeButton.addEventListener("click", () => {
                updateToPage(pages.home, currentPage);
                resetButtonsState();
                homeButton.classList.add("active");
            });

            menuButton.addEventListener("click", () => {
                updateToPage(pages.menu);
                resetButtonsState();
                menuButton.classList.add("active");
            });

            aboutButton.addEventListener("click", () => {
                updateToPage(pages.about);
                resetButtonsState();
                aboutButton.classList.add("active");
            });
        }
    }

    function updateToPage(page) {
        if (currentPage?.name !== page.name) {
            page.render();
            currentPage = page;
        }
    }
})();
