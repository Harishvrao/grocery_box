import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Collapse,
  Rating,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Product = ({
  id,
  name,
  brand,
  images,
  quantity,
  price,
  mrp,
  rating,
  review,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <Card
      sx={{
        backgroundImage: "none",
        backgroundColor: theme.palette.background.alt,
        borderRadius: "22px",
        display: "flex",
      }}
      onClick={(e, v) => console.log(id)}
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
          {/* <CardActions>
            <Button
              variant="primary"
              size="small"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              See More
            </Button>
          </CardActions> */}
          <Collapse
            in={isExpanded}
            timeout="auto"
            unmountOnExit
            sx={{
              color: theme.palette.neutral[300],
            }}
          >
            <CardContent>
              <Typography>MRP: {mrp}</Typography>
              <Typography>Quantity: {quantity}</Typography>
              <Typography>Yearly Sales This Year: {review}</Typography>
              <Typography>Yearly Units Sold This Year: {review}</Typography>
            </CardContent>
          </Collapse>
        </CardContent>
      </Box>
    </Card>
  );
};

const ProductCard = ({ product, isLoading }) => {
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
      {product?.map(
        ({ id, name, brand, images, quantity, price, mrp, rating, review }) => (
          <Product
            key={id}
            id={id}
            name={name}
            brand={brand}
            images={images}
            quantity={quantity}
            price={price}
            mrp={mrp}
            rating={rating}
            review={review}
          />
        )
      )}
    </Box>
  );
};

export default ProductCard;
