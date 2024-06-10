import MapImage from "../assets/images/map.png";

export function renderAbout() {
    const content = document.querySelector("#content");
    const contactUsSection = createContactSection();
    const visitUsSection = createVisitUsSection();

    content.appendChild(contactUsSection);
    content.appendChild(visitUsSection);
}

function createContactSection() {
    const contactSection = document.createElement("section");
    contactSection.classList = "contact-us container";

    const contactTitle = document.createElement("h2");
    contactTitle.innerText = "Contact Us";
    contactTitle.classList = "contact-us__title";

    const contactInfo = document.createElement("p");
    contactInfo.classList = "contact-us__info";

    const address = document.createElement("div");
    address.innerText = "Address: 1234 Pizza Lane, Simplicity Town, USA";

    const phone = document.createElement("div");
    phone.innerText = "Phone: (123) 456-7890";

    const email = document.createElement("div");
    email.innerText = "Email: contact@essentialcrust.com";

    contactInfo.appendChild(address);
    contactInfo.appendChild(phone);
    contactInfo.appendChild(email);

    contactSection.appendChild(contactTitle);
    contactSection.appendChild(contactInfo);

    return contactSection;
}

function createVisitUsSection() {
    const visitUsSection = document.createElement("section");
    visitUsSection.classList = "visit-us container";

    const visitUsTitle = document.createElement("h2");
    visitUsTitle.classList = "visit-us__title";
    visitUsTitle.innerText = "Visit Us";

    const mapImage = new Image();
    mapImage.classList = "visit-us__image";
    mapImage.src = MapImage;

    visitUsSection.appendChild(visitUsTitle);
    visitUsSection.appendChild(mapImage);

    return visitUsSection;
}
