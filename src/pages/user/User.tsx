import "./user.scss";
import { PermIdentity, CalendarToday, PhoneIphone, MailOutline, LocationOn, Publish } from '@mui/icons-material';
import { useLocation, Link } from "react-router-dom";
import React, { useState  } from 'react';

export default function User(){
	console.log(useLocation());
	//const state = useLocation().state;
	
	const [formData, setFormData] = useState({
		username: useLocation().state.username, 
		avatar: useLocation().state.avatar,
		position: useLocation().state.position, 
		birthday: useLocation().state.birthday, 
		phone: useLocation().state.phone, 
		map: useLocation().state.map, 
		email: useLocation().state.email,
		location: useLocation().state.location, 
		login: useLocation().state.login
	});

	const handleSubmit = () => {
		console.log(formData);
	};
		return (
			<div className="user">
				<div className="userTitleContainer">
					<h1 className="userTitle">Edit User</h1>
					<Link to="/newUser">
						<button className="userAddButton">Create</button>
					</Link>
				</div>
				<div className="userContainer">
					<div className="userShow widget">
						<div className="userShowTop">
							<img src={formData.avatar} alt="" className="userShowImage" />
							<div className="userShowTopTitle">
								<div className="userShowUserName">{formData.username}</div>
								<div className="userShowUserPosition">{formData.position}</div>
							</div>
						</div>
						<div className="userShowBottom">
							<span className="userShowTitle">Account Details</span>
							<div className="userShowInfo">
								<PermIdentity className="userShowIcon"/>
								<span className="userShowInfoTitle">{formData.login}</span>
							</div>
							<div className="userShowInfo">
								<CalendarToday className="userShowIcon"/>
								<span className="userShowInfoTitle">{formData.birthday}</span>
							</div>
							<span className="userShowTitle">Contact Details</span>
							<div className="userShowInfo">
								<PhoneIphone className="userShowIcon"/>
								<span className="userShowInfoTitle">{formData.phone}</span>
							</div>
							<div className="userShowInfo">
								<MailOutline className="userShowIcon"/>
								<span className="userShowInfoTitle">{formData.email}</span>
							</div>
							<div className="userShowInfo">
								<LocationOn className="userShowIcon"/>
								<span className="userShowInfoTitle">{formData.location}</span>
							</div>
						
						</div>
					</div>
					<div className="userUpdate widget">
						<span className="userUpdateTitle">Edit</span>
						<form className="userUpdateForm">
							<div className="userUpdateLeft">
								<div className="userUpdateItem">
									<label>Username</label>
									<input 
										type="text"
										value={formData.login}
										placeholder="Login"
										className="userUpdateInput"
										onChange={(e) => setFormData({...formData, login: e.target.value})} 
									/>
								</div>	
								<div className="userUpdateItem">
									<label>Full name</label>
									<input 
										type="text"
										value={formData.username}
										placeholder="User Name"
										className="userUpdateInput"
										onChange={(e) => setFormData({...formData, username: e.target.value})} 
									/>
								</div>
								<div className="userUpdateItem">
									<label>Email</label>
									<input 
										type="text"
										value={formData.email}
										className="userUpdateInput"
										placeholder="Email"
										onChange={(e) => setFormData({...formData, email: e.target.value})} 
									/>
								</div>
								<div className="userUpdateItem">
									<label>Phone</label>
									<input 
										type="text"
										value={formData.phone}
										placeholder="Phone"
										className="userUpdateInput"
										onChange={(e) => setFormData({...formData, phone: e.target.value})} 
									/>
								</div>
								<div className="userUpdateItem">
									<label>Adress</label>
									<input 
										type="text"
										value={formData.location}
										className="userUpdateInput"
										placeholder="Location"
										onChange={(e) => setFormData({...formData, location: e.target.value})} 
									/>
								</div>
							
							</div>
							<div className="userUpdateRight">
								<div className="userUpdateUpload">
									<img src={formData.avatar} alt="" className="userUpdateImg" />
									<label htmlFor="file"><Publish  className="userUpdateIcon"/></label>
									<input type="file" id="file" style={{display: "none"}} />
								</div>
								<span className="userUpdateButton" onClick={handleSubmit}>Update</span>
							</div>
						</form>
					</div>
				</div>
			</div>
		);
	
}
