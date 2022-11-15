//
const URL = "https://thesimpsonsquoteapi.glitch.me/quotes";

const main = document.getElementById("main");

fetch(URL)
  .then((response) => response.json())
  .then((data) => {
    createCard(data[0]);
  })
  .catch((err) => console.error(err));

function createCard(data) {
  const { character, quote, image } = data;

  const card = document.createElement("div");
  const title = document.createElement("h2");
  const img = document.createElement("img");
  const quoteCharacter = document.createElement("p");
  const button = document.createElement("button");

  title.textContent = character;
  img.src = image;
  img.alt = image;
  quoteCharacter.textContent = quote;
  button.textContent = 'Generate'

  main.appendChild(card);
  card.appendChild(title);
  card.appendChild(img);
  card.appendChild(quoteCharacter);
  card.appendChild(button);

  button.addEventListener("click", () => {
    window.location.reload();
  });
}
