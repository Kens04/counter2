(() => {
  const $counter = document.getElementById("js-counter");

  const clickHandler = () => {
    $counter.textContent = 1;
  };

  document
    .getElementById("js-reset-button")
    .addEventListener("click", clickHandler);
})();
