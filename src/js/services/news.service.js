import axios from '../plugins/axios';

export async function getNews() {
  try {
    const response = await axios.get('/news');
    return response;
  } catch (error) {
    console.log(error);
    return Promise.reject(error);
  }
}
