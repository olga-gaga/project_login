import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';

import { login } from './services/auth.service';
import UI from './config/ui.config';
import { validate } from './helpers/validate';
import { showInputError, removeInputError } from './views/form';
import { notify } from './views/notifications';
import {getNews} from './services/news.service'
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
        await getNews();
        notify({message: 'Login success', className: "alert-success", timeout: 1000 });
        form.reset();
        //show success notify
    } catch (error) {
        //show error notify
        notify({message: 'Login faild', className: "alert-danger", timeout: 1000 });
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

/*
email: denis.m.pcspace@gmail.com
password: dmgame12345
*/
