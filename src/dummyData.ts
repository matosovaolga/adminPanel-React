import { faker } from "@faker-js/faker";
import { ChartOptions } from "chart.js";
import { IUserData } from "./interfaces/user.interface";


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
		username: `${faker.name.firstName()} ${faker.name.lastName()}`,
		avatar: faker.image.avatar(),
		login: faker.word.adjective().toUpperCase(),
		email: `${faker.word.adjective()}@gmail.com`,
		status: "active",
		transaction: faker.finance.amount(34, 1000, 2, '$'),
		transactionStatus: 'pending',
		phone: faker.phone.number(),
		birthday: faker.date.past().toISOString().substring(0, 10),
		position: faker.name.jobType(),
		location: faker.address.cityName()
	},
	{
		id: 2,
		username: `${faker.name.firstName()} ${faker.name.lastName()}`,
		avatar: faker.image.avatar(),
		login: faker.word.adjective().toUpperCase(),
		email: `${faker.word.adjective()}@gmail.com`,
		status: "active",
		transaction: faker.finance.amount(34, 1000, 2, '$'),
		transactionStatus: 'declined',
		phone: faker.phone.number(),
		birthday: faker.date.past().toISOString().substring(0, 10),
		position: faker.name.jobType(),
		location: faker.address.cityName(),
		mark: 'new'
	},
	{
		id: 3,
		username: `${faker.name.firstName()} ${faker.name.lastName()}`,
		avatar: faker.image.avatar(),
		login: faker.word.adjective().toUpperCase(),
		email: `${faker.word.adjective()}@gmail.com`,
		status: "active",
		transaction: faker.finance.amount(34, 1000, 2, '$'),
		transactionStatus: 'approved',
		phone: faker.phone.number(),
		birthday: faker.date.past().toISOString().substring(0, 10),
		position: faker.name.jobType(),
		location: faker.address.cityName()
	},
	{
		id: 4,
		username: `${faker.name.firstName()} ${faker.name.lastName()}`,
		avatar: faker.image.avatar(),
		login: faker.word.adjective().toUpperCase(),
		email: `${faker.word.adjective()}@gmail.com`,
		status: "active",
		transaction: faker.finance.amount(34, 1000, 2, '$'),
		transactionStatus: 'pending',
		phone: faker.phone.number(),
		birthday: faker.date.past().toISOString().substring(0, 10),
		position: faker.name.jobType(),
		location: faker.address.cityName()
	},
	{
		id: 5,
		username: `${faker.name.firstName()} ${faker.name.lastName()}`,
		avatar: faker.image.avatar(),
		login: faker.word.adjective().toUpperCase(),
		email: `${faker.word.adjective()}@gmail.com`,
		status: "active",
		transaction: faker.finance.amount(34, 1000, 2, '$'),
		transactionStatus: 'approved',
		phone: faker.phone.number(),
		birthday: faker.date.past().toISOString().substring(0, 10),
		position: faker.name.jobType(),
		location: faker.address.cityName(),
		mark: 'new'
	},
	{
		id: 6,
		username: `${faker.name.firstName()} ${faker.name.lastName()}`,
		avatar: faker.image.avatar(),
		login: faker.word.adjective().toUpperCase(),
		email: `${faker.word.adjective()}@gmail.com`,
		status: "active",
		transaction: faker.finance.amount(34, 1000, 2, '$'),
		transactionStatus: 'approved',
		phone: faker.phone.number(),
		birthday: faker.date.past().toISOString().substring(0, 10),
		position: faker.name.jobType(),
		location: faker.address.cityName(),
		mark: 'new'
	},
	{
		id: 7,
		username: `${faker.name.firstName()} ${faker.name.lastName()}`,
		avatar: faker.image.avatar(),
		login: faker.word.adjective().toUpperCase(),
		email: `${faker.word.adjective()}@gmail.com`,
		status: "active",
		transaction: faker.finance.amount(34, 1000, 2, '$'),
		transactionStatus: 'approved',
		phone: faker.phone.number(),
		birthday: faker.date.past().toISOString().substring(0, 10),
		position: faker.name.jobType(),
		location: faker.address.cityName(),
		mark: 'new'
	},
	{
		id: 8,
		username: `${faker.name.firstName()} ${faker.name.lastName()}`,
		avatar: faker.image.avatar(),
		login: faker.word.adjective().toUpperCase(),
		email: `${faker.word.adjective()}@gmail.com`,
		status: "active",
		transaction: faker.finance.amount(34, 1000, 2, '$'),
		transactionStatus: 'approved',
		phone: faker.phone.number(),
		birthday: faker.date.past().toISOString().substring(0, 10),
		position: faker.name.jobType(),
		location: faker.address.cityName()
	},
	{
		id: 9,
		username: `${faker.name.firstName()} ${faker.name.lastName()}`,
		avatar: faker.image.avatar(),
		login: faker.word.adjective().toUpperCase(),
		email: `${faker.word.adjective()}@gmail.com`,
		status: "active",
		transaction: faker.finance.amount(34, 1000, 2, '$'),
		transactionStatus: 'approved',
		phone: faker.phone.number(),
		birthday: faker.date.past().toISOString().substring(0, 10),
		position: faker.name.jobType(),
		location: faker.address.cityName()
	},
	{
		id: 10,
		username: `${faker.name.firstName()} ${faker.name.lastName()}`,
		avatar: faker.image.avatar(),
		login: faker.word.adjective().toUpperCase(),
		email: `${faker.word.adjective()}@gmail.com`,
		status: "active",
		transaction: faker.finance.amount(34, 1000, 2, '$'),
		transactionStatus: 'approved',
		phone: faker.phone.number(),
		birthday: faker.date.past().toISOString().substring(0, 10),
		position: faker.name.jobType(),
		location: faker.address.cityName()
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
