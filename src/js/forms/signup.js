import { SignUI } from '../config/ui.config';
import { validForm } from '../helpers/validate';
import { notify } from '../views/notifications'; 
import { addAutocomplite, removeInputError, showInputError } from '../views/form';
import signup from '../services/signup.service';
import { getCountries, getCities } from '../services/autocomplite.service';

const { form, gender: inputGender, inputs:inputsObj} = SignUI;

const inputs = Object.values(inputsObj);

inputs.forEach(element => element.addEventListener('focus', () => removeInputError(element)));

export async function initAutocomplite(){
  const country = document.getElementById('country');
  const city = document.getElementById('city');

  const countriesList = await getCountries();
  addAutocomplite('countriesList', countriesList);

  country.addEventListener('change', async (e) => {
    const countryId = countriesList[country.value];
    if( countryId === undefined) {
      showInputError(country);
      city.setAttribute('disabled', '');
      return;
    }
    city.removeAttribute('disabled');
    const cities = await getCities(countryId);
    addAutocomplite('citiesList', cities);
  });
}

export async function onSubmit() {
    inputs.forEach(element => removeInputError(element));
    const isValidForm = validForm(inputs);
    if (!isValidForm) return;
    inputs.forEach( (input) => removeInputError(input));

    // Preparing data for posting
    const inputsValues = getInputsValues(inputsObj);
    const registrationData = createSignupObject(inputsValues);
    console.log(registrationData);
    try {
      const result = await signup(registrationData);
      console.log(result.error)
      if(result.error) {
        notify({ message: result.message, className: 'alert-danger' });
        return;
      }
      form.reset();
      notify({ message: result.message, className: 'alert-success' });
    } catch (error) {
      notify({ message: 'Signup failed', className: 'alert-danger' });
    }
  }

  function getInputsValues(
    {inputEmail, inputPassword, inputNickname, inputFirstName, inputLastName, inputPhone, inputCountry, inputCity, inputBirthday} = {}
    ){
    const gender = Array.from(inputGender).find(input => input.checked);
    const date = new Date(inputBirthday.value); 
    return {
      email: inputEmail.value, 
      password: inputPassword.value,
      nickname: inputNickname.value, 
      first_name:inputFirstName.value, 
      last_name: inputLastName.value, 
      phone:inputPhone.value,
      country: inputCountry.value, 
      city: inputCity.value, 
      gender_orientation: gender.value, 
      date,
    };
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

  function createSignupObject({email, password, nickname, first_name, last_name, phone, gender_orientation, city, country, date} = {}) { 
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