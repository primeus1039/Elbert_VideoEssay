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
  saveToLocalStorage() {
    localStorage.setItem(this.key, JSON.stringify(this.cache));
  }

  // todo !!! CRUD - create, read, update, delete
  createTodoItem(itemName) {
    // save {title, checkedBoolean}
      //manual checks for null,undefined, empty string and empty spaces
    if (itemName != null && itemName != undefined && itemName != '' &&
      itemName.trim().length > 0) {
      const objectState = {item: itemName, state: false, isEditing: false};
      // save the object to the cache
      this.cache.push(objectState);
      // then save the cache to localStorage
      this.saveToLocalStorage()
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
    this.saveToLocalStorage()
  }
  deleteAll (){
    this.cache = []
    localStorage.removeItem('listKey')
  }
  updateItem(index, newItem) {
    if (this.cache[index] !== undefined && this.cache[index] !== null &&
      this.cache[index] !== "") {
      // replace newitem at index
        //using Spread Operator
      this.cache[index] = {...this.cache[index], item: newItem};
      this.saveToLocalStorage()
    } else {console.error("Invalid Item")
    }
  }
  toggleState(index, key) {
    const currentItem = this.cache[index];
      //checks if currentItem has the property name in key
    if (currentItem && currentItem.hasOwnProperty(key)) {
      //flips the value
      currentItem[key] = !currentItem[key];
    this.saveToLocalStorage()
    } else {console.log(`property ${key} not found on item at index ${index}`)}
  }
}

/*

const datamanger = new Datamanager(); // loads from local storage

/ render the list
renderList(datamanager.getList())

datamanger.saveOneItem()

*/
