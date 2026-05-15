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
    if (itemName != null && itemName != undefined && itemName != '' &&
      itemName != itemName.trim().length > 0) {
      const objectState = {item: itemName, state: false};
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
    this.cache = ''
    localStorage.removeItem('listKey')

  }
  updateItem(index, newItem) {
    if (this.cache[index] !== undefined && this.cache[index] !== null &&
      this.cache[index] !== "") {
      const currentState = this.cache[index].state
      // replace newitem at index
      if (newItem){
        console.log(newItem)
        this.cache[index] = {item: newItem, state: currentState};
      }
    } else {console.error("Invalid Item")
    }
    this.saveToLocalStorage()
  }
  toggleState(index) {
    const currentItem = this.cache[index];
    if (currentItem) {
      currentItem.state = !currentItem.state;
    this.saveToLocalStorage()
  }
  }
}

/*

const datamanger = new Datamanager(); // loads from local storage

/ render the list
renderList(datamanager.getList())

datamanger.saveOneItem()

*/
