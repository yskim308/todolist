function createListController(){
    function createTask(name, description, dueDate){
        let finished = false;
        const dueDateObject = null;
        if (dueDate){
            dueDateObject = new Date(dueDate);
        }
        return {name: name, description: description, dueDate: dueDate, finished, dueDateObject};
    }

    let todo = JSON.parse(localStorage.getItem('todo'));

    function updateLocalStorage(){
        let todoJSON = JSON.stringify(todo); 
        localStorage.setItem('todo', todoJSON);
    }

    function addTask(object){
        todo.push(object);
        updateLocalStorage();
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

    return {todo, addTask, clearCompleted, createTask};
}

export {createListController};
