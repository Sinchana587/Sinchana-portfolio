import React, { useState } from "react"
import { Modal, IconButton, Box, Fade, Backdrop, Zoom, Typography } from "@mui/material"
import CloseIcon from "@mui/icons-material/Close"
import FullscreenIcon from "@mui/icons-material/Fullscreen"

const Certificate = ({ ImgSertif, title, issuer, certificateUrl }) => {
	const [open, setOpen] = useState(false)

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	return (
		<Box component="div" sx={{ width: 370, height: 440, p: 2, borderRadius: 3, boxShadow: 3, bgcolor: '#181828', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start', position: 'relative', m: '0 auto' }}>
			{/* Certificate Image */}
			<Box sx={{ width: '100%', height: 210, cursor: 'pointer', mb: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={handleOpen}>
				<img
					className="certificate-image"
					src={ImgSertif}
					alt={title || 'Certificate'}
					style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8, boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
				/>
			</Box>
			{/* Title and Issuer */}
			{title && (
				<Typography
					variant="h6"
					sx={{
						color: 'transparent',
						background: 'linear-gradient(90deg, #c7d2fe, #fbc2eb)',
						WebkitBackgroundClip: 'text',
						backgroundClip: 'text',
						fontWeight: 700,
						fontSize: '1.25rem',
						mt: 1,
						textAlign: 'center',
						mb: 0.5,
						fontFamily: 'inherit',
					}}
				>
					{title}
				</Typography>
			)}
			{issuer && <Typography variant="body2" sx={{ color: '#bdbdbd', mb: 1, textAlign: 'center', fontWeight: 400 }}>{issuer}</Typography>}
			{/* View Certificate Button */}
			{certificateUrl && (
				<a href={certificateUrl} target="_blank" rel="noopener noreferrer" style={{ width: '100%', textDecoration: 'none', position: 'absolute', left: 0, bottom: 18, padding: '0 16px' }}>
					<button
						style={{
							width: '100%',
							padding: '10px 0',
							borderRadius: 10,
							background: 'rgba(255,255,255,0.08)',
							color: '#fff',
							fontWeight: 600,
							border: '1.5px solid rgba(255,255,255,0.15)',
							boxShadow: '0 4px 24px 0 rgba(99,102,241,0.10)',
							fontSize: 17,
							backdropFilter: 'blur(8px)',
							WebkitBackdropFilter: 'blur(8px)',
							transition: 'all 0.2s',
							cursor: 'pointer',
						}}
						onMouseOver={e => e.currentTarget.style.background = 'rgba(99,102,241,0.18)'}
						onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
					>
						View Certificate
					</button>
				</a>
			)}
			{/* Modal for full image view (unchanged) */}
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 300,
					sx: {
						backgroundColor: "rgba(0, 0, 0, 0.9)",
						backdropFilter: "blur(5px)",
					},
				}}
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					margin: 0,
					padding: 0,
					"& .MuiBackdrop-root": {
						backgroundColor: "rgba(0, 0, 0, 0.9)",
					},
				}}
			>
				<Box
					sx={{
						position: "relative",
						width: "auto",
						maxWidth: "90vw",
						maxHeight: "90vh",
						m: 0,
						p: 0,
						outline: "none",
						"&:focus": {
							outline: "none",
						},
					}}
				>
					<IconButton
						onClick={handleClose}
						sx={{
							position: "absolute",
							right: 16,
							top: 16,
							color: "white",
							bgcolor: "rgba(0,0,0,0.6)",
							zIndex: 1,
							padding: 1,
							"&:hover": {
								bgcolor: "rgba(0,0,0,0.8)",
								transform: "scale(1.1)",
							},
						}}
						size="large"
					>
						<CloseIcon sx={{ fontSize: 24 }} />
					</IconButton>
					<img
						src={ImgSertif}
						alt={title || 'Certificate Full View'}
						style={{
							display: "block",
							maxWidth: "100%",
							maxHeight: "90vh",
							margin: "0 auto",
							objectFit: "contain",
						}}
					/>
				</Box>
			</Modal>
		</Box>
	)
}

export default Certificate
