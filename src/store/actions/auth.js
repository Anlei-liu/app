export const SET_USER_INFO = "user.info";

export const setUserInfo = payload => {
	return {
		type: SET_USER_INFO,
		payload
	};
};
