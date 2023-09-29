const firstListItem = document.querySelector(".list__item_first");
const secondListItem = document.querySelector(".list__item_second");
const thirdListItem = document.querySelector(".list__item_third");

const firstTestWrapper = document.querySelector(".tests__wrapper_first");
const secondTestWrapper = document.querySelector(".tests__wrapper_second");
const thirdTestWrapper = document.querySelector(".tests__wrapper_third");

firstListItem.onclick = function () {
  firstListItem.classList.add("list__item_active");
  secondListItem.classList.remove("list__item_active");
  thirdListItem.classList.remove("list__item_active");

  firstTestWrapper.classList.remove("tests__wrapper_hidden");
  secondTestWrapper.classList.add("tests__wrapper_hidden");
  thirdTestWrapper.classList.add("tests__wrapper_hidden");

  updateSecondListItem();
  updateThirdListItem();
};

secondListItem.onclick = function () {
  firstListItem.classList.remove("list__item_active");
  secondListItem.classList.add("list__item_active");
  thirdListItem.classList.remove("list__item_active");

  firstTestWrapper.classList.add("tests__wrapper_hidden");
  secondTestWrapper.classList.remove("tests__wrapper_hidden");
  thirdTestWrapper.classList.add("tests__wrapper_hidden");

  updateFirstListItem();
  updateThirdListItem();
};

thirdListItem.onclick = function () {
  firstListItem.classList.remove("list__item_active");
  secondListItem.classList.remove("list__item_active");
  thirdListItem.classList.add("list__item_active");

  firstTestWrapper.classList.add("tests__wrapper_hidden");
  secondTestWrapper.classList.add("tests__wrapper_hidden");
  thirdTestWrapper.classList.remove("tests__wrapper_hidden");

  updateFirstListItem();
  updateSecondListItem();
};

const firstButton = document.querySelector(
  ".tests__button.tests__button_first"
);
const secondButton = document.querySelector(
  ".tests__button.tests__button_second"
);
const secondBackButton = document.querySelector(
  ".tests__button-back.tests__button_second"
);
const thirdButton = document.querySelector(
  ".tests__button.tests__button_third"
);
const thirdBackButton = document.querySelector(
  ".tests__button-back.tests__button_third"
);

function updateFirstListItem() {
  const checkboxes = document.querySelectorAll(".checkbox-item_checked");
  firstListItem.children[1].innerText = "";
  for (checkbox of checkboxes) {
    if (firstListItem.children[1].innerText === "") {
      firstListItem.children[1].innerText += checkbox.children[2].innerText;
    } else {
      firstListItem.children[1].innerText += `, ${checkbox.children[2].innerText}`;
    }
  }
}

function updateSecondListItem() {
  const radio = document.querySelector(".radio-item_checked");
  secondListItem.children[1].innerText = radio
    ? radio.children[2].innerText
    : "";
}

function updateThirdListItem() {
  const input = document.querySelector(".tests__text-field");
  const select = document.querySelector(".select__title");
  thirdListItem.children[1].innerText = input ? input.value : "";
  thirdListItem.children[2].innerText = select ? select.innerText : "";
}

firstButton.onclick = function () {
  firstTestWrapper.classList.toggle("tests__wrapper_hidden");
  secondTestWrapper.classList.toggle("tests__wrapper_hidden");
  secondListItem.classList.remove("list__item_hidden");
  firstListItem.classList.remove("list__item_active");
  secondListItem.classList.add("list__item_active");

  if (document.documentElement.clientWidth > 800) {
    firstListItem.style.borderBottomRightRadius = "0";
    firstListItem.style.borderBottomLeftRadius = "0";
    secondListItem.style.borderTopRightRadius = "0";
    secondListItem.style.borderTopLeftRadius = "0";
  }

  updateFirstListItem();
};

secondBackButton.onclick = function () {
  secondTestWrapper.classList.toggle("tests__wrapper_hidden");
  firstTestWrapper.classList.toggle("tests__wrapper_hidden");
  secondListItem.classList.remove("list__item_active");
  firstListItem.classList.add("list__item_active");

  updateSecondListItem();
};

secondButton.onclick = function () {
  secondTestWrapper.classList.toggle("tests__wrapper_hidden");
  thirdTestWrapper.classList.toggle("tests__wrapper_hidden");
  thirdListItem.classList.remove("list__item_hidden");
  secondListItem.classList.remove("list__item_active");
  thirdListItem.classList.add("list__item_active");

  if (document.documentElement.clientWidth > 800) {
    secondListItem.style.borderRadius = "0";
  }

  updateSecondListItem();
};

thirdBackButton.onclick = function () {
  thirdTestWrapper.classList.toggle("tests__wrapper_hidden");
  secondTestWrapper.classList.toggle("tests__wrapper_hidden");
  thirdListItem.classList.remove("list__item_active");
  secondListItem.classList.add("list__item_active");

  updateThirdListItem();
};

thirdButton.onclick = function () {
  // thirdTestWrapper.classList.toggle("tests__wrapper_hidden");

  updateThirdListItem();
};
