
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import styles from './App.module.scss';

import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';
import Topbar from './components/Topbar/Topbar';
// import { Topbar } from './components';



export default function App(): JSX.Element {
	return (
		<Router>
			<Topbar />
			<div className={styles.container}>
				<Sidebar />
				<Routes>
					<Route>

						<Route path="/" element={<Home />} />
						<Route path="/users" element={<UserList />} />
						<Route path="/user/:userId" element={<User />} />
						<Route path="/newuser/" element={<NewUser />} />

					</Route>
				</Routes>
			</div>
		</Router>

	);
}

