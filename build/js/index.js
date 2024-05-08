import questions from "./questions.js";

const buttons = document.getElementsByTagName("button");
const mainElement = document.querySelector("#main");

// dynamically adds questions based on the question.js file
for (let question of questions) {
  // create an element and give it the appropriate tailwind classes
  // set the inner html of the element to be the same in the index.html
  // Render the proper question and answer dynamically
  const element = document.createElement("div");
  element.classList.add("grid", "gap-8");
  element.innerHTML = `<button
  class="flex justify-between w-full items-center accordion-button hover:text-[#AD28EB]"
>
    <h2
      class="text-left w-[200px] font-bold text-[#2c122f] sm:w-full hover:text-[inherit]"
    >
      ${question.question}
    </h2>

    <img src="images/icon-plus.svg" alt="plus icon" class="toggle-icon" />
  </button>

  <p class="text-[#2c122f] hidden accordion-content">
    ${question.answer}
  </p>
`;

  // append the div element together with an hr element to the main element
  mainElement.append(element, document.createElement("hr"));
}

// placed below here so that the answers are rendered to the page first before being fetched here
const contents = document.querySelectorAll(".accordion-content");

for (let button of buttons) {
  button.addEventListener("click", () => {
    const toggleIcon = button.lastElementChild; // plus / minos icon
    const content = button.nextElementSibling; // answers
    const isOpen = content.classList.toggle("hidden"); // true or false

    // makes sure that only one answer is open at a time
    contents.forEach((item, index) => {
      if (item !== content) {
        item.classList.add("hidden");
        document.querySelectorAll(".toggle-icon")[index].src =
          "images/icon-plus.svg";
      }
    });

    // hides and shows the answers when the same button is clicked consecutively.
    if (isOpen) {
      content.classList.add("hidden");
      toggleIcon.setAttribute("src", "images/icon-plus.svg");
      toggleIcon.setAttribute("alt", "plus icon");
    } else {
      content.classList.remove("hidden");
      toggleIcon.setAttribute("src", "images/icon-minus.svg");
      toggleIcon.setAttribute("alt", "minus icon");
    }
  });
}
