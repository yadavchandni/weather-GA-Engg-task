import Axios from "axios";

//CALLING ERROR FUNCTION
// function handleSuccess(data) { console.log(data); }
// function handleFailure(data) { console.log('error', data); }

const getCountryDeatilsService = async (name) => {

  // static example:australia
  // return Axios.get('https://restcountries.eu/rest/v2/name/australia')


  // Api to get the details of country & Search by country name.
  return Axios.get(`https://restcountries.eu/rest/v2/name/${name}`);
  // .then(handleSuccess)
  // .catch(handleFailure);
  
};
export default getCountryDeatilsService;
