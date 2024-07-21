import { createDOMController } from './DOMController.js';
import './style.css';
import {createListController} from './taskClasses.js';
import { createEventController} from './eventListener.js';


//create the listController and domController instances
let listController = createListController();
let domController = createDOMController();
domController.refreshList(listController.todo);

//pass in the list controller and dom controller instances to the event controller
let eventController = createEventController(listController, domController);
eventController.addModalListener();
eventController.addSubmitListener();
eventController.addClearListener();
eventController.addFilterViewListener();

