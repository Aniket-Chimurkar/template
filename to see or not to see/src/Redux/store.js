import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { loginReducer } from "./Login/reducer";
import { productsReducer } from "./Products/reducer";
import { signupReducer } from "./SignUp/reducer";

export const rootReducer=combineReducers({
    login:loginReducer,
    signup: signupReducer,
    products:productsReducer
});

export const store =createStore(rootReducer, applyMiddleware(thunk))