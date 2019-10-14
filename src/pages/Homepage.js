import React, { useCallback } from "react";
import { Button, Tag, Table, Divider } from "antd";
import { Actions } from "../components";

const columns = [
	{
		title: "Name",
		dataIndex: "name",
		key: "name",
		filters: [
			{
				text: 'Joe',
				value: 'Joe',
			},
			{
				text: 'Jim',
				value: 'Jim',
			},
			{
				text: 'Submenu',
				value: 'Submenu',
				children: [
					{
						text: 'Green',
						value: 'Green',
					},
					{
						text: 'Black',
						value: 'Black',
					},
				],
			},
		],
		render: text => <Button type="link">{text}</Button>
	},
	{
		title: "Age",
		dataIndex: "age",
		key: "age",
		sorter: true
	},
	{
		title: "Address",
		dataIndex: "address",
		key: "address",
		filters: [
			{
				text: 'Joe',
				value: 'Joe',
			},
			{
				text: 'Jim',
				value: 'Jim',
			},
			{
				text: 'Submenu',
				value: 'Submenu',
				children: [
					{
						text: 'Green',
						value: 'Green',
					},
					{
						text: 'Black',
						value: 'Black',
					},
				],
			},
		],
	},
	{
		title: "Tags",
		key: "tags",
		dataIndex: "tags",
		render: tags => (
			<span>
				{tags.map(tag => {
					let color = tag.length > 5 ? "geekblue" : "green";
					if (tag === "loser") {
						color = "volcano";
					}
					return (
						<Tag color={color} key={tag}>
							{tag.toUpperCase()}
						</Tag>
					);
				})}
			</span>
		)
	},
	{
		title: "Action",
		key: "action",
		render: (text, record) => (
			<span>
				<Button type="link">Invite {record.name}</Button>
				<Divider type="vertical" />
				<Button type="link">Delete</Button>
			</span>
		)
	}
];

const data = [
	{
		key: "1",
		name: "John Brown",
		age: 32,
		address: "New York No. 1 Lake Park",
		tags: ["nice", "developer"]
	},
	{
		key: "2",
		name: "Jim Green",
		age: 42,
		address: "London No. 1 Lake Park",
		tags: ["loser"]
	},
	{
		key: "3",
		name: "Joe Black",
		age: 32,
		address: "Sidney No. 1 Lake Park",
		tags: ["cool", "teacher"]
	}
];

const HomePage = () => {

	const search = useCallback((pagination, filters, sorter) => {
		console.log(pagination, filters)
		// const params = {
		// 	pageSize: pagination.pageSize || 20,
		// 	current: pagination.current || 1,
		// 	...filters
		// }
	}, [])

	return (
		<section>
			<Actions>
				<Button type="primary">添加</Button>
			</Actions>
			<Table
				columns={columns}
				dataSource={data}
				rowSelection={{
					onChange: search
				}}
				pagination={{
					pageSize: 20,
					total: 100
				}}
				onChange={search}
			/>
		</section>
	);
};

export default HomePage;
