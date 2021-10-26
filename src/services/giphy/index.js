import Axios from "axios";

import { axiosInitialParams } from "../../utils";

/*
 * @Author: Chintan Sudani
 * @Description: This file includes axios
 * API services of Get GIFs page.
 */

const baseAPIUrl = process.env.REACT_APP_API_SERVER;
const axios = Axios.create({
  baseURL: `${baseAPIUrl}/gifs`,
  axiosInitialParams,
});

// returns Total list of Gifs based on limit
export const getListOfGifs = ({ api_key, limit }) =>
  axios.get(`/trending?api_key=${api_key}&limit=${limit}`);
