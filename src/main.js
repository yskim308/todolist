import './style.css';

//event listeners for modal and modal input 
const inputButton = document.querySelector("#taskInputButton");
inputButton.addEventListener('click', ()=>{
    const dialog = document.querySelector("#taskDialog"); 
    dialog.showModal(); 
})
