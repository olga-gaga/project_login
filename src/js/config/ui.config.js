const LogUI = {
  form: document.forms['loginForm'],
  inputEmail: document.querySelector('#login input.email'),
  inputPassword: document.querySelector('#login input.password'),
};

const SignUI = {
  form: document.forms['signForm'],
  inputFirstName: document.getElementById('first_name'),
  inputLastName: document.getElementById('last_name'),
  inputNickname: document.getElementById('nickname'),
  inputEmail:document.querySelector('#signup input.email'),
  inputPhone: document.getElementById('phone'),
  inputBirthday: document.getElementById('birthday'),
  inputCity: document.getElementById('city'),
  inputCountry: document.getElementById('country'),
  inputPassword: document.querySelector('#signup input.password'),
  inputGender:document.querySelectorAll('#signup .form-check-input'),
}

console.log(SignUI);
export { LogUI, SignUI };
