import React, { useMemo, useState, useCallback } from "react";
import { Layout, Menu, Icon } from "antd";
import { Link } from "react-router-dom";
import routes from "../routes";
import styles from "./baseLayout.module.scss";

const BaseLayout = ({ children, location }) => {
	const [collapsed, setCollapsed] = useState(false);

	const renderMenuItem = useCallback(routes => {
		return routes.map(route => {
			if (route.routes) {
				return (
					<Menu.SubMenu
						key={route.path}
						title={
							<span>
								<Icon type={route.icon} />
								<span>{route.name}</span>
							</span>
						}
					>
						{renderMenuItem(route.routes)}
					</Menu.SubMenu>
				);
			}
			return (
				<Menu.Item key={route.path}>
					<Link to={route.path}>
						{route.icon && <Icon type={route.icon} />}
						<span>{route.name}</span>
					</Link>
				</Menu.Item>
			);
		});
	}, []);

	return (
		<Layout className={styles.baseLayout}>
			<Layout.Sider trigger={null} collapsible collapsed={collapsed}>
				<div className="logo" />
				<Menu
					theme="dark"
					mode="inline"
					defaultOpenKeys={[`/${location.pathname.split("/")[1]}`]}
					selectedKeys={[location.pathname]}
				>
					{renderMenuItem(routes)}
				</Menu>
			</Layout.Sider>
			<Layout>
				<Layout.Header style={{ background: "#fff", padding: 0 }}>
					<Icon
						className="trigger"
						type={collapsed ? "menu-unfold" : "menu-fold"}
						onClick={() => setCollapsed(!collapsed)}
					/>
				</Layout.Header>
				<Layout.Content
					style={{
						margin: "24px 16px",
						padding: 24,
						background: "#fff",
						minHeight: 280
					}}
				>
					{children}
				</Layout.Content>
			</Layout>
		</Layout>
	);
};

export default BaseLayout;
