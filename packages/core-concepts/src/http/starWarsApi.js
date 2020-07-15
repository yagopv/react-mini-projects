import axios from "axios";

export async function getStarWarsPeople(url) {
  return axios.get(url);
}
