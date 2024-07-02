import './style.css';

function createDOMController(objectArray){
    function removeAll(){
        const listContainer = document.querySelector("#listContainer"); 
        while (listContainer.firstChild){
            listContainer.removeChild(listContainer.lastChild);
        }
    }

    function displayTask(task){
        const taskContainer = document.createElement('div'); 
        taskContainer.classList.add('flex', 'p-3');

        const checkBox = document.createElement('input'); 
        checkBox.type = 'checkbox'; 
        checkBox.id = 'taskFinish'; 
        checkBox.name = 'task'; 
        taskContainer.appendChild(checkBox);

        const taskContent = document.createElement('container');    
        const taskHeader = document.createElement('div');
        taskHeader.innerText = task.name; 
        const taskDescription = document.createElement('div'); 
        taskDescription.innerText = task.description; 
        taskContent.appendChild(taskHeader); 
        taskContent.appendChild(taskDescription);
        if (task.dueDate){
            const taskDueDate = document.createElement('div'); 
            taskDueDate.innerText = task.dueDate
            taskContent.appendChild(taskDueDate); 
        }
        taskContainer.appendChild(taskContent);

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
