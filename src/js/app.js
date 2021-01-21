import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import UI from './config/ui.config';
import { validate } from './helpers/validate';
import { showInputError, removeInputError } from './views/form';

const {form, inputEmail, inputPassword} = UI;
const inputs = [inputEmail, inputPassword];

//Events
form.addEventListener('submit', (e) => {
    e.preventDefault();
    onSubmit();
});

inputs.forEach(input => input.addEventListener('focus', () => {
    removeInputError(input);
}));

//Handlers
function onSubmit(){
    const isValidForm =  validateInputs(inputs);
    console.log(isValidForm)
}

function validateInputs(inputsArr){
   // console.log(inputsArr);
    return inputsArr.every(element => {
        const isVlidInput = validate(element);
        if(!isVlidInput) {
            showInputError(element);
            console.log(element);
        }
        
        return isVlidInput;
    });
}