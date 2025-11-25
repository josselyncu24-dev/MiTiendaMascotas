(function () {
  const TitleQuestions = document.querySelectorAll(".Questions__Title");

  TitleQuestions.forEach((Question) => {
    Question.addEventListener("click", () => {
      let HeightValue = 0;
      let Answer = Question.nextElementSibling;
      let AddPadding = Question.parentElement;

      AddPadding.classList.toggle(".Questions__Padding--Add");

      Question.children[0].classList.toggle("Questions__Arrow--Rotate");
      if (Answer.clientHeight === 0) {
        HeightValue = Answer.scrollHeight;
      }
      Answer.style.height = `${HeightValue}px`;
    });
  });
})();