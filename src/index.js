import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./styles/main.scss";
import store from "./store";
import { Provider } from "react-redux";
import { Loading } from './components'

const Login = lazy(() => import(/*webpackChunkName: "login"*/ "./pages/Login"));
const App = lazy(() => import(/*webpackChunkName: "App"*/ "./pages/App"));

ReactDOM.render(
	<Provider store={store}>
		<Suspense fallback={<Loading />}>
			<BrowserRouter>
				<Switch>
					<Route path={"/login"} component={Login} />
					<Route
						path={"/"}
						render={props => {
							if (!localStorage.getItem("auth")) {
								return <Redirect to={"/login"} />;
							}
							return <App {...props} />;
						}}
					/>
				</Switch>
			</BrowserRouter>
		</Suspense>
	</Provider>,
	document.getElementById("root")
);
