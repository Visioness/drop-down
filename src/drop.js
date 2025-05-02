const dropDownContent = document.querySelector('#dropdown-list-1');
const dropDownButton = document.querySelector('#toggle-dropdown');

const dropContent2 = document.querySelector('#dropdown-list-2');
const dropDownButton2 = document.querySelector('#toggle-dropdown-2');

function toggleVisibility(element) {
  element.classList.toggle('visible');
}

function createDropDownListeners(dropButton, dropDownList) {
  dropButton.addEventListener('click', () => {
    toggleVisibility(dropDownList);
  });
}

createDropDownListeners(dropDownButton, dropDownContent);
createDropDownListeners(dropDownButton2, dropContent2);
