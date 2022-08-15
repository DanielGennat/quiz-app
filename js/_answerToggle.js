export default function answerToggle() {
  const questionCards = document.querySelectorAll("[data-js=questionCards]");
  questionCards.forEach((questionCard) => {
    const showAnswerButton = questionCard.querySelector(
      "[data-js=showAnswerButton]"
    );
    const answer = questionCard.querySelector("[data-js=answer]");
    showAnswerButton.addEventListener("click", () => {
      answer.classList.toggle("hidden");
      if (answer.classList.includes("hidden") === true) {
        console.log("test if");
        showAnswerButton.textContent.replace("Hide Answer", "Show Answer");
      } else {
        showAnswerButton.textContent.replace("Show Answer", "Hide Answer");
        console.log("test else");
      }
    });
  });
}
