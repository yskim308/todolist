function task(name, description, dueDate){
    finished = false
    return {name: name, description: description, dueDate: dueDate, finished};
}

function taskList(){
    let todo = [];
    function addTask(object){
        let length = todo.length;
        for (let i = 0; i < length; i ++){
            if (todo[i].name === object.name){
                alert("Task of this name already exists!"); 
                return;
            }
        }
        todo.push(object);
        return;
    } 
    
    function removeTask(object){
        let length = todo.length;
        if (length) {
            console.log(object + " cannot be removed, list is empty!");
            return 
        }
        todo.length
    }

    return {todo, addTask, removeTask}
}

export {task, taskList};
