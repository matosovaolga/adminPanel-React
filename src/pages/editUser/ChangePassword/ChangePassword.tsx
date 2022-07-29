import { Box, Button, Grid, OutlinedInput, TextField } from "@mui/material";
import styles from './ChangePassword.module.scss';

export default function ChangePassword(): JSX.Element {
	return (


		<Box
			component="form"
			sx={{
				'& .MuiTextField-root': { m: 1, width: '25ch' },
			}}
			noValidate
			autoComplete="off"
		>
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<label>Old Password*</label>
					<OutlinedInput
						placeholder="Old Password"
						required

						size="small"
						type="password"
						fullWidth
					/>
				</Grid>
				<Grid item xs={4}>
					<label>New Password*</label>
					<OutlinedInput
						placeholder="New Password"
						required

						type="password"
						size="small"
						fullWidth
					/>
				</Grid>
				<Grid item xs={4}>
					<label>Confirm Password*</label>
					<OutlinedInput
						placeholder="FConfirm Password"
						required
						type="password"

						size="small"
						fullWidth
					/>
				</Grid>
			</Grid>
			<div>
				<a href="#">Forgot Password ?</a>
			</div>
			<div className={styles.buttonPannel}>
				<Button
					variant="contained"
					color="secondary"
					sx={{
						':hover': {
							bgcolor: 'secondary.dark', // theme.palette.primary.main
							color: 'secondary.light',
						},
					}}
					className={styles.cancelBtn}>Change Password</Button>
			</div>
		</Box>

	);
}