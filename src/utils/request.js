import axios from "axios";

// const baseUri = process.env.APP_API_HOST
const baseUri = `https://www.fastmock.site/mock/2f2d795fbf20a4b7d46e7dff9dee0299/a`;

const instance = axios.create({
	baseURL: baseUri,
	timeout: 5000,
	headers: {},
	validateStatus: function(status) {
		return status;
	}
});

instance.interceptors.request.use(
	config => {
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	response => {
		if (response.status >= 200 && response.status <= 300) {
			return Promise.resolve(response.data);
		}
		return response;
	},
	error => {
		return Promise.reject(error);
	}
);

export default instance;
