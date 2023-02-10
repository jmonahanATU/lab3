var Todo = /** @class */ (function () {
    function Todo() {
        this.Tasks = [];
    }
    ;
    Todo.prototype.addTask = function (task) {
        this.Tasks.push(task);
        console.log("Task " + task + " add to the list");
        return this.Tasks.length;
    };
    Todo.prototype.listAllTasks = function () {
        // for(let i = 0; i < myArray.length; i++)
        // {
        //     console.log(myArray[i]);
        // }
        this.Tasks.forEach(function (item) {
            console.log(item);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var index = this.Tasks.indexOf(task);
        if (index > -1) {
            this.Tasks.splice(index, 1);
            console.log("Task " + task + " delete from the list");
        }
        else {
            console.log("Task " + task + " not found in the list");
        }
        return this.Tasks.length;
    };
    return Todo;
}());
var myTodo = new Todo();
myTodo.addTask("Eat");
myTodo.addTask("sleep");
myTodo.addTask("work");
myTodo.listAllTasks();
myTodo.deleteTask("Eat");
myTodo.listAllTasks();
