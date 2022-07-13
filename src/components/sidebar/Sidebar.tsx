import "./sidebar.scss";
import {
	LineStyle, AutoGraph, TrendingUp, CurrencyBitcoin, Group, Storefront,
	MonetizationOn, Equalizer, MailOutline, Comment, Send, AssignmentLate, BadgeOutlined
} from '@mui/icons-material';
import { Htag } from "../Htag/Htag";

export default function Sidebar(): JSX.Element {

	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<div className="sidebarMenu">
					<Htag tag="h2">Dashboard</Htag>
					<ul className="sidebarList">
						<li className="sidebarListItem active">
							<LineStyle className="sidebarIcon" />  Home
						</li>
						<li className="sidebarListItem">
							<AutoGraph className="sidebarIcon" />
							Analytics
						</li>
						<li className="sidebarListItem">
							<TrendingUp className="sidebarIcon" />
							CRM
						</li>
						<li className="sidebarListItem">
							<CurrencyBitcoin className="sidebarIcon" />
							Crypto

						</li>

					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle text-m">Quick menu</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem text-sm">
							<Group className="sidebarIcon" />
							Users
						</li>
						<li className="sidebarListItem">
							<Storefront className="sidebarIcon" />
							Products
						</li>
						<li className="sidebarListItem">
							<MonetizationOn className="sidebarIcon" />
							Transactions
						</li>
						<li className="sidebarListItem">
							<Equalizer className="sidebarIcon" />
							Reports
						</li>

					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle text-m">Notifications</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem text-sm">
							<MailOutline className="sidebarIcon" />
							Mail
						</li>
						<li className="sidebarListItem">
							<Comment className="sidebarIcon" />
							Feedback
						</li>
						<li className="sidebarListItem">
							<Send className="sidebarIcon" />
							Messages
						</li>


					</ul>
				</div>
				<div className="sidebarMenu">
					<h3 className="sidebarTitle text-m">Staff</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem text-sm">
							<BadgeOutlined className="sidebarIcon" />
							Manage
						</li>
						<li className="sidebarListItem">
							<AutoGraph className="sidebarIcon" />
							Analytics
						</li>
						<li className="sidebarListItem">
							<AssignmentLate className="sidebarIcon" />
							Reports
						</li>


					</ul>
				</div>
			</div>
		</div >
	);
}
