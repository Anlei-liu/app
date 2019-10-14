import React, { useCallback, useRef } from 'react';
import styles from '../styles/actions.module.scss';
import PropTypes from 'prop-types'
import { Input } from 'antd'

const Actions = ({ children, searchMethod }) => {

	let timer = useRef(null);

	const search = useCallback((val = '') => {
		clearTimeout(timer.current)
		timer.current = setTimeout(() => {
			searchMethod && searchMethod(val)
		}, 300)
	}, [searchMethod])

	return (
		<section className={styles.actions}>
			<div className={styles.actionsLeft}>{children}</div>
			<div>
				<Input.Search
					onChange={(e) => search(e.target.value)}
					onSearch={val => search(val)}
				/>
			</div>
		</section>
	);
};

Actions.propTypes = {
	children: PropTypes.element,
	searchMethod: PropTypes.func.isRequired
}

export default Actions;
