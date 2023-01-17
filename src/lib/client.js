import axios from "axios";

const client = axios.create({
  baseURL:
    "http://api.weatherapi.com/v1/current.json?key=748469149c264aeb87d72538231501&q=",
});

export default client;
