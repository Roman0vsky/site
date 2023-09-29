const contactsButtones = document.querySelectorAll(".contacts__button");
const modalFirst = document.querySelector(".modal_first");
const modalSecond = document.querySelector(".modal_second");
for (contactsButton of contactsButtones) {
  contactsButton.onclick = function () {
    menu.classList.remove("menu_show");
    modalFirst.classList.remove("modal_hidden");
  };
}

const closeModalButtones = document.querySelectorAll(".modal__close-button");
const modalTextFieldes = document.querySelectorAll(".modal__text-field");
const modalFileInput = document.querySelector(".modal__file-input");
const modalFileInputWarning = document.querySelector(
  ".modal__file-input-warning"
);

for (closeModalButton of closeModalButtones) {
  closeModalButton.onclick = function () {
    modalFirst.classList.add("modal_hidden");
    modalSecond.classList.add("modal_hidden");
    for (modalTextField of modalTextFieldes) {
      modalTextField.value = "";
    }
    for (modalTextField of modalTextFieldes) {
      modalTextField.classList.remove("modal__text-field_error");
    }
    modalFileInput.value = "";
    modalFileInput.setAttribute("data-before", "Приложить файлы");
    modalFileInputWarning.classList.add("modal__file-input-warning_hidden");
    modalFileInput.style.right = "32px";
  };
}

const modalFirstButton = document.querySelector(".modal_first .modal__button");
modalFirstButton.onclick = function () {
  let counter = 0;
  for (modalTextField of modalTextFieldes) {
    if (modalTextField.value === "") {
      modalTextField.classList.add("modal__text-field_error");
    } else {
      modalTextField.classList.remove("modal__text-field_error");
      counter++;
    }
  }
  if (modalFileInput.value == "") {
    counter--;
    modalFileInputWarning.classList.remove("modal__file-input-warning_hidden");
    modalFileInput.style.right = "76px";
  }
  if (counter === modalTextFieldes.length) {
    modalFirst.classList.add("modal_hidden");
    modalSecond.classList.remove("modal_hidden");
  }
};

const modalSecondButton = document.querySelector(
  ".modal_second .modal__button"
);
modalSecondButton.onclick = function () {
  modalSecond.classList.add("modal_hidden");
  modalFirst.classList.add("modal_hidden");

  for (modalTextField of modalTextFieldes) {
    modalTextField.value = "";
  }
  modalFileInput.value = "";
  modalFileInput.setAttribute("data-before", "Приложить файлы");
};

modalFileInput.onchange = validateFileType;

function validateFileType() {
  const file = modalFileInput.files[0];
  const allowedTypes = ["image/jpg", "image/png"];
  
  if (!allowedTypes.includes(file.type)) {
    alert("Поддерживается только PNG и JPG");
    modalFileInput.value = "";
    modalFileInput.setAttribute("data-before", "Приложить файлы");
  } else if (file.size / 1024 >= 4096) {
    alert("Размер файла слишком большой.");
    modalFileInput.value = "";
    modalFileInput.setAttribute("data-before", "Приложить файлы");
  } else {
    modalFileInput.setAttribute("data-before", file.name);
    modalFileInputWarning.classList.add("modal__file-input-warning_hidden");
    modalFileInput.style.right = "32px";
  }
}
