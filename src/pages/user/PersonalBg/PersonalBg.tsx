import { AddPhotoAlternate } from "@mui/icons-material";
import { CardActionArea, Fab, } from "@mui/material";
import React, { useState } from "react";
import styles from './PersonalBg.module.scss';
import bg from './profile-bg.jpeg';

export default function PersonalBg(): JSX.Element {
	const [image, setImage] = useState({
		mainState: "initial",
		selectedFile: bg

	});
	const handleUploadClick = (event: any): void => {

		const file = event.target.files[0];
		const reader = new FileReader();
		reader.onloadend = function (e) {
			// convert image file to base64 string

			console.log(reader.result);
			console.log('hh');
			setImage({
				mainState: "uploaded",
				selectedFile: `${reader.result}`
			});

		};

		if (file) {

			reader.readAsDataURL(file);
		}
		setImage({
			mainState: "uploaded",
			selectedFile: `${reader.result}`
		});
	};



	const imageResetHandler = () => {

		setImage({
			mainState: "initial",
			selectedFile: ''
		});
	};


	return (
		<div className={styles.personalBg}>

			<input
				accept="image/*"
				id="contained-button-file"
				className={styles.openFile}
				multiple
				type="file"
				onChange={handleUploadClick}
			/>
			<label htmlFor="contained-button-file" className={styles.openFileIcon}>
				<Fab component="span">
					<AddPhotoAlternate />
				</Fab>
			</label>
			<CardActionArea onClick={imageResetHandler}>
				<img
					width="100%"
					src={image.selectedFile}
				/>
			</CardActionArea>

		</div>
	);
}
