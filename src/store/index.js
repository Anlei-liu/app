import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";

const logger = store => next => action => {
	console.group(action.type);
	console.info("dispatch", action);
	let result = next(action);
	console.log("next state", store.getState());
	console.groupEnd();
	return result;
};

const store = createStore(reducers, undefined, applyMiddleware(logger));

export default store;
