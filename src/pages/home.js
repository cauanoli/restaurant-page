import HeroImage from "../assets/images/hero_image.jpg";

export function renderHome() {
    const content = document.querySelector("#content");
    const hero = createHero({
        imageSrc: HeroImage,
        text: "essential crust",
    });

    const sectionOne = createSection({
        title: "The Art of Simplicity",
        text: "At Essential Crust, we believe that great pizza doesn't need to be complicated. Our philosophy is simple: focus on the essentials. From our carefully selected ingredients to our time-honored baking techniques, we strive to bring you the purest and most authentic pizza experience.",
    });

    const sectionTwo = createSection({
        title: "Our Pizzas",
        text: "Each pizza we craft begins with our signature dough, made fresh daily and allowed to rise naturally for a perfect, airy crust. We top it with the finest, hand-picked ingredients, ensuring every bite is a celebration of simplicity and flavor. Whether you prefer a classic Margherita or a hearty Pepperoni, you'll taste the difference that dedication to quality makes.",
    });

    content.appendChild(hero);
    content.appendChild(sectionOne);
    content.appendChild(sectionTwo);
}

function createHero({ imageSrc, text }) {
    const hero = document.createElement("div");
    hero.classList = "hero container";

    const heroImage = new Image();
    heroImage.src = imageSrc;
    heroImage.classList = "hero__image";
    hero.appendChild(heroImage);

    const imageOverlay = document.createElement("div");
    imageOverlay.classList = "overlay";

    hero.appendChild(imageOverlay);

    const heroText = document.createElement("h1");
    heroText.innerText = text;
    heroText.classList = "hero__text";
    hero.appendChild(heroText);

    return hero;
}

function createSection({ title, text, children }) {
    const section = document.createElement("section");
    section.classList = "section container";

    const sectionTitle = document.createElement("h2");
    sectionTitle.innerText = title;
    sectionTitle.classList = "section__title";
    section.appendChild(sectionTitle);

    const sectionText = document.createElement("p");
    sectionText.innerText = text;
    sectionText.classList = "section__text";
    section.appendChild(sectionText);

    if (children !== undefined) {
        children.forEach((node) => {
            section.appendChild(node);
        });
    }

    return section;
}
