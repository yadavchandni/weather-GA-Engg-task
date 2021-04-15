
import {WeatherActionType} from '../Action/actionType';

const initialState ={
    data:[],
}

export const WeatherInformationReducer=(state=initialState ,{type,payload})=>{
    // const {type, payload}=action;

    switch(type){
        case WeatherActionType:
            return {
                ...state,
                data:payload,
                
            };
            default:
                return state
    }

}
