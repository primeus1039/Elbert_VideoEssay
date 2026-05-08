class Datamanager {
    constructor() {
        this.key = "comment"
        this.cache = []
        //fetch local storage
        const rawLocalStorage = localStorage.getItem(this.key);
        if (rawLocalStorage != undefined || rawLocalStorage != null){
            //save it internally in the class
            // this.cache = JSON.parse(rawLocalStorage);
        }
    }
    insertCommentAndSave(name, message){
        // get new comment
        const newComment = {name: name, message: message}
        // save to cache
        this.cache.push(newComment);
        // save to local storage
        localStorage.setItem(this.key, JSON.stringify(this.cache));
    }
    getAllComments(){
        // return current cache
        return this.cache
    };
}