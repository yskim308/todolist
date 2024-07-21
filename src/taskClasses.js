function createListController(){
    function createTask(name, description, dueDate){
        let finished = false;
        return {name: name, description: description, dueDate: dueDate, finished};
    }

    let todo = JSON.parse(localStorage.getItem('todo'));

    function updateLocalStorage(){
        let todoJSON = JSON.stringify(todo); 
        localStorage.setItem('todo', todoJSON);
    }

    function addTask(object){
        let length = todo.length;
        for (let i = 0; i < length; i ++){
            if (todo[i].name === object.name){
                alert("Task of this name already exists!"); 
                return;
            }
        }
        todo.push(object);
        updateLocalStorage();
    } 
    
    function removeTask(object){
        let length = todo.length;
        if (!length) {
            console.log(object + " cannot be removed, list is empty!");
            return;
        }
        for (let i = 0; i < length; i++){
            if (todo[i].name === object.name){
                todo.splice(i, 1);
                return;
            }
        }
    }

    function clearCompleted(){
        let length = todo.length; 
        for (let i = length -1; i >= 0; i--){
            if (todo[i].finished){
                todo.splice(i, 1);
            }
        }
        updateLocalStorage();
    }

    return {todo, addTask, removeTask, clearCompleted, createTask};
}

export {createListController};
