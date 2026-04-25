const firstQuestionContainer = document.querySelector(".firstquestion-container");
const questionContainer = document.querySelector(".question-container");
const lastQuestionContainer = document.querySelector(".lastquestion-container");
const resultContainer = document.querySelector(".result-container");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");

// Get all Yes and No buttons
const yesBtns = document.querySelectorAll(".js-yes-btn");
const noBtns = document.querySelectorAll(".js-no-btn");

// Handle Yes button clicks
yesBtns.forEach((yesBtn) => {
  yesBtn.addEventListener("click", () => {
    firstQuestionContainer.style.display = "none";
    questionContainer.style.display = "none";
    lastQuestionContainer.style.display = "none";
    heartLoader.style.display = "inherit";

    setTimeout(() => {
      heartLoader.style.display = "none";
      resultContainer.style.display = "inherit";
      gifResult.play();
    }, 3000);
  });
});

// Handle No button clicks to navigate between containers
noBtns[0].addEventListener("click", (e) => {
  e.stopPropagation();
  firstQuestionContainer.style.display = "none";
  questionContainer.style.display = "inherit";
});

noBtns[1].addEventListener("click", (e) => {
  e.stopPropagation();
  questionContainer.style.display = "none";
  lastQuestionContainer.style.display = "inherit";
});

noBtns[2].addEventListener("click", (e) => {
  e.stopPropagation();
  lastQuestionContainer.style.display = "none";
  resultContainer.style.display = "inherit";
  gifResult.play();
});

const lastNoBtn = document.querySelector(".buttonlast-container .js-no-btn");
if (lastNoBtn) {
  lastNoBtn.addEventListener("mouseover", () => {
    const container = lastNoBtn.closest(".container");
    const newX = Math.floor(Math.random() * container.offsetWidth);
    const newY = Math.floor(Math.random() * container.offsetHeight);

    lastNoBtn.style.left = `${newX}px`;
    lastNoBtn.style.top = `${newY}px`;
  });
}