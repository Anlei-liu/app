import React from "react";
import { Switch, Route } from "react-router-dom";

const renderRoutes = (routes, extraProps = {}, switchProps = {}) => (
	<Switch {...switchProps}>
		{routes.map((route, key) => (
			<Route
				key={route.key || key}
				path={route.path}
				exact={route.exact}
				strict={route.strict}
				render={props => {
					if (route.routes) {
						return <>{renderRoutes(route.routes)}</>;
					}
					return <route.component {...props} {...extraProps} route={route} />;
				}}
			/>
		))}
	</Switch>
);

export default renderRoutes;
