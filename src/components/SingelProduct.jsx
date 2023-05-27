import {
  Box,
  Button,
  CardActions,
  CardContent,
  Collapse,
  Modal,
  Typography,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

const SingelProduct = ({ open, setOpen, product }) => {
  const theme = useTheme();
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "90%",
    bgcolor: `${theme.palette.background.default}`,
    border: `2px solid ${theme.palette.secondary[300]}`,
    boxShadow: 24,
    p: 4,
  };
  const [isExpanded, setIsExpanded] = useState(false);
  let { id, name, brand, images, quantity, price, mrp, rating, review } =
    product;
  console.log(product);
  return (
    <Modal
      open={open}
      onClose={() => {
        setOpen(false);
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <CardActions>
          <Button
            variant="primary"
            size="small"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            See More
          </Button>
        </CardActions>
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
      </Box>
    </Modal>
  );
};

export default SingelProduct;
