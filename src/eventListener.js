import { list } from "postcss";

function createEventController(listController, domController){
    const dialog = document.querySelector("#taskDialog"); 
    const projectDialog = document.querySelector('#projectDialog');
    function addModalListener(){
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

        //event listener for button to add projects
        const projectSubmit = document.querySelector('#projectInputButton');
        projectSubmit.addEventListener('click', ()=>{
            projectDialog.showModal();
            const projectCancel = document.querySelector('#projectCancel')
            projectCancel.addEventListener('click', ()=>{
                projectDialog.close()
            });
            const projectForm = document.querySelector('#projectInput');
            projectForm.addEventListener('click', (event)=>{event.stopPropagation()});
            projectDialog.addEventListener('click', ()=>{projectDialog.close();});
        }) 

    }

    function addSubmitListener(){
        const modalForm = document.querySelector("#taskInput");
        modalForm.addEventListener('submit', (event)=>{
            event.preventDefault(); 
            let taskName = document.querySelector("#taskName").value;
            let taskDescription = document.querySelector("#taskDescription").value; 
            let dueDate = document.querySelector("#taskDate").value; 
            //create task and insert into taskList object
            let task = listController.createTask(taskName, taskDescription, dueDate); 
            listController.addTask(task);

            domController.refreshList(listController.todo);
            event.target.reset();

            dialog.close();
        })
    }

    function addClearListener(){
        const clearButton = document.querySelector('#removeTaskButton');
        clearButton.addEventListener('click', ()=>{
            listController.clearCompleted();
            domController.refreshList(listController.todo);
        })
    }

    function addFilterViewListener(){
        const header = document.querySelector('#header');
        const inboxButton = document.querySelector('#inbox');
        inboxButton.addEventListener('click', ()=>{
            domController.updateState(0);
            header.innerText = 'inbox';
            domController.refreshList(listController.todo)
        })
        const todayButton = document.querySelector('#today');
        todayButton.addEventListener('click', ()=>{
            domController.updateState(1);
            header.innerText = 'today';
            domController.refreshList(listController.todo)
        })
        const upcomingButton = document.querySelector('#upcoming');
        upcomingButton.addEventListener('click', ()=>{
            domController.updateState(2);
            header.innerText = 'upcoming';
            domController.refreshList(listController.todo)
        })
    }

    return {addModalListener, addSubmitListener, addClearListener, addFilterViewListener};
}

export {createEventController}
