import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import { login } from './services/auth.service';
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
async function onSubmit(){
    const isValidForm =  validateInputs(inputs);

    if (!isValidForm) return;

    try {
        await login(inputEmail.value, inputPassword.value);
        form.reset();
        //show success notify
    } catch (error) {
        //show error notify
        return Promise.reject(error);
    }
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