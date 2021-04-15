

import getWeatherDetailsService  from "../../services/getWeatherDetailsService";
import { WeatherActionType } from "../Action/actionType";

const WeatherInformationAction = (capital) => {
  return async (dispatch) => {
    // getWeatherDetailsService is used to fetch weather country details from api

    const details = await getWeatherDetailsService(capital);
    const {data}=details;
    // console.log('data action ',data);

    dispatch({
      type: WeatherActionType,
      payload: data,   
    });
    console.log('weather information Action  ',data);
  };
};
 export default WeatherInformationAction;