import React, { useState, useEffect, useCallback } from "react";
import request from "../utils/request";
import { message } from "antd";

const useQuery = (uri, params) => {
	const [param, setParams] = useState(params);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [data, setData] = useState(null);

	const fetchData = useCallback(async (url, options) => {
		try {
			setLoading(true);
			const _result = await request({
				url: url,
				params: options
			});
			setData(_result);
			return _result;
		} catch (err) {
			setError(err);
			message.error(err.message || err);
			return Promise.reject(err);
		} finally {
			setLoading(false);
		}
	}, []);

	const refresh = params => {
		setParams(Object.assign({}, param, params));
	};

	useEffect(() => {
		fetchData(uri, param);
	}, [param, uri, fetchData]);

	return { loading, error, data, params: param, refresh };
};

export default useQuery;
