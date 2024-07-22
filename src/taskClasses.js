function createListController(){
    function createTask(name, description, dueDate){
        let finished = false;
        let dueDateObject;
        if (dueDate){
            dueDateObject = new Date(dueDate);
            dueDateObject.setHours(0, 0, 0, 0);
        }
        return {name: name, description: description, dueDate: dueDate, finished, dueDateObject};
    }

    let todo = JSON.parse(localStorage.getItem('todo'));
    let todoLength = todo.length; 
    for (let i = 0; i < todoLength; i++){
        if (todo[i].dueDateObject){
            todo[i].dueDateObject = new Date(todo[i].dueDate);
        }
    }

    function updateLocalStorage(){
        let todoJSON = JSON.stringify(todo); 
        localStorage.setItem('todo', todoJSON);
    }

    function sortByDate(){
        todo.sort((a,b) => a.dueDateObject - b.dueDateObject);
    }

    function addTask(object){
        todo.push(object);
        sortByDate();
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
