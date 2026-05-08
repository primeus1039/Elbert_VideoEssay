//------------------ variables
const dataKey = "comments";
let commentStorage = [];
const commentContainer = document.getElementById("commentsContainer");
const getNameInput = document.getElementById("inputName");
const getCommentInput = document.getElementById("inputComment");
const getSubmitButton = document.getElementById("submitButton");
//------------------ functions
function insertComment (name, comment) {
    commentContainer.innerHTML += `
    <strong>${name}</strong>: ${comment} </br>
    `};
function onSubmitButtonClicked () {
    const name = getNameInput.value;
    const comment = getCommentInput.value;
    //saves the name and comment through Class function
    dataManager.insertCommentAndSave(name, comment);
    //updates the comments to innerHTML for display
    insertComment(name, comment);
    // resets the value of the input fields to an empty string
    getNameInput.value = "";
    getCommentInput.value = "";
};
//------------------ execution
const dataManager = new Datamanager()
getSubmitButton.addEventListener("click", onSubmitButtonClicked);
// updates comment storage with past comments using loadComments
commentStorage = dataManager.getAllComments()
//using for loop to print all the saved comments into innerHTML
for (let index = 0; index < commentStorage.length; index++) {
    const currentComment = commentStorage[index];
    insertComment(currentComment.name, currentComment.message)
}