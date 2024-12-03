function createListController(){
    function createTask(name, description, dueDate, project){
        let finished = false;
        let dueDateObject;
        if (dueDate){
            dueDateObject = new Date(dueDate);
            dueDateObject.setHours(0, 0, 0, 0);
        }
        return {name, description, dueDate, finished, dueDateObject, project};
    }

    let todo = JSON.parse(localStorage.getItem('todo'));
    if (!todo){
        todo = [];
    }
    let todoLength = todo.length; 

    let projectList = JSON.parse(localStorage.getItem('projectList'));
    if (!projectList){
        projectList = [];
    }
    for (let i = 0; i < todoLength; i++){
        if (todo[i].dueDateObject){
            todo[i].dueDateObject = new Date(todo[i].dueDate);
        }
    }

    function sortByDate(){
        todo.sort((a,b) => a.dueDateObject - b.dueDateObject);
    }
    sortByDate(); //sort when instance is created 

    function updateLocalStorage(){
        let todoJSON = JSON.stringify(todo); 
        localStorage.setItem('todo', todoJSON);

        let projectJSON = JSON.stringify(projectList);
        localStorage.setItem('projectList', projectJSON);
    }


    function addTask(object){
        todo.push(object);
        sortByDate();
        updateLocalStorage();
    } 

    function updateDropdown(){
        const dropdown = document.querySelector("#projectDropdown");
        while (dropdown.firstChild){
            dropdown.removeChild(dropdown.lastChild);
        }
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.textContent = '--Inbox--';
        dropdown.appendChild(defaultOption);
        projectList.forEach((project)=>{
            const option = document.createElement('option');
            option.value = project; 
            option.textContent = project; 
            dropdown.appendChild(option);
        })
    }
    
    function addProject(project){
        projectList.push(project);
        updateLocalStorage();
        updateDropdown();
    }

    function removeProject(projectName){
        let index = projectList.indexOf(projectName);
        if (index !== -1){
            projectList.splice(index, 1);
        }
        const length = todo.length;
        for (let i = length -1; i >= 0; i--){
            console.log(todo[i]);
            if (todo[i].project === projectName && todo[i].project){
                console.log("splicing " + todo[i].project);
                todo.splice(i, 1);
            }
        }
        updateLocalStorage();
        updateDropdown();
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

    return {todo, projectList, addTask, addProject, clearCompleted, createTask, removeProject};
}

export {createListController};
