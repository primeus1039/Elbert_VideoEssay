function saveComments (comments) {
    // stringify the comments for saving
    const savedComment = JSON.stringify(comments);
    // saves them to local storage
    localStorage.setItem(dataKey, savedComment)
};
function loadComments () {
    //get data using data key
    const readData = localStorage.getItem(dataKey);
    //checks for null/undefined values in dataKey (catches initial startup error)
    if (readData != undefined || readData != null) {
        // parse the data
        const parsedData = JSON.parse(readData);
        //return the parsed data
        return parsedData
    }
    else {
        return []
    }
};