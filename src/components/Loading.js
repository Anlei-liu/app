import React from 'react'
import { Spin } from 'antd'
import styles from '../styles/loading.module.scss'

const Loading = () => (
	<section className={styles.loadingContainer}>
		<Spin />
	</section>
)

export default Loading
