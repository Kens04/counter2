(() => {
  const $counter = document.getElementById("js-counter");

  const clickHandler = () => {
    $counter.textContent = 0;

    if ($counter.textContent === "0") {
      for (
        let index = 0;
        index < document.getElementsByClassName("js-button").length;
        index++
      ) {
        document.getElementsByClassName("js-button")[
          index
        ].style.pointerEvents = "auto";
        document.getElementsByClassName("js-button")[
          index
        ].style.backgroundColor = "#000";
      }
      return;
    }
  };

  document
    .getElementById("js-reset-button")
    .addEventListener("click", clickHandler);
})();
