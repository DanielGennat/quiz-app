const showAnswerButton = document.querySelector("[data-js=showAnswerButton]");
const answer = document.querySelector("[data-js=answer]");

showAnswerButton.addEventListener("click", () => {
  answer.classList.toggle("hidden");
});
