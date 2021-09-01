import {createStore} from "redux";
import reducers from "./reducers/index";

//Lager "storen" hvor vi kobler sammen alle reducerne
const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;