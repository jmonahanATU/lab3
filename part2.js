var myArray = [];
function addTask(task) {
    myArray.push(task);
    console.log("Task " + task + " add to the list");
    return myArray.length;
}
function listAllTasks() {
    // for(let i = 0; i < myArray.length; i++)
    // {
    //     console.log(myArray[i]);
    // }
    myArray.forEach(function (item) {
        console.log(item);
    });
}
function deleteTask(task) {
    var index = myArray.indexOf(task);
    if (index > -1) {
        myArray.splice(index, 1);
        console.log("Task " + task + " delete from the list");
    }
    else {
        console.log("Task " + task + " not found in the list");
    }
    return task.length;
}
addTask("Eat Lunch");
addTask("Eat taytos");
listAllTasks();
deleteTask("Eat Lunch");
