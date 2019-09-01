var titleInput = document.querySelector('.title-input');
var itemInput = document.querySelector('.item-input');
var itemBtn = document.querySelector('.add-item-btn');
var submitListBtn = document.querySelector('.submit-list-btn');
var display = document.querySelector('.display');
var list = [];

itemBtn.addEventListener('click', addItemToList);
titleInput.addEventListener('keyup', addListTitle);
submitListBtn.addEventListener('click', submitList);

function addItemToList(e) {
    e.preventDefault();
    var headerChecklist = document.querySelector('.header_checklist');
    var checklistItem = `
      <li class="list-item"><img src="./images/delete-active.svg" class="delete-img" />${itemInput.value}</li>`
    headerChecklist.insertAdjacentHTML('beforeend', checklistItem);
    list.push(itemInput.value);
    itemInput.value = '';
    headerChecklist.addEventListener('click', deleteItem);
}

function addListTitle() {
    let putTitle = document.querySelector('.header_checklist-title');
    putTitle.innerHTML = titleInput.value;   
}

function clearFields() {
    let putTitle = document.querySelector('.header_checklist-title');
    let checklistItems = document.querySelectorAll('.list-item');
    putTitle.innerHTML = '';
    console.log(checklistItems);
}

function deleteItem(e) {
  e.target.closest('li').remove();
}

function submitList(e) {
    e.preventDefault();
    createList(titleInput.value);
    clearFields();
}

function createList(titleValue) {
  var listObj = new List({id: Date.now(), title: titleValue, list: list});
  titleInput.value = '';
  displayPost(listObj)
}

function displayPost(listObj) {
  let post = `<article class="post">
  <img src="./images/clothespin.png" alt="clothespin to hold up list" class="clothespin" >
  <h3>${listObj.title}</h3>
  <ul class="post-list">${createPostList(listObj.list)}</ul>
  </article>`
  display.insertAdjacentHTML('beforeend', post)
}

function createPostList(objList) {
console.log('line 55',list);
list = [];
console.log('line 56',objList);
  var postList = ''; 
  var displayList = objList.map(item => postList + `
  <li class="post-list-item" data-id=${Date.now()}><input type="checkbox">${item}</li>`);
  return displayList;
}
