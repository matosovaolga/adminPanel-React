import { faker } from "@faker-js/faker";
import { AddOutlined, GitHub, LanguageOutlined, ModeEditOutlineOutlined, Pinterest, Twitter } from "@mui/icons-material";
import { Avatar, Box, Chip, OutlinedInput, Slider, Tab, Tabs } from "@mui/material";
import React from "react";
import { Htag } from "../../components";
import { Widget } from "../../components/Widget/Widget";
import ChangePassword from "./ChangePassword/ChangePassword";
import styles from "./EditUser.module.scss";
import { EditUserProps, TabPanelProps } from "./EditUser.props";
import PersonalData from "./PersonalData/PersonalData";
import cn from 'classnames';
import PersonalBg from "../user/PersonalBg/PersonalBg";

function a11yProps(index: number) {
	return {
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`,
	};
}
function TabPanel(props: TabPanelProps) {
	const { children, value, index, ...other } = props;

	return (
		<div
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
			{...other}
		>
			{value === index && (
				<Box sx={{ p: 3 }}>
					{children}
				</Box>
			)}
		</div>
	);
}


export default function EditUser(): JSX.Element {
	const [value, setValue] = React.useState(0);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (

		<div className={styles.editUser}>
			<PersonalBg />
			<div className={styles.sidebar}>
				<Widget size='sm' className={cn(styles.w_sidebar, styles.headingAvatar)}>
					<Avatar src='https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg' className={styles.avatar} />
					<Htag tag="h4">{`${faker.name.firstName()} ${faker.name.lastName()}`}</Htag>
					<p>{faker.name.jobType()}</p>
				</Widget>
				<Widget size='sm' className={styles.w_sidebar}>

					<Htag tag="h3">Complete Your Profile</Htag>
					<Chip
						label="Custom delete icon"
						deleteIcon={<ModeEditOutlineOutlined />}
					/>
					<Slider
						disabled
						defaultValue={30}
						color="secondary"
						aria-label="Disabled slider"
						valueLabelDisplay="on"
					/>
				</Widget>
				<Widget size="sm">
					<Htag tag="h3">Portfolio</Htag>
					<Chip
						label="Custom delete icon"
						deleteIcon={<AddOutlined />}
					/>
					<div className={styles.socialPortfolio}>
						<GitHub className={styles.socialIcon} />
						<OutlinedInput
							value="@daveadame"
							size="small"
							fullWidth
						/>
					</div>
					<div className={styles.socialPortfolio}>
						<Pinterest className={styles.socialIcon} />
						<OutlinedInput
							value="www.velzon.com"
							size="small"
							fullWidth
						/>
					</div>
					<div className={styles.socialPortfolio}>
						<Twitter className={styles.socialIcon} />
						<OutlinedInput
							fullWidth
							value="@dave_adame"
							size="small"
						/>
					</div>
					<div className={styles.socialPortfolio}>
						<LanguageOutlined className={styles.socialIcon} />
						<OutlinedInput
							value="Advance Dave"
							size="small"
							fullWidth
						/>
					</div>

				</Widget>
			</div>
			<div className={styles.content}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
						<Tab label="Personal Details" {...a11yProps(0)} />
						<Tab label="Change Password" {...a11yProps(1)} />
						<Tab label="Transaction History" {...a11yProps(2)} />
						<Tab label="Privacy Policy" {...a11yProps(3)} />
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					<PersonalData />
				</TabPanel>
				<TabPanel value={value} index={1}>
					<ChangePassword />
				</TabPanel>
				<TabPanel value={value} index={2}>
					Experience
				</TabPanel>
				<TabPanel value={value} index={3}>
					Privacy Policy
				</TabPanel>
			</div>

		</div>
	);
}