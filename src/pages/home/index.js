import "./home.css";

export function createHomePage() {
  const hero = createHero();
  const messages = createMessages();
  const homeContainer = document.createElement("main");

  homeContainer.classList = "home__container";

  homeContainer.appendChild(hero);
  homeContainer.appendChild(messages);

  return homeContainer;
}

function createMessage(text) {
  const container = document.createElement("div");
  container.classList = "message";

  const textContainer = document.createElement("p");
  textContainer.textContent = text;

  container.appendChild(textContainer);
  return container;
}

function createMessages() {
  const container = document.createElement("div");
  container.classList = "messages";

  const flavors = createMessage("Try different flavors");
  const emotions = createMessage("Live other emotions");
  const people = createMessage("Meet other people");

  flavors.classList.add("bg-blue");
  emotions.classList.add("bg-pink");
  people.classList.add("bg-yellow");

  [flavors, emotions, people].forEach((message) => {
    container.appendChild(message);
  });

  return container;
}

function createHero() {
  const hero = document.createElement("div");
  hero.classList = "hero";

  const content = document.createElement("p");
  content.classList = "hero__content";
  content.textContent = "ice cream is happiness";

  hero.appendChild(content);

  return hero;
}
