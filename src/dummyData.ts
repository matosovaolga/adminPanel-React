import { ChartOptions } from "chart.js";
import { ButtonProps } from "./components/Button/Button.props";

export interface IUserData {
	id: number
	mark?: string
	username: string
	login: string
	email: string
	status: string
	transaction: string
	transactionStatus?: 'default' | 'approved' | 'declined' | 'active' | 'pending'
	phone: string
	birthday: string
	position: string
	location: string
	avatar: string
}

export const userData = {
	labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
	datasets: [
		{
			label: 'Dataset 1',
			data: [278, 89, 278, 123, 150, 300],
			backgroundColor: 'rgba(255, 99, 132, 0.5)',

		}, {
			label: 'Dataset 2',
			data: [120, 190, 30, 250, 234, 378],
			backgroundColor: 'rgba(53, 162, 235, 0.5)',
		}
	],
};

export const userRows: IUserData[] = [
	{
		id: 1,
		username: 'Jon Snow',
		login: 'Jhone99',
		email: 'jon@gmail.com',
		status: "active",
		transaction: "$120.00",
		transactionStatus: 'approved',
		phone: '+1 890 900 000',
		birthday: '20/01/1987',
		position: 'Designer',
		location: 'New York',
		mark: 'new',
		avatar: "https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
	},
	{
		id: 2,
		username: 'Jon Snow',
		email: 'jon@gmail.com',
		login: 'Jhone99',
		status: "active",
		transactionStatus: 'approved',
		transaction: "$120.00",
		phone: '+1 890 900 000',
		birthday: '20/01/1987',
		position: 'Designer',
		location: 'New York',
		mark: 'new',
		avatar: "https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
	},

	{
		id: 3,
		username: 'Jon Snow',
		email: 'jon@gmail.com',
		login: 'Jhone99',
		status: "active",
		transaction: "$120.00",
		transactionStatus: 'declined',
		phone: '+1 890 900 000',
		birthday: '20/01/1987',
		position: 'Designer',
		location: 'New York',
		mark: 'new',
		avatar: "https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
	}, {
		id: 4,
		username: 'Jon Snow',
		email: 'jon@gmail.com',
		transactionStatus: 'pending',
		login: 'Jhone99',
		status: "active",
		transaction: "$120.00",
		phone: '+1 890 900 000',
		birthday: '20/01/1987',
		position: 'Designer',
		location: 'New York',
		avatar: "https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
	}, {
		id: 5,
		username: 'Jon Snow',
		email: 'jon@gmail.com',
		login: 'Jhone99',
		status: "active",
		transactionStatus: 'approved',
		transaction: "$120.00",
		phone: '+1 890 900 000',
		birthday: '20/01/1987',
		position: 'Designer',
		location: 'New York',
		avatar: "https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
	}, {
		id: 6,
		username: 'Jon Snow',
		email: 'jon@gmail.com',
		login: 'Jhone99',
		status: "active",
		transaction: "$120.00",
		phone: '+1 890 900 000',
		birthday: '20/01/1987',
		position: 'Designer',
		location: 'New York',
		avatar: "https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
	}, {
		id: 7,
		username: 'Jon Snow',
		login: 'Jhone99',
		email: 'jon@gmail.com',
		status: "active",
		transaction: "$120.00",
		phone: '+1 890 900 000',
		birthday: '20/01/1987',
		position: 'Designer',
		location: 'New York',
		avatar: "https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
	}, {
		id: 8,
		username: 'Jon Snow',
		login: 'Jhone99',
		email: 'jon@gmail.com',
		status: "active",
		transaction: "$120.00",
		phone: '+1 890 900 000',
		birthday: '20/01/1987',
		position: 'Designer',
		location: 'New York',
		avatar: "https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
	}, {
		id: 9,
		username: 'Jon Snow',
		login: 'Jhone99',
		email: 'jon@gmail.com',
		status: "active",
		transaction: "$120.00",
		phone: '+1 890 900 000',
		birthday: '20/01/1987',
		position: 'Designer',
		location: 'New York',
		avatar: "https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
	}, {
		id: 10,
		username: 'Jon Snow',
		login: 'Jhone99',
		email: 'jon@gmail.com',
		status: "active",
		transaction: "$220.00",
		phone: '+1 890 900 000',
		birthday: '20/01/1987',
		mark: 'new',
		position: 'Designer',
		location: 'New York',
		avatar: "https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg"
	}

];


export const userOptions: ChartOptions = {
	responsive: true,
	aspectRatio: 3 / 1,
	plugins: {
		legend: {
			position: 'top' as const,
		}

	},
};
