import axios from "axios";

const DEVELOPMENT = 'http://localhost:8000/'; 
const PRODUCTION  = 'https://mkm-voter.onrender.com/';

let API_URL;
  if (process.env.NODE_ENV === 'production') {

        API_URL = PRODUCTION;

  } else {

        API_URL = DEVELOPMENT;
  }

export default axios.create({
    baseURL: API_URL,
});