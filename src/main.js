import './style.css';

//event listeners for modal and modal input 
const inputButton = document.querySelector("#taskInputButton");
inputButton.addEventListener('click', ()=>{
    const textArea = document.querySelector("#taskDescription");
    textArea.addEventListener("keyup", ()=>{
        textArea.style.height = "10px";
        textArea.style.height = textArea.scrollHeight + 'px';
    })
    const dialog = document.querySelector("#taskDialog"); 
    dialog.showModal(); 
})
