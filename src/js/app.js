import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.css';
import onSubmitLogin from './forms/login';
import { onSubmit as onSubmitSignup } from './forms/signup';
import { LogUI, SignUI } from './config/ui.config';
import { getCountries, getCities } from './services/autocomplite.service';
import { addAutocomplite } from './views/form';


document.addEventListener('DOMContentLoaded', async (e) => {
  const { form: formLogin } = LogUI;
  const { form: formSignup} = SignUI;
  const country = document.getElementById('country');
  const city = document.getElementById('city');

  const countriesList = await getCountries();
  addAutocomplite('countriesList', countriesList);
  /*signupTab.addEventListener('click', e => {
    addCountriesAutocomplite();
  });*/

  formLogin.addEventListener('submit', e => {
    e.preventDefault();
    onSubmitLogin();
  });
  
  formSignup.addEventListener('submit', e => {
    e.preventDefault();
    onSubmitSignup();
  });

  country.addEventListener('change', async (e) => {
    const countryId = countriesList[country.value];
    if( countryId !== -1) {
      city.removeAttribute('disabled');
      const cities = await getCities(countryId);
      addAutocomplite('citiesList', cities);
    }
    
  })
})





/*
email: denis.m.pcspace@gmail.com
password: dmgame12345
*/