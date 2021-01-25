import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import onSubmitLogin from './forms/login';
import { initAutocomplite, onSubmit as onSubmitSignup } from './forms/signup';
import { LogUI, SignUI } from './config/ui.config';

document.addEventListener('DOMContentLoaded', async (e) => {

  // Form initialization
  const { form: formLogin } = LogUI;
  const { form: formSignup} = SignUI;
  
  initAutocomplite();

  // Events
  formLogin.addEventListener('submit', e => {
    e.preventDefault();
    onSubmitLogin();
  });
  
  formSignup.addEventListener('submit', e => {
    e.preventDefault();
    onSubmitSignup();
  });

})

/*
email: denis.m.pcspace@gmail.com
password: dmgame12345
*/