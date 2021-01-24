import { SignUI } from '../config/ui.config';
import { validate, validForm } from '../helpers/validate';
import { notify } from '../views/notifications'; 
import { showInputError, removeInputError } from '../views/form';
import signup from '../services/signup.service';
import { getNews } from '../services/news.service';

const { form, inputEmail, inputPassword, inputFirstName, inputLastName, inputPhone, inputNickname, inputBirthday, inputGender, inputCity, inputCountry} = SignUI;

const inputs = [inputFirstName, inputLastName, inputNickname, inputEmail,  inputPhone,  inputBirthday, inputCountry, inputCity, inputPassword];
console.log(inputs);


inputs.forEach(el => el.addEventListener('focus', () => removeInputError(el)));

export async function onSubmit() {
    notify({ msg: 'Ququ', className: 'alert-success' });
    const isValidForm = validForm(inputs);
    if (!isValidForm) return;
  
    const gender = Array.from(inputGender).find(input => input.checked === true);
    const date = new Date(inputBirthday.value);
    const registrationData = createSignupObject(
      inputEmail.value, inputPassword.value, inputNickname.value, 
      inputFirstName.value, inputLastName.value, inputPhone.value, 
      gender.value, inputCity.value, inputCountry.value,  date);
    console.log(registrationData);

    
    try {
      await signup(registrationData);
      form.reset();
      notify({ msg: 'Signup success', className: 'alert-success' });
    } catch (err) {
      notify({ msg: 'Signup success', className: 'alert-danger' });
    }


  }

  /**
   * 
   * @param {string} email 
   * @param {string} password 
   * @param {string} nickname 
   * @param {string} first_name 
   * @param {string} last_name 
   * @param {string} phone - string of numbers
   * @param {string} gender_orientation - "male" or "female"
   * @param {string} city
   * @param {string} country
   * @param {object} date - Date.prototype
   */

  function createSignupObject(email, password, nickname, first_name, last_name, phone, gender_orientation, city, country, date) {
      return {
        email,
        password,
        nickname,
        first_name,
        last_name,
        phone,
        gender_orientation,
        city,
        country,
        date_of_birth_day: date.getDate(),
        date_of_birth_month: date.getMonth() + 1,
        date_of_birth_year: date.getFullYear(),
      };
  }



  /*
  {
        email: "denis.m.pcspace@gmail.com",
        password: "dmgame12345",
        nickname: "dmgame",
        first_name: "Denis",
        last_name: "Mescheryakov",
        phone: "0631234567",
        gender_orientation: "male", // or "female"
        city: "Kharkiv",
        country: "Ukrane",
        date_of_birth_day: 01,
        date_of_birth_month: 03,
        date_of_birth_year: 1989,
    }
      */