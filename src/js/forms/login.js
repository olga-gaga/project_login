import {LogUI} from '../config/ui.config';
import { validate, validForm } from '../helpers/validate';
import { notify } from '../views/notifications'; 
import { showInputError, removeInputError } from '../views/form';
import { login } from '../services/auth.service';
import { getNews } from '../services/news.service';

const { form, inputEmail, inputPassword } = LogUI;
const inputs = [inputEmail, inputPassword];

inputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)));

export default async function onSubmit() {
    const isValidForm = validForm(inputs);
  
    if (!isValidForm) return;
  
    try {
      await login(inputEmail.value, inputPassword.value);
      await getNews();
      form.reset();
      notify({ msg: 'Login success', className: 'alert-success' });
    } catch (err) {
      notify({ msg: 'Login faild', className: 'alert-danger' });
    }
  }