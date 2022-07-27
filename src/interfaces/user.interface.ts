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
