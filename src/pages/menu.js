import MargheritaImage from "../assets/images/margherita.jpg";
import PepperoniImage from "../assets/images/pepperoni.jpg";
import ClassicSausageImage from "../assets/images/classic-sausage.jpg";
import FourCheeseImage from "../assets/images/four_cheese.jpg";

const pizzaFlavors = [
    {
        name: "margherita",
        image: MargheritaImage,
        description:
            "A timeless classic. Fresh tomatoes, creamy mozzarella, and aromatic basil on our signature crust, finished with a drizzle of extra virgin olive oil.",
    },
    {
        name: "pepperoni",
        image: PepperoniImage,
        description:
            "A fan favorite. Generous slices of premium pepperoni atop our rich tomato sauce and melted mozzarella cheese.",
    },
    {
        name: "four cheese",
        image: FourCheeseImage,
        description:
            "A savory blend of mozzarella, parmesan, provolone, and gouda, offering a harmonious mix of creamy and sharp flavors.",
    },
    {
        name: "classic sausage",
        image: ClassicSausageImage,
        description:
            "Hearty and satisfying. Italian sausage crumbles with a hint of fennel, paired with mozzarella and our zesty tomato sauce.",
    },
];

export function renderMenu() {
    const content = document.querySelector("#content");

    // create pizza's container
    const pizzasGrid = document.createElement("div");
    pizzasGrid.classList = "pizzas-grid";

    // fill container with pizza elements
    pizzaFlavors.forEach((flavor) => {
        let pizzaItem = createPizzaItem(flavor);
        pizzasGrid.appendChild(pizzaItem);
    });

    content.appendChild(pizzasGrid);
}

function createPizzaItem(flavor) {
    const pizzaItem = document.createElement("div");
    pizzaItem.classList = "pizzas-grid__item";

    const labelContainer = document.createElement("div");
    labelContainer.classList = "pizzas-grid__item__label-container";

    const itemLabel = document.createElement("h2");
    itemLabel.innerText = flavor.name;
    itemLabel.classList = "pizzas-grid__item__label";

    const itemImage = new Image();
    itemImage.src = flavor.image;
    itemImage.classList = "pizzas-grid__item__image";

    // TODO: add way to hide and show description when clicking on item
    const itemDescription = document.createElement("p");
    itemDescription.innerText = flavor.description;
    itemDescription.classList = "pizzas-grid__item__description";

    labelContainer.appendChild(itemLabel);

    pizzaItem.appendChild(itemImage);
    pizzaItem.appendChild(labelContainer);

    return pizzaItem;
}
