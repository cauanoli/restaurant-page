import "./style.css";
import chocolateImage from "./images/chocolate.jpg";
import strawberryImage from "./images/strawberry.jpg";
import vanillaImage from "./images/vanilla.jpg";

const productData = [
  {
    name: "vanilla",
    image: vanillaImage,
  },
  {
    name: "strawberry",
    image: strawberryImage,
  },
  {
    name: "chocolate",
    image: chocolateImage,
  },
];

export function createProductsPage() {
  const productsContainer = document.createElement("main");
  productData.forEach((data) => {
    const product = createProduct(data);
    productsContainer.appendChild(product);
  });

  productsContainer.classList = "products";

  return productsContainer;
}

function createProduct({ name, image }) {
  const productContainer = document.createElement("div");
  productContainer.classList = "product";

  const productImage = new Image();
  productImage.src = image;
  productImage.classList = "product__image";

  const productTitle = document.createElement("p");
  productTitle.innerText = name;
  productTitle.classList = "product__title";

  productContainer.appendChild(productImage);
  productContainer.appendChild(productTitle);

  return productContainer;
}
