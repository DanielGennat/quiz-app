export default function navigation() {
  const navigationButtons = document.querySelectorAll(
    "[data-js=navigationButton]"
  );
  navigationButtons.forEach((navigationButton) => {
    navigationButton.addEventListener("click", () => {
      navigationButtons.forEach((navigationButton) => {
        navigationButton.classList.remove("current");
      });
      navigationButton.classList.add("current");
      const questionCardSection = document.querySelector(
        "[data-js=questionCardSection]"
      );
      const bookmarksSection = document.querySelector(
        "[data-js=bookmarksSection]"
      );
      const profileSection = document.querySelector("[data-js=profileSection]");
      if (navigationButton.classList.contains("footer__nav--home")) {
        console.log("footer__nav--home");
        questionCardSection.classList.remove("hidden");
        bookmarksSection.classList.add("hidden");
        profileSection.classList.add("hidden");
      } else if (navigationButton.classList.contains("footer__nav--bookmark")) {
        console.log("footer__nav--bookmark");
        questionCardSection.classList.add("hidden");
        bookmarksSection.classList.remove("hidden");
        profileSection.classList.add("hidden");
      } else {
        console.log("footer__nav--profile");
        questionCardSection.classList.add("hidden");
        bookmarksSection.classList.add("hidden");
        profileSection.classList.remove("hidden");
      }
    });
  });
}
