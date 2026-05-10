class Datamanager {
  constructor() {
    this.key = "listKey";
    this.cache = [];

    //get localstorage
    const rawData = localStorage.getItem(this.key);
    //parse storage
    if (rawData != undefined && rawData != null && rawData != "") {
      const parsedData = JSON.parse(rawData);
      //attach storage to cache
      this.cache = parsedData;
    }
  }
  saveListToCache(listItem) {
    //updates cache with listItem
    this.cache.push(listItem);
    //updates entire cache to local storage
    localStorage.setItem(this.key, JSON.stringify(this.cache));
    return;
  }
  loadListFromCache() {
    return this.cache;
  }
  removeListFromCache() {
    // sets cache value to an empty array

    // removes item from last added
    this.cache.pop();
    // returns the localstorage remove function
    localStorage.setItem(this.key, JSON.stringify(this.cache));
  }
  // todo !!! CRUD - create, read, update, delete
  createTodoItem(object) {
    // save the object to the cache
    // save {title, checkedBoolean}
    // then save the cache to localStorage
  }
  getAllItems() {
    // returns the cache as is
  }
  deleteItem(index) {
    // delete the item at specified index in cache
    // call save to local disc
  }
  updateItem(index, isCompleted) {
    // replace newitem at index
  }
}

/*

const datamanger = new Datamanager(); // loads from local storage

/ render the list
renderList(datamanager.getList())

datamanger.saveOneItem()

*/
