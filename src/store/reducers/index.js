import { combineReducers } from "redux";
const files = require.context("./", true, /reducer.js$/);
const reducers = {};

files.keys().forEach(item => {
	const key = item.replace("./", "").replace(".reducer.js", "");
	reducers[key] = files(item).default;
});

export default combineReducers(reducers);
