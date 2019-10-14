import { lazy } from "react";
export default [
	{
		name: "Dashboard",
		icon: "user",
		path: "/dashboard",
		component: lazy(() =>
			import(/* webpackChunkName: "Dashboard" */ "../pages/Dashboard")
		),
		exact: true
	},
	{
		name: "Homepage",
		icon: "user",
		path: "/homepage",
		routes: [
			{
				name: "aaa",
				path: "/homepage/aaaa",
				component: lazy(() =>
					import(/* webpackChunkName: "Homepage" */ "../pages/Homepage")
				)
			}
		]
	}
];
