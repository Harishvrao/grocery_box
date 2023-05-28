import { BottomNavigation, BottomNavigationAction, Box, Button, Card, CardActions, CardContent, CardMedia, Modal, Typography, useTheme } from "@mui/material"
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import BackspaceOutlinedIcon from '@mui/icons-material/BackspaceOutlined';

const EditProduct = ({ openModal, setOpenModal, product }) => {
    let { name, large_img, small_img,id } = product[0]
    const theme = useTheme();
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "90%",
        height: "90%",
        bgcolor: `${theme.palette.background.default}`,
        boxShadow: 24,
        p: 4,
        borderRadius: '0.5rem'
    };
    return (
        <Modal
            open={openModal}
            onClose={() => setOpenModal(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box style={style} sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1, backgroundColor: theme.palette.background.alt }} >
                <Box sx={{ width: '25%' }}>

                    <CardMedia
                        component="img"
                        sx={{ borderRadius: '1rem', objectFit: "cover", mb:'1rem' }}
                        image={large_img}
                        alt={name}
                    />
                    <CardMedia
                        component="img"
                        sx={{ borderRadius: '1rem', objectFit: "cover" }}
                        image={small_img}
                        alt={name}
                    />
                </Box>
                <CardContent sx={{ flex: '2 ' }}>
                    {/* <Typography component="div" variant="h5" mb='1rem'>
                        Confirm to Delete :
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        {name}
                    </Typography> */}
                </CardContent>
                <CardActions sx={{}} >
                    <BottomNavigation
                        sx={{
                            display: "flex",
                            flexDirection: 'column',
                            gap: '2rem',
                            background: "none"
                        }}
                        showLabels
                        onChange={(e, v) => v === 1 ? setOpenModal(false) : null}
                    >
                        <BottomNavigationAction label="Clear" icon={<BackspaceOutlinedIcon />} />
                        <BottomNavigationAction label="Cancel" icon={<ClearOutlinedIcon />} />
                        <BottomNavigationAction label="Save" icon={<CheckOutlinedIcon />} />
                    </BottomNavigation>
                </CardActions>
            </Box>
        </Modal>
    )
}

export default EditProduct