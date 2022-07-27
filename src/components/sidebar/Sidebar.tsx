import styles from "./Sidebar.module.scss";
import {
	LineStyle, AutoGraph, TrendingUp, CurrencyBitcoin, Group, Storefront,
	MonetizationOn, Equalizer, MailOutline, Comment, Send, AssignmentLate, BadgeOutlined
} from '@mui/icons-material';
import { Htag } from "../Htag/Htag";
import logo from "./logo.png";
import { FirstLevelMenuItem, SidebarProps, TopLevelCategory } from "./Sidebar.props";
import cn from "classnames";
import { useContext } from "react";

const firstLevelMenu: FirstLevelMenuItem[] = [
	{
		route: 'dashboard',
		name: 'Dashboard',
		id: TopLevelCategory.Dashboard
	},
	{
		route: 'quick-menu',
		name: 'Quick Menu',
		id: TopLevelCategory.QuickMenu
	},
	{
		route: 'notifications',
		name: 'Notifications',
		id: TopLevelCategory.Notifications
	},
	{
		route: 'staff',
		name: 'Staff',
		id: TopLevelCategory.Staff
	}
];



export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {

	const buildFirstLevel = () => {
		return (<>
			{
				firstLevelMenu.map(fItemMenu => (
					<div key={fItemMenu.route}>
						<div className={cn(styles.firstLevel, {
						})}>
							<Htag tag="h3">{fItemMenu.name}</Htag>
						</div>
					</div>
				))
			};
		</>);
	};

	const buildSecondLevel = () => {
		return;
	};

	return (
		<div className={styles.sidebar} {...props}>
			<div className={styles.sidebarMenu}>
				<span className={styles.logo}><img src={logo} alt="Logo" /></span>

				{
					buildFirstLevel()
				}

				{/* <ul className="sidebarList">
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


				</ul> */}
			</div>
		</div >
	);
};
