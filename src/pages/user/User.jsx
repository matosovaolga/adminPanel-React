import "./user.scss";
import { PermIdentity, CalendarToday, PhoneIphone, MailOutline, LocationOn } from '@mui/icons-material';
import { useLocation } from "react-router-dom";


export default function User(){
	const {username, avatar,position, birthday, phone, map, email, location} = useLocation().state;
  console.log(useLocation().state)
		return (
			<div className="user">
				<div className="userTitleContainer">
					<h1 className="userTitle">Edit User</h1>
					<button className="userAddButton">Create</button>
				</div>
				<div className="userContainer">
					<div className="userShow widget">
						<div className="userShowTop">
							<img src={avatar} alt="" className="userShowImage" />
							<div className="userShowTopTitle">
								<div className="userShowUserName">{username}</div>
								<div className="userShowUserPosition">{position}</div>
							</div>
						</div>
						<div className="userShowBottom">
							<span className="userShowTitle">Account Details</span>
							<div className="userShowInfo">
								<PermIdentity className="userShowIcon"/>
								<span className="userShowInfoTitle"></span>
							</div>
							<div className="userShowInfo">
								<CalendarToday className="userShowIcon"/>
								<span className="userShowInfoTitle">{birthday}</span>
							</div>
							<span className="userShowTitle">Contact Details</span>
							<div className="userShowInfo">
								<PhoneIphone className="userShowIcon"/>
								<span className="userShowInfoTitle">{phone}</span>
							</div>
							<div className="userShowInfo">
								<MailOutline className="userShowIcon"/>
								<span className="userShowInfoTitle">{email}</span>
							</div>
							<div className="userShowInfo">
								<LocationOn className="userShowIcon"/>
								<span className="userShowInfoTitle">{location}</span>
							</div>
						
						</div>
					</div>
					<div className="userUpdate widget"></div>
				</div>
			</div>
		);
	
}
