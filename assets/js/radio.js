function createRadioHandler() {
  let previousRadioItem = null;

  return function () {
    if (!previousRadioItem) {
      previousRadioItem = this;
      previousRadioItem.classList.toggle("radio-item_checked");
    } else {
      previousRadioItem.classList.toggle("radio-item_checked");
      previousRadioItem = this;
      previousRadioItem.classList.toggle("radio-item_checked");
    }
  };
}

const radioHandler = createRadioHandler();

const radioItems = document.querySelectorAll(".radio-item");
for (radioItem of radioItems) {
  radioItem.onchange = radioHandler;
}
