(() => {
  const $counter = document.getElementById("js-counter");

  const clickHandler = (e) => {
    const $targetButton = e.currentTarget;
    let currentCount = parseInt($counter.textContent);
    if ($targetButton.textContent === "+") {
      $counter.textContent = currentCount + 1;
    } else if ($targetButton.textContent === "+10") {
      $counter.textContent = currentCount + 10;
    } else {
      $counter.textContent = currentCount - 1;
    }

    const plusCount = currentCount + 1;
    if (plusCount === 10 || $targetButton.textContent === "+10") {
      alert("カウントが10になりました。");
      for (
        let index = 0;
        index < document.getElementsByClassName("js-button").length;
        index++
      ) {
        document.getElementsByClassName("js-button")[index].style.pointerEvents =
          "none";
        document.getElementsByClassName("js-button")[index].style.backgroundColor =
          "gray";
      }
    }
  };

  for (
    let index = 0;
    index < document.getElementsByClassName("js-button").length;
    index++
  ) {
    document
      .getElementsByClassName("js-button")
      [index].addEventListener("click", (e) => clickHandler(e));
  }
})();
