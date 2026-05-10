// main variables
const getListField = document.getElementById("listField");
const getAddButton = document.getElementById("addButton");
const getDeleteButton = document.getElementById("deleteButton");
const getListContainer = document.getElementById("listContainer");
let listStorage = [];
// assist functions
function renderList(list, index) {
        //assigning the creation of a checkbox element
        const checkboxElement = `
        <input type="checkbox" onchange="syncUItoCache()" 
        onclick="this.checked ? this.setAttribute('checked', '') : this.removeAttribute('checked')"/>`
        return  `<div data-index="${index}">${checkboxElement}${list}</div>`;
}
//function added from opencode's advice
// function attachCheckboxListeners () {
//     getListContainer.addEventListener('change', function(event){
//         if (event.target.type === 'checkbox') {
//             const checkbox = event.target;
//             const parentDiv = checkbox.closest('div[data-index]');

//             if (checkbox.checked){
//                 //add checked attribute to checkbox html
//                 parentDiv.innerHTML = parentDiv.innerHTML.replace(
//                     '<input type="checkbox"/>',
//                     '<input type="checkbox" checked="checked"/>'
//                 );
//             } else {
//                 //remove checked attribute
//                 parentDiv.innerHTML = parentDiv.innerHTML.replace(
//                     'checked="checked"',
//                     ""
//                 );}
//             //get the index of the item
//             const index = parentDiv.getAttribute('data-index');
//             // update cache array
//             dataManager.cache[index] = parentDiv.outerHTML;
//             // save to localStorage
//             localStorage.setItem(dataManager.key, JSON.stringify(dataManager.cache))}
        
//     }
//     )
// }
function syncUItoCache() {
    const items = getListContainer.querySelectorAll('div[data-index]');
    const updatedCache = [];

    items.forEach(item => {
        updatedCache.push(item.outerHTML);
        //this grabs the html inside the div including the updated 'checked' attribute
    });
    dataManager.cache = updatedCache;
    localStorage.setItem(dataManager.key, JSON.stringify(dataManager.cache));
}       
function onDeleteButtonClicked(){
    dataManager.removeListFromCache()
    console.log(dataManager.cache)
    getListContainer.innerHTML = dataManager.cache.join("");
}
function onAddButtonClicked() {
    syncUItoCache()
    // loads cache into list storage
    // listStorage = dataManager.loadListFromCache()
    // saves the getListField value to cache
    dataManager.saveListToCache(renderList(getListField.value, dataManager.cache.length));
    // reloads cache into list storage
    // listStorage = dataManager.loadListFromCache()
    // sets list container to an empty string
    // getListContainer.innerHTML = ""
    getListContainer.innerHTML = dataManager.cache.join("")   
}
// execution
console.log("Script starting");  // DEBUG
    //adds a new instance of Datamanager
const dataManager = new Datamanager();
    //updates innerhtml on load 
        //faced an error where inbetween each item had a comma, issue was caused by directly assigning an array into the html
getListContainer.innerHTML = dataManager.cache.join("");
// attachCheckboxListeners();

getAddButton.addEventListener('click', onAddButtonClicked)
getDeleteButton.addEventListener('click', onDeleteButtonClicked)
window.syncUItoCache = syncUItoCache;