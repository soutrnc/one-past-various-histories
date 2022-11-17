const bubbles = document.querySelector(".bubbles");
const title = document.querySelector(".bold-title");

title.addEventListener("click", () => {
  bubbles.classList.toggle("hide-bubble");
});
