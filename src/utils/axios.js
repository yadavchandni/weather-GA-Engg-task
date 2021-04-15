import axios from "axios";
import Cookie from "js-cookie";

const URL = process.env.NODE_ENV !== "production " ? 'http://api.weatherstack.com/current?access_key=b7221146dba1efefb01fe58fb9b3bc11&query=${capital}' : "";

const defaultAxios = axios.create({
  baseURL: URL,
});

const token = Cookie.get("token");

defaultAxios.defaults.headers.common["Authorization"] = "Bearer " + token;

export default defaultAxios;
