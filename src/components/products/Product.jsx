import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGetProductByIdQuery } from "../../state/api";
import { Box, Rating, Paper, Typography, Card, CardContent, useTheme, CardActions, Button, BottomNavigation, BottomNavigationAction } from "@mui/material";
import Header from "../commons/Header";
import CircularProgress from "@mui/material/CircularProgress";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import EditProduct from "./EditProduct";
import DeleteProduct from "./DeleteProduct";

const Product = () => {
  let { id } = useParams();
  const theme = useTheme();

  const [openModal, setOpenModal] = useState(false);
  const [isEdit,setIsEdit] = useState(false)
  const { data, isLoading } = useGetProductByIdQuery(id);
  const handleClick = (e, v) => {
    if (v === 0) {
      setOpenModal(true)
      setIsEdit(true)
    } else {
      setOpenModal(true)
      setIsEdit(false)
    }
  }
  // let { brand, c1_meta, c2_meta, c3_meta, created_at, description, discount_flat, discount_percent, images, large_img, mrp, name, no_of_ratings, price, quantity, rating, recommendations, reviews, small_img, updated_at, variants, } = data;

  return (
    <Box m="1.5rem 2.5rem">
      {data && !isLoading ? (
        <Box display='flex' gap='2rem'>
          {/* IMAGE */}
          <Box sx={{ flex: 1 }} gap='2rem' >
            <Paper variant="outlined" elevation={0} sx={{ background: "none" }}>
              <Typography m='0.5rem'>Large Image</Typography>
              <img src={data.data.large_img} />
            </Paper>

          {/* DETAILS */}
          </Box>
          <Box sx={{ flex: 2 }} >
            <Header title={data.data.brand} subtitle={data.data.name} />
            <Card sx={{
              backgroundImage: "none",
              backgroundColor: theme.palette.background.alt,
              borderRadius: "22px",
              display: "flex",
              // flexDirection: 'column'
              justifyContent: 'space-between'
            }}>
              <CardContent sx={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                <Typography
                  color={theme.palette.secondary[400]}
                >
                  Price:  {Number(data.data.price)} /-
                </Typography>
                <Typography>Quantity: {data.data.quantity}</Typography>
                <Rating value={data.data.rating} readOnly />

                <Box>
                  <Typography
                    sx={{ fontSize: 24 }}
                    color={theme.palette.secondary[700]}
                  >
                    Meta Data
                  </Typography>
                  <Typography variant="h5" component="div">
                    {data.data.c1_meta}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {data.data.c2_meta}
                  </Typography>
                  <Typography variant="h5" component="div">
                    {data.data.c3_meta}
                  </Typography>
                </Box>
              {/* EDIT AND DELETE BUTTONS */}
              </CardContent>
              <CardActions >
                <BottomNavigation
                  sx={{
                    // backgroundImage: "none",
                    backgroundColor: theme.palette.background.alt,
                    color: theme.palette.primary.main,
                    display: "flex",
                    flexDirection: 'column',
                    gap: '2rem'
                  }}
                  showLabels
                  onChange={(e,v) => handleClick(e,v)}
                >
                  <BottomNavigationAction label="Edit" icon={<EditOutlinedIcon />} />
                  <BottomNavigationAction label="Delete" icon={<DeleteOutlineIcon />} />
                </BottomNavigation>
              </CardActions>
            </Card>
            <Paper variant="outlined" elevation={0} sx={{ background: "none", marginTop: '1rem', width: 'auto' }}>
              <Typography m='0.5rem'>Small Image</Typography>
              <img src={data.data.small_img} />
            </Paper>
            {/* EDIT AND DELETE MODALS */}
            {openModal ? (isEdit ? <EditProduct openModal={openModal} setOpenModal={setOpenModal} id={id} product={[data.data]}/> : <DeleteProduct openModal={openModal} setOpenModal={setOpenModal} id={id} product={[data.data]} />) : null}
          </Box>
        </Box>
      ) : (<CircularProgress color="secondary" />)}
    </Box>
  )

};

export default Product;
