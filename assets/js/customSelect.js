const select = document.querySelector(".select");
const selectTitle = select.querySelector(".select__title");
const selectSingle_content = select.querySelector(".select__content");
const selectSingle_labels = select.querySelectorAll(".select__label");

selectTitle.addEventListener("click", () => {
  if ("active" === select.getAttribute("data-state")) {
    select.setAttribute("data-state", "");
  } else {
    select.setAttribute("data-state", "active");
  }
  selectSingle_content.classList.toggle("select__content_hidden");
});

for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener("click", (e) => {
    selectTitle.textContent = e.target.textContent;
    select.setAttribute("data-state", "");
    selectSingle_content.classList.toggle("select__content_hidden");
  });
}
