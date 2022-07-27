import { faker } from "@faker-js/faker";
import { AddOutlined, GitHub, ModeEditOutlineOutlined } from "@mui/icons-material";
import { Avatar, Box, Chip, Slider, Tab, Tabs, TextField, Typography } from "@mui/material";
import React from "react";
import { Htag } from "../../components";
import { Widget } from "../../components/Widget/Widget";
import styles from "./EditUser.module.scss";
import { EditUserProps, TabPanelProps } from "./EditUser.props";

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
					<Typography>{children}</Typography>
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
			<div className={styles.sidebar}>
				<Widget size='sm' className={styles.w_sidebar}>
					<Avatar src='https://themesbrand.com/velzon/html/default/assets/images/users/avatar-1.jpg' />
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
					<p>
						<GitHub />
						<TextField
							id="outlined-basic"
							hiddenLabel
							variant="outlined"
							value="@daveadame"
							size="small"
						/>
					</p>
					<p>
						<TextField
							id="outlined-basic"
							hiddenLabel
							variant="outlined"
							value="www.velzon.com"
							size="small"
						/>
					</p>
					<p>
						<TextField
							id="outlined-basic"
							hiddenLabel
							variant="outlined"
							value="@dave_adame"
							size="small"
						/>
					</p>
					<p>
						<TextField

							hiddenLabel
							variant="outlined"
							value="Advance Dave"
							size="small"
						/>
					</p>

				</Widget>
			</div>
			<div className={styles.content}>
				<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
					<Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
						<Tab label="Personal Details" {...a11yProps(0)} />
						<Tab label="Change Password" {...a11yProps(1)} />
						<Tab label="Experience" {...a11yProps(2)} />
						<Tab label="Privacy Policy" {...a11yProps(3)} />
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					<div className={styles.tabPanelContainer}>
						<form>
							<div className={styles.col_1}>
								<label>First Name</label>
								<TextField
									hiddenLabel
									placeholder="First Name"
									variant="outlined"
									required
									value="Dava"
									size="small"
									fullWidth
								/>
							</div>
							<div className={styles.col_1}>
								<label>Last Name</label>
								<TextField
									hiddenLabel
									placeholder="Last Name"
									variant="outlined"
									required
									value="Dava 9999"
									size="small"
									fullWidth
								/>
							</div>
							<div className={styles.col_1}>
								<label></label>
								<TextField
									hiddenLabel
									placeholder="First Name"
									variant="outlined"
									required
									value="+1 (098) 7767645"
									size="small"
									fullWidth
									type="phone"
								/>
							</div>
							<div className={styles.col_1}>
								<label></label>
								<TextField hiddenLabel label="Outlined" variant="outlined" />
							</div>
							<div className={styles.col_2}>
								<label></label>
								<TextField id="outlined-basic" label="Outlined" variant="outlined" />
							</div>
							<div>
								<label></label>
								<TextField id="outlined-basic" label="Outlined" variant="outlined" />
							</div>
							<div>
								<label></label>
								<TextField id="outlined-basic" label="Outlined" variant="outlined" />
							</div>
						</form>
					</div>
				</TabPanel>
				<TabPanel value={value} index={1}>
					Change Password
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