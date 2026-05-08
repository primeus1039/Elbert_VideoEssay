class Datamanager {
    constructor(){
        this.key = "listKey";
        this.cache = [];

        //get localstorage
        const rawData = localStorage.getItem(this.key)
        //parse storage
        if (rawData != undefined && rawData != null && rawData != "") {
            const parsedData = JSON.parse(rawData)
            //attach storage to cache
            this.cache = parsedData
        }
    }
    saveListToCache (listItem) {
        //updates cache with listItem
        this.cache.push(listItem)
        //updates entire cache to local storage
        localStorage.setItem(this.key, JSON.stringify(this.cache));
        return 
    };
    loadListFromCache() {
        return this.cache
    }
    removeListFromCache() {
        // sets cache value to an empty array
        
        // removes item from last added
        this.cache.pop()
        // returns the localstorage remove function
        localStorage.setItem(this.key, JSON.stringify(this.cache))
    }
}