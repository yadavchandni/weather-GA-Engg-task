// NPM packages
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// Custom modules
import reducers from "./reducers";

let store;

// Enable redux dev tool only in development mode


if(process.env.NODE_ENV !== "production"){
    const composeEnhancers= window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    store= createStore(reducers, composeEnhancers(applyMiddleware(thunk)));
}
else{
    store=createStore(reducers, applyMiddleware(thunk));
}

export default store;