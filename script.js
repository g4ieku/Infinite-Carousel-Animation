const paths = document.querySelectorAll(".carousel_content");

paths.forEach((path) => {
  const cards = [...path.children];

  for (const card of cards) {
    path.appendChild(card.cloneNode(true));
  }
});
