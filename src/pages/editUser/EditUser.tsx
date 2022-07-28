import { faker } from "@faker-js/faker";
import { AddOutlined, GitHub, LanguageOutlined, ModeEditOutlineOutlined, Pinterest, Twitter } from "@mui/icons-material";
import { Avatar, Box, Button, Chip, OutlinedInput, Slider, Tab, Tabs, TextField } from "@mui/material";
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
						<Tab label="Experience" {...a11yProps(2)} />
						<Tab label="Privacy Policy" {...a11yProps(3)} />
					</Tabs>
				</Box>
				<TabPanel value={value} index={0}>
					<div className={styles.tabPanelContainer}>
						<Box
							component="form"
							sx={{
								'& .MuiTextField-root': { m: 1, width: '25ch' },
							}}
							noValidate
							autoComplete="off"
						>
							<div className={styles.col_1}>
								<label>First Name</label>
								<OutlinedInput
									placeholder="First Name"
									required
									value="Dava"
									size="small"
									fullWidth
								/>
							</div>
							<div className={styles.col_1}>
								<label>Last Name</label>
								<OutlinedInput
									placeholder="Last Name"
									required
									value="Dava 9999"
									size="small"
									fullWidth
								/>
							</div>
							<div className={styles.col_1}>
								<label>Phone Number</label>
								<OutlinedInput
									placeholder="First Name"
									required
									value="+1 (098) 7767645"
									size="small"
									fullWidth
									type="phone"
								/>
							</div>
							<div className={styles.col_1}>
								<label>Email Address</label>
								<OutlinedInput
									size="small"
									fullWidth
								/>
							</div>
							<div className={styles.col_2}>
								<label>Joining Date</label>
								<OutlinedInput
									size="small"
									type="date"
									value='1986-07-22'
									fullWidth
								/>
							</div>
							<div className={styles.col_1}>
								<label>Designation</label>
								<OutlinedInput
									size="small"
									fullWidth
									value='Lead Designer / Developer'
								/>
							</div>
							<div className={styles.col_1}>
								<label>Website</label>
								<OutlinedInput
									size="small"
									fullWidth
									value='www.velzon.com'
								/>
							</div>
							<div className={styles.col_2}>
								<label>Description</label>
								<TextField

									style={{ width: '100%', margin: '10px 0' }}

									multiline
									rows={4}
									hiddenLabel
									value="Hi I' m Anna Adame,It will be as simple as Occidental; in fact, it will be Occidental.To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine told me what Occidental is European languages are members of the same family."
								/>
							</div>
							<div className={styles.buttonPannel}>
								<Button variant="contained">Updates</Button>
								<Button variant="contained" color="secondary" className={styles.cancelBtn}>Cancel</Button>
							</div>

						</Box>

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