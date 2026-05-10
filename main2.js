// main variables
const getListField = document.getElementById("listField");
const getAddButton = document.getElementById("addButton");
const getDeleteButton = document.getElementById("deleteButton");
const getListContainer = document.getElementById("listContainer");

// let listStorage = [];

// assist functions
function renderList(list) {
  // for all items in list, get the title and checked/not
  // create a formatted string checkbox with the parameters
  // insert to html
}
function onDeleteButtonClicked() {}
function onAddButtonClicked() {
  // get the todo title
  // call datamanager.createTodoItem({todoTitle: "your mom", check: false})
}
// execution
console.log("Script starting"); // DEBUG
//adds a new instance of Datamanager
const dataManager = new Datamanager();
// attach listeners
getAddButton.addEventListener("click", onAddButtonClicked);
getDeleteButton.addEventListener("click", onDeleteButtonClicked);

const testArray = [1, 2, 3];
console.log("originally: ", testArray);

for (let index = 0; index < testArray.length; index++) {
  document.body.innerHTML += `
    <input type="checkbox" onclick="console.log('this is checked', this.checked)"> 
    `;
}
