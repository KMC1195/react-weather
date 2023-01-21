import axios from "axios";

const client = axios.create({
  baseURL:
    "http://api.weatherapi.com/v1/current.json?key=KEY&q=",
});

export default client;
