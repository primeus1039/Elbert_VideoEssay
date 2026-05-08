// main variables
const getListField = document.getElementById("listField");
const getAddButton = document.getElementById("addButton");
const getDeleteButton = document.getElementById("deleteButton");
const getListContainer = document.getElementById("listContainer");
let listStorage = [];
// assist functions
function renderList(list) {
        //assigning the creation of a checkbox element
        const checkboxElement = `<input type="checkbox"/>`
        return  `<div>${checkboxElement}${list}</div>`;
}
function onDeleteButtonClicked(){
    dataManager.removeListFromCache()
    console.log(dataManager.cache)
    getListContainer.innerHTML = dataManager.cache.join("")
}
function onAddButtonClicked() {
    // loads cache into list storage
    listStorage = dataManager.loadListFromCache()
    // saves the getListField value to cache
    dataManager.saveListToCache(renderList(getListField.value))
    // sets list container to an empty string
    getListContainer.innerHTML = ""
    for (let index = 0; index < listStorage.length; index++) {
        // each listItem in cache
        const eachList = listStorage[index];
        // renders each list item
        getListContainer.innerHTML += eachList        
    }
}
// execution
    //adds a new instance of Datamanager
const dataManager = new Datamanager();
    //updates innerhtml on load 
        //faced an error where inbetween each item had a comma, issue was caused by directly assigning an array into the html
getListContainer.innerHTML = dataManager.cache.join("")

getAddButton.addEventListener('click', onAddButtonClicked)
getDeleteButton.addEventListener('click', onDeleteButtonClicked)