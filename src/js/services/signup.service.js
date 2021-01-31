import axios from '../plugins/axios';

/**
 * Funxtion login. Make login request to API
 * @param {String} email
 * @param {String} password
 */
export default async function signup(registrationData) {
  try {
    const response = await axios.post( '/auth/signup', JSON.stringify(registrationData));
    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}
