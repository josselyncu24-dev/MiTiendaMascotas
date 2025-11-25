(function () {
  const Slider = [...document.querySelectorAll(".FAQs__Body")];
  const ButtonNext = document.querySelector("#Next");
  const ButtonBefore = document.querySelector("#Before");
  let value;

  ButtonNext.addEventListener("click",() => ChangePosition(1));

  ButtonBefore.addEventListener("click", () => ChangePosition(-1));

  function ChangePosition(add) {
    const FaQs = Number(document.querySelector(".FAQs__Body--Show").dataset.id);
    value = FaQs;
    value += add;

    if (value === Slider.length + 1 || value === 0) {
      value = value === 0 ? Slider.length : 1;
    }

    Slider[FaQs - 1].classList.toggle("FAQs__Body--Show");
    Slider[value - 1].classList.toggle("FAQs__Body--Show");
  }
})();
