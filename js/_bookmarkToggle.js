export default function bookmarkToggle() {
  const questionCards = document.querySelectorAll("[data-js=questionCards]");
  questionCards.forEach((questionCard) => {
    const bookmarkLinks = questionCard.querySelectorAll(
      "[data-js=bookmarkLink]"
    );
    bookmarkLinks.forEach((bookmarkLink) => {
      bookmarkLink.addEventListener("click", () => {
        console.log("was clicked");
        bookmarkLinks.forEach((bookmarkLink) => {
          bookmarkLink.classList.toggle("hidden");
        });
      });
    });
  });
}
