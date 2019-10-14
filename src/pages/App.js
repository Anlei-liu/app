import React, { Suspense } from "react";
import { renderRoutes } from "../utils";
import BaseLayout from "../layout/BaseLayout";
import routes from "../routes";
import { useSelector } from "react-redux";
import { Loading } from '../components'

const App = props => {
	const userInfo = useSelector(state => {
		return state.auth.get("userInfo").toJS();
	});

	return (
		<BaseLayout {...props}>
			<Suspense fallback={<Loading />}>
				{renderRoutes(routes)}
			</Suspense>
		</BaseLayout>
	);
};

export default App;
