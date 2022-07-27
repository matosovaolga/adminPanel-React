
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styles from './App.module.scss';

import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import { Sidebar, TopBar } from './components';
import EditUser from './pages/editUser/EditUser';



export default function App(): JSX.Element {
	return (
		<Router>
			<div className={styles.main}>
				<Sidebar />
				<div className={styles.container}>
					<TopBar messages={9} />
					<Routes>
						<Route>

							<Route path="/" element={<Home />} />
							<Route path="/users" element={<UserList />} />
							<Route path="/user/:userId" element={<User />} />
							<Route path="/user/:userId/editUser/" element={<EditUser />} />

						</Route>
					</Routes>
				</div>
			</div>
		</Router>

	);
}


