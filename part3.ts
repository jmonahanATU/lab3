interface TodoInterface {
    Tasks:Array<String>;
    addTask(task:String):Number;
    listAllTasks():void;
    deleteTask(task:string):number;
}

class Todo implements TodoInterface
{

    constructor(){};

    Tasks:Array<string> = [];

    addTask(task:string):Number
    {
        this.Tasks.push(task);
        console.log("Task " + task + " add to the list");
        return this.Tasks.length;
    }


 listAllTasks():void
 {
    // for(let i = 0; i < myArray.length; i++)
    // {
    //     console.log(myArray[i]);
    // }
    this.Tasks.forEach((item)=>
    {
        console.log(item)
    })
}

 deleteTask(task:string):number 
 {
    let index:number = this.Tasks.indexOf(task);
    if(index > -1)
    {
        this.Tasks.splice(index,1);
        console.log("Task " + task + " delete from the list");
    }
    else
    {
        console.log("Task " + task + " not found in the list");
    }
    return this.Tasks.length;
 }
}
 let myTodo = new Todo();
 myTodo.addTask("Eat");
 myTodo.addTask("sleep");
 myTodo.addTask("work");
 myTodo.listAllTasks();
 myTodo.deleteTask("Eat");
 myTodo.listAllTasks();
 
