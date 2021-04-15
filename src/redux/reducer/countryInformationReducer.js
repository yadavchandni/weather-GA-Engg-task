
//action export file
import {CountryActionType} from '../Action/actionType';

// InitialState for the state
const INITIAL_STATE = {
    data:[]
}

// Country Information Reducer is used to match data from store index.js

export const CountryInformationReducer = (state=INITIAL_STATE,action) =>{
    const {type,payload} = action;

    switch (type) {
        case CountryActionType :
            return { 
                ...state,
                data:payload
            };
        default:
            return state
    }
}

