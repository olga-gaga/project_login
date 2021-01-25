import { LogUI } from '../config/ui.config';
import { validForm } from '../helpers/validate';
import { notify } from '../views/notifications'; 
import { removeInputError } from '../views/form';
import { login } from '../services/auth.service';
import { getNews } from '../services/news.service';

const { form, inputEmail, inputPassword } = LogUI;
const inputs = [inputEmail, inputPassword];

inputs.forEach(element => element.addEventListener('focus', () => removeInputError(element)));

export default async function onSubmit() {
    const isValidForm = validForm(inputs);
  
    if (!isValidForm) return;
  
    try {
      await login(inputEmail.value, inputPassword.value);
      await getNews();
      form.reset();
      notify({ message: 'Login success', className: 'alert-success' });
    } catch (error) {
      notify({ message: 'Login faild', className: 'alert-danger' });
    }
  }