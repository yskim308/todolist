import { createDOMController } from './DOMController.js';
import './style.css';
import {createTask, createListController} from './taskClasses.js';

const dialog = document.querySelector("#taskDialog"); 
//event listener for button to add tasks
const inputButton = document.querySelector("#taskInputButton");
inputButton.addEventListener('click', ()=>{
    //show modal 
    dialog.showModal(); 
    //close modal when clicking on cancel or clicking outside of form
    const cancel = document.querySelector("#taskCancel");
    cancel.addEventListener("click", ()=>{
        dialog.close();
    })
    const formContainer = document.querySelector("#formContainer");
    formContainer.addEventListener('click', (event)=>{event.stopPropagation()}) 
    dialog.addEventListener('click', ()=>{dialog.close();})
});

//dynmacailly resize description box 
const textArea = document.querySelector("#taskDescription");
textArea.addEventListener("keyup", ()=>{
    textArea.style.height = "10px";
    textArea.style.height = textArea.scrollHeight + 'px';
});


//logic for adding tasks to taskList object
//event listener for modal form submission 
let listController = createListController();
let domController = createDOMController(listController.todo);
const modalForm = document.querySelector("#taskInput");
modalForm.addEventListener('submit', (event)=>{
    event.preventDefault(); 
    let taskName = document.querySelector("#taskName").value;
    let taskDescription = document.querySelector("#taskDescription").value; 
    let dueDate = document.querySelector("#taskDate").value; 
    //create task and insert into taskList object
    let task = createTask(taskName, taskDescription, dueDate); 
    listController.addTask(task);

    event.target.reset();
    domController.refreshList();
    dialog.close();
})

const clearButton = document.querySelector('#removeTaskButton');
clearButton.addEventListener('click', ()=>{
    listController.clearCompleted();
    console.log(listController.todo);
    domController.refreshList();
})

//default task just to check styling quickly 
let defaultTask = createTask('Get Groceries', 'get eggs, get soap, get ham, buy 30 frying pans', '2024-07-03');
listController.addTask(defaultTask);
domController.refreshList();

let a = createTask('solve world hunger', 'do some magic to solve wold hunger', '2025-01-25');
listController.addTask(a);
domController.refreshList();
