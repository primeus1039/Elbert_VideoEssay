// main variables
const getListField = document.getElementById("listField");
const getAddButton = document.getElementById("addButton");
const getDeleteButton = document.getElementById("deleteButton");
const getListContainer = document.getElementById("listContainer");

// let listStorage = [];

// assist functions
function renderList(list) {
  // for all items in list, get the title and checked/not
  for (let index = 0; index < list.length; index++) {
    const listItems = list[index];
    console.log(listItems)
  // create a formatted string checkbox with the parameters
    const formattedString = `
    <div><input type="checkbox" onclick="console.log(this.checked)">${listItems.item} <button>Delete</button></div>
    `
  // insert to html
    getListContainer.innerHTML += formattedString
  }
}
function onDeleteButtonClicked() {return dataManager.deleteItem(0)}
function onAddButtonClicked() {
  getListContainer.innerHTML = ''
  // get the todo title
  const fieldValue = getListField.value
  console.log("does it work")
  // call datamanager.createTodoItem({todoTitle: "your mom", check: false})
  dataManager.createTodoItem(fieldValue)
  getListField.value = ''
  renderList(dataManager.getAllItems())
}
// execution
//adds a new instance of Datamanager
const dataManager = new Datamanager();

renderList(dataManager.getAllItems())

// attach listeners
getAddButton.addEventListener("click", onAddButtonClicked);
getDeleteButton.addEventListener("click", onDeleteButtonClicked);

// const testArray = [1, 2, 3];
// console.log("originally: ", testArray);

// for (let index = 0; index < testArray.length; index++) {
//   document.body.innerHTML += `
//     <input type="checkbox" onclick="console.log('this is checked', this.checked)"> 
//     `;
// }
