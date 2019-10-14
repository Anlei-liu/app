import React, { useCallback } from "react";
import { Form, Input, Icon, Checkbox, Button } from "antd";
import styles from "../styles/login.module.scss";
import { useMutation } from "../hooks";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../store/actions/auth";

const Login = ({ form: { getFieldDecorator, validateFields }, history }) => {
	// const { mutation, loading } = useMutation('/login')
	const dispatch = useDispatch();

	const handleSubmit = useCallback(
		e => {
			e.preventDefault();
			validateFields((err, values) => {
				if (!err) {
					// mutation(values)
					dispatch(
						setUserInfo({
							info: {
								auth: ["dashboard"]
							}
						})
					);
					console.log("Received values of form: ", values);
					console.log(history.push("/"));
				}
			});
		},
		[dispatch, history, validateFields]
	);

	return (
		<section className={styles.loginFormContainer}>
			<Form onSubmit={handleSubmit} className={styles.loginForm}>
				<Form.Item>
					{getFieldDecorator("username", {
						rules: [{ required: true, message: "Please input your username!" }]
					})(
						<Input
							prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
							placeholder="Username"
						/>
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator("password", {
						rules: [{ required: true, message: "Please input your Password!" }]
					})(
						<Input
							prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
							type="password"
							placeholder="Password"
						/>
					)}
				</Form.Item>
				<Form.Item>
					{getFieldDecorator("remember", {
						valuePropName: "checked",
						initialValue: true
					})(<Checkbox>Remember me</Checkbox>)}
					<a href="/forgot-password" className={styles.loginFormForgot}>
						Forgot password
					</a>
					<Button
						loading={false}
						type="primary"
						htmlType="submit"
						className="login-form-button"
					>
						Log in
					</Button>
					Or <a href="/signup">register now!</a>
				</Form.Item>
			</Form>
		</section>
	);
};

export default Form.create()(Login);
