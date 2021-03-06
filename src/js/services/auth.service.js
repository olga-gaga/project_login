import axios from '../plugins/axios';

/**
 * Funxtion login. Make login request to API
 * @param {String} email
 * @param {String} password
 */
export async function login(email, password) {
  try {
    const response = await axios.post( `/auth/login`, JSON.stringify({ email, password }));
    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}
