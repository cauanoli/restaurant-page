import "./contact.css";

export function createContactPage() {
  const contactContainer = document.createElement("main");
  contactContainer.classList = "contact";

  const informationSection = createInformationSection();

  const sections = [informationSection];

  sections.forEach((section) => {
    contactContainer.appendChild(section);
  });

  return contactContainer;
}

function createInformationSection() {
  const information = document.createElement("section");

  information.classList = "contact__information";

  const informationTitle = document.createElement("h2");
  informationTitle.classList = "contact__information__title";
  informationTitle.innerText = "our information";

  const telephoneNumber = document.createElement("p");
  telephoneNumber.innerText = "+1 (555) 555-5555";
  telephoneNumber.classList =
    "contact__information__telephone-number telephone-number";

  information.appendChild(informationTitle);
  information.appendChild(telephoneNumber);
  return information;
}
