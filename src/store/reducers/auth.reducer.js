import { SET_USER_INFO } from "../actions/auth";
import { fromJS } from "immutable";

const initialValue = fromJS({
	userInfo: {}
});

const auth = (state = initialValue, action) => {
	switch (action.type) {
		case SET_USER_INFO:
			localStorage.setItem("auth", "123123");
			return state.set("userInfo", fromJS(action.payload));
		default:
			return state;
	}
};

export default auth;
