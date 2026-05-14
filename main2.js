// main variables
const getListField = document.getElementById("listField");
const getAddButton = document.getElementById("addButton");
const getDeleteAllButton = document.getElementById("deleteAllButton");
const getListContainer = document.getElementById("listContainer");

// --- assist functions
//    --- render functions
function renderList(list) {
    getListContainer.innerHTML = ''
  // for all items in list, get the title and checked/not
  for (let index = 0; index < list.length; index++) {
    const listItems = list[index];
    console.log(listItems)
  // create a formatted string checkbox with the parameters
    const formattedString = `
    <div>
    <input type="checkbox" ${listItems.state ? 'checked' : ''} onchange="dataManager.toggleState(${index})">
    ${listItems.item} 
    <button onclick="onDeleteButtonClicked(${index})">Delete</button>
    </div>
    `
  // insert to html
    getListContainer.innerHTML += formattedString
  }
}
//    --- button functions
function onDeleteAllButtonClicked() {
  dataManager.deleteAll()
  console.log(dataManager.getAllItems())
  getListContainer.innerHTML = ''
}
function onDeleteButtonClicked(index){
  dataManager.deleteItem(index);
  renderList(dataManager.getAllItems())
}
function onAddButtonClicked() {
  // get the todo title
  const fieldValue = getListField.value
  console.log("does it work")
  // call datamanager.createTodoItem({todoTitle: "your mom", check: false})
  dataManager.createTodoItem(fieldValue)
  getListField.value = ''
  renderList(dataManager.getAllItems())
}
// --- execution
//adds a new instance of Datamanager
const dataManager = new Datamanager();
renderList(dataManager.getAllItems())

// --- attach listeners
getAddButton.addEventListener("click", onAddButtonClicked);
getDeleteAllButton.addEventListener("click", onDeleteAllButtonClicked);

// const testArray = [1, 2, 3];
// console.log("originally: ", testArray);

// for (let index = 0; index < testArray.length; index++) {
//   document.body.innerHTML += `
//     <input type="checkbox" onclick="console.log('this is checked', this.checked)"> 
//     `;
// }
