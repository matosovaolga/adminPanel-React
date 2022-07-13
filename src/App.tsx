
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.scss';

import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import UserList from './pages/userList/UserList';
import User from './pages/user/User';
import NewUser from './pages/newUser/NewUser';


export default function App(): JSX.Element {
	return (
		<Router>
			<Topbar />
			<div className="container ">
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

