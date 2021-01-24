import axios from '../plugins/axios';

export async function getCountries() {
  try {
    const response = await axios.get('/location/get-countries');
    const newResponse = changeObject(response);
    return newResponse;
  } catch (err) {
    console.log(err);
    return Promise.reject(err);
  }
}

export async function getCities(idCountry){
    try {
        const response = await axios.get(`location/get-cities/${idCountry}`);
        const newResponse = changeObject(response);
    return newResponse;
      } catch (err) {
        console.log(err);
        return Promise.reject(err);
      }
}

function changeObject(object) {
    return Object.entries(object).reduce( (acc, [key, value]) => {
        acc[value] = key; 
        return acc;
    }, {});
}