import Axios from 'axios';

 const getWeatherDetailsService= async(capital)=>{
    // Example API Request:
    // http://api.weatherstack.com/current? access_key = YOUR_ACCESS_KEY& query = New York
     return Axios.get(`http://api.weatherstack.com/current?access_key=b7221146dba1efefb01fe58fb9b3bc11&query=${capital}`)
}
export default getWeatherDetailsService;


