import './style.css';

//event listener for button to add tasks
const inputButton = document.querySelector("#taskInputButton");
inputButton.addEventListener('click', ()=>{
    //dynmacailly resize description box 
    const textArea = document.querySelector("#taskDescription");
    textArea.addEventListener("keyup", ()=>{
        textArea.style.height = "10px";
        textArea.style.height = textArea.scrollHeight + 'px';
    })
    //show modal 
    const dialog = document.querySelector("#taskDialog"); 
    dialog.showModal(); 
    //close modal when clicking on cancel or clicking outside of form
    const cancel = document.querySelector("#taskCancel");
    cancel.addEventListener("click", ()=>{
        dialog.close();
    })
    const formContainer = document.querySelector("#formContainer");
    formContainer.addEventListener('click', (event)=>{event.stopPropagation()}) 
    dialog.addEventListener('click', ()=>{dialog.close();})
})
//modal submit and cancel event listener
