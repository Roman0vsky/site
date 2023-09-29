const checkboxItems = document.querySelectorAll(".checkbox-item");
for (checkboxItem of checkboxItems) {
  checkboxItem.onchange = function () {
    this.classList.toggle("checkbox-item_checked");
  };
}