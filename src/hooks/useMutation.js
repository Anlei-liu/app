import React, { useState } from "react";
import request from "../utils/request";
import { message } from "antd";

const useMutation = uri => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [data, setData] = useState(null);

	const mutation = async data => {
		setLoading(true);
		try {
			const _result = await request({
				url: uri,
				data
			});
			setData(_result);

			return _result;
		} catch (err) {
			message.error(err.message || err);
			setError(err);
			throw new Error(err);
		} finally {
			setLoading(false);
		}
	};

	return { loading, error, data, mutation };
};

export default useMutation;
