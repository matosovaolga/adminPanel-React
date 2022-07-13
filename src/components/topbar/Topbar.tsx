import React from 'react';
import "./topbar.scss";
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
export default function Topbar(): JSX.Element {

	return (
		<div className="topbar">
			<div className="topbarWrapper">
				<div className="topLeft">
					<span className="logo">Lamaadmin</span>
				</div>
				<div className="topRight">
					<div className="topbarIconContainer">
						<NotificationsNone />
						<span className="topbarIconBag ">2</span>
					</div>
					<div className="topbarIconContainer">
						<Language />
						<span className="topbarIconBag ">2</span>
					</div>
					<div className="topbarIconContainer">
						<Settings />
					</div>
					<img src="https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg" alt="" className="topAvatar" />
				</div>
			</div>
		</div>
	);
}
