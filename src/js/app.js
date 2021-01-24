import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import onSubmitLogin from './forms/login';
import onSubmitSignup from './forms/signup';
import {LogUI, SignUI} from './config/ui.config';

const { form: formLogin } = LogUI;
const { form: formSignup } = SignUI;

formLogin.addEventListener('submit', e => {
  e.preventDefault();
  onSubmitLogin();
});

formSignup.addEventListener('submit', e => {
  e.preventDefault();
  onSubmitSignup();
});

/*
email: denis.m.pcspace@gmail.com
password: dmgame12345
*/