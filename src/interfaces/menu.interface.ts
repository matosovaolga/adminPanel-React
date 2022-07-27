export interface Page {
	title: string;
	_id: string;
	category: string;
}

export interface MenuItem {
	_id: {
		secondCategory: string;
	};
	pages: Page[];
}