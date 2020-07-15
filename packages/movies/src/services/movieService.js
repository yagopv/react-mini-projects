import axios from 'axios';

const BASE_URL = 'https://www.omdbapi.com?apikey=6e1671bc';

export function getMoviesByTitle(title, type) {
  return axios.get(`${BASE_URL}&s=${title}&type=${type}`);
}
