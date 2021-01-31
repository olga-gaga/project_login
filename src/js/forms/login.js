import { LogUI } from '../config/ui.config';
import { validForm } from '../helpers/validate';
import { notify } from '../views/notifications'; 
import { removeInputError, showInputError } from '../views/form';
import { login } from '../services/auth.service';
import { getNews } from '../services/news.service';

const { form, inputEmail, inputPassword } = LogUI;
const inputs = [inputEmail, inputPassword];

inputs.forEach(element => element.addEventListener('focus', () => removeInputError(element)));

export default async function onSubmit() {
    const isValidForm = validForm(inputs);
    if (!isValidForm) return;
    inputs.forEach( (input) => removeInputError(input));
    try {
      const result = await login(inputEmail.value, inputPassword.value);
      if(result.error) {
        onResultError(inputs);
        return;
      }
      form.reset();
      notify({ message: 'Login success', className: 'alert-success' });
      await getNews();
    } catch (error) {
      onResultError(inputs);
    }
  }

  function onResultError(inputs) {
    inputs.forEach((input) => showInputError(input));
    notify({ message: 'Login faild', className: 'alert-danger' });
  }