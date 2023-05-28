import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
// import SingelProduct from "../SingelProduct";

const Product = ({ productData }) => {
  let { id, name, brand, images, quantity, price, mrp, rating, review } =
    productData;
  const theme = useTheme();
  const navigate = useNavigate();
  // const [open, setOpen] = useState(false);

  // (

  // <SingelProduct
  //   open={open}
  //   setOpen={setOpen}
  //   product={productData}
  //   key={id}
  // />
  // );
  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "22px",
        display: "flex",
        cursor:'pointer'
      }}
      onClick={() => navigate(`/products/${id}`)}
    >
      
      <CardMedia
        component="img"
        sx={{
          width: "50%",
          height: "100%",
          borderRadius: "22px 12px 12px 22px",
        }}
        image={images[0]}
        title={name}
        alt={name}
        flex="1"
      />
      <Box flex="1">
        <CardContent sx={{ width: "91%", height: "100%" }}>
          <Typography
            sx={{ fontSize: 14 }}
            color={theme.palette.secondary[700]}
            gutterBottom
          >
            {brand}
          </Typography>
          <Typography variant="h5" component="div">
            {name}
          </Typography>
          <Typography
            sx={{ mb: "1.5rem" }}
            color={theme.palette.secondary[400]}
          >
            Rs. {Number(price)}
          </Typography>

          {/* <Typography variant="body2">{id}</Typography> */}
          <Typography>MRP: {mrp}</Typography>
          <Typography>Quantity: {quantity}</Typography>
          <Rating value={rating} readOnly />
        </CardContent>
      </Box>
    </Card>
  );
};

const ProductCard = ({ products, isLoading }) => {
  const isNonMobile = useMediaQuery("(min-width: 1000px)");

  return (
    <Box
      mt="20px"
      display="grid"
      gridTemplateColumns="repeat(2, minmax(0, 1fr))"
      justifyContent="space-between"
      rowGap="20px"
      columnGap="1.33%"
      sx={{
        "& > div": { gridColumn: isNonMobile ? undefined : "span 2" },
      }}
    >
      {products?.map(product => (
        <Product productData={product} key={product.id} />
      ))}
    </Box>
  );
};

export default ProductCard;
