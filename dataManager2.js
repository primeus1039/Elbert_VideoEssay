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
  // removeListFromCache() {
  //   // sets cache value to an empty array
  //   // removes item from last added
  //   this.cache.pop();
  //   // returns the localstorage remove function
  //   localStorage.setItem(this.key, JSON.stringify(this.cache));
  // }

  // todo !!! CRUD - create, read, update, delete
  createTodoItem(object) {
    // save {title, checkedBoolean}
    if (object != null && object != undefined && object != '') {
      const objectState = {item: object, state: false};
      // save the object to the cache
      this.cache.push(objectState);
      // then save the cache to localStorage
      localStorage.setItem(this.key, JSON.stringify(this.cache));
    }
  }
  getAllItems() {
    // returns the cache as is
    return this.cache || []
  };
  deleteItem(index) {
    // delete the item at specified index in cache
    this.cache.splice(index, 1);
    // call save to local disc
    localStorage.setItem(this.key, JSON.stringify(this.cache));
  }
  updateItem(index, newItem) {
    // replace newitem at index
    this.cache[index] = {item: newItem, state: false};
    localStorage.setItem(this.key, JSON.stringify(this.cache));
  }
}

/*

const datamanger = new Datamanager(); // loads from local storage

/ render the list
renderList(datamanager.getList())

datamanger.saveOneItem()

*/
