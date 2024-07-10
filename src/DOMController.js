import './style.css';

function createDOMController(objectArray){
    function removeAll(){
        const listContainer = document.querySelector("#listContainer"); 
        while (listContainer.firstChild){
            listContainer.removeChild(listContainer.lastChild);
        }
    }

    function createCheck(){ 
        const checkBox = document.createElement('input'); 
        checkBox.type = 'checkbox'; 
        checkBox.id = 'taskFinish'; 
        checkBox.name = 'task'; 
        return checkBox; 
    } 

    
    function createHeader(taskName){
        const header = document.createElement('contaiener'); 
        header.innerText = taskName; 
        return header; 
    }

    function createDescription(taskDescription){
        const description = document.createElement('container');
        description.innerHTML = taskDescription;
        return description;

    }

    function createDate(dueDate){
        const taskDueDate = document.createElement('div');
        taskDueDate.innerHTML = dueDate; 
        return taskDueDate;
    }

    function displayTask(task){
        const taskContainer = document.createElement('div'); 
        taskContainer.classList.add('flex', 'p-3');
        const checkBox = createCheck();
        taskContainer.appendChild(checkBox);

        const contentContainer = document.createElement('container');    
        const taskHeader = createHeader(task.name);
        const taskDescription = createDescription(task.description);
        contentContainer.appendChild(taskHeader);
        contentContainer.appendChild(taskDescription);
        if (task.dueDate){
            const taskDueDate = createDate(task.dueDate);
            contentContainer.appendChild(taskDueDate); 
        }
        taskContainer.appendChild(contentContainer);

        document.querySelector("#listContainer").appendChild(taskContainer);
    }

    function refreshList(){ 
        removeAll(); 
        let length = objectArray.length
        for (let i = 0; i < length; i++){
            displayTask(objectArray[i]); 
        }
    }

    return {refreshList}
}

export {createDOMController}
