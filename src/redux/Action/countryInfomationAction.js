// getCountryDetailsService services file (services.js)
import getCountryDetailsService from "../../services/getCountryDetailsService";

// export Country Action file 
import { CountryActionType } from "../Action/actionType";


const CountryInformationAction = (name) => {
  return async (dispatch) => {

    // details: AxiosResponse<any>
    const details = await getCountryDetailsService(name);

    // const {data}=details;
    // console.log('data action ',data);
    dispatch({
      type: CountryActionType,
      payload: details.data[0],
    });
    console.log('country information action console',details.data);

  };
};
export default CountryInformationAction;
