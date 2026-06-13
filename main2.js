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
    let formattedString;
    console.log(listItems)
  // create a formatted string checkbox with the parameters
    //checks if edit field is true or false
    if (listItems.isEditing) {
      // listItems.isEditing == true
        formattedString = `
      <div class='todo-item'>
        <input type="text" id="edit-input-${index}" value="${listItems.item}">
        <button onclick="onUpdateButtonClicked(${index})">Update</button>
        <button onclick="onToggleEdit(${index})">Cancel</button>
      </div>
      `;
    } else {
      // listItems.isEditing == false
        formattedString = `
      <div class='todo-item'>
        <input type="checkbox" ${listItems.state ? 'checked' : ''} 
          onchange="await dataManager.toggleState(${index}, 'state')">
      ${listItems.item} 
      <button onclick="onToggleEdit(${index})">Update</button> 
      <button onclick="onDeleteButtonClicked(${index})">Delete</button>
      </div>
      `
    }
  // insert to html
    getListContainer.innerHTML += formattedString
  };
};
//    --- button functions
async function onUpdateButtonClicked(index) {
  const editInput = document.getElementById(`edit-input-${index}`);
  if (!editInput)
    return;

  const newItem = editInput.value;
  if (newItem.trim() != "") {
    await dataManager.updateItem(index, newItem);
    renderList(dataManager.getAllItems());
    getListField.value = "";
  } else {alert("Enter Valid Item")};
};
async function onDeleteAllButtonClicked() {
  await dataManager.deleteAll();
  console.log(dataManager.getAllItems());
  getListContainer.innerHTML = '';
};
async function onDeleteButtonClicked(index){
  await dataManager.deleteItem(index);
  renderList(dataManager.getAllItems());
};
async function onAddButtonClicked() {
  // get the todo title
  const fieldValue = getListField.value;
  // call datamanager.createTodoItem({todoTitle: "your mom", check: false})
  await dataManager.createTodoItem(fieldValue);
  getListField.value = '';
  renderList(dataManager.getAllItems());
};
function onToggleEdit(index) {
  dataManager.toggleState(index, 'isEditing');
  renderList(dataManager.getAllItems());
};
async function initializeProgram() {
  await dataManager.init();
  renderList(dataManager.getAllItems());
}
// --- execution
//adds a new instance of Datamanager
const dataManager = new DataManager();
//need to initalize the program immediately as it needs to wait for data
initializeProgram();

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
