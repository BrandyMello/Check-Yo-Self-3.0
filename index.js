var titleInput = document.querySelector('.title-input');
var itemInput = document.querySelector('.item-input');
var itemBtn = document.querySelector('.add-item-btn');

itemBtn.addEventListener('click', addItemToList);
titleInput.addEventListener('keyup', addListTitle);

function addItemToList(e) {
    e.preventDefault();
    var headerChecklist = document.querySelector('.header_checklist');
    var checklistItem = `
      <li class="list-item"><input type="checkbox" class="check-off">${itemInput.value}</li>`
    headerChecklist.insertAdjacentHTML('beforeend', checklistItem);
    itemInput.value = '';
}

function addListTitle() {
    let putTitle = document.querySelector('.header_checklist-title');
    putTitle.innerHTML = titleInput.value;
}
  