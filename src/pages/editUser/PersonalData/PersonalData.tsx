import { Box, Button, OutlinedInput, TextField } from "@mui/material";
import styles from './PersonalData.module.scss';

export default function PersonalData(): JSX.Element {
	return (


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
					<Button
						variant="contained"
						sx={{
							':hover': {
								bgcolor: 'secondary.dark', // theme.palette.primary.main
								color: 'secondary.light',
							},
						}}
						color="secondary"
						className={styles.cancelBtn}
					>Cancel</Button>
				</div>

			</Box>

		</div>
	);
}