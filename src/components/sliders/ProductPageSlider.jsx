import React from "react";
import Slider from "@mui/material/Slider";
import { styled, useTheme } from "@mui/material/styles";

import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

const ProductPageSlider = ({ limit, setLimit }) => {
  const theme = useTheme();

  return (
    <Box sx={{ width: "25%", display: "flex" }}>
      <Typography variant="caption" display="block">
        Page Limit
      </Typography>
      <Slider
        valueLabelDisplay="auto"
        aria-labelledby={String(limit)}
        defaultValue={limit}
        onChange={(e, v) => setLimit(v)}
        min={8}
        max={80}
        sx={{
          color: theme.palette.secondary[100],
          height: 8,
          "& .MuiSlider-track": {
            border: "none",
          },
          "& .MuiSlider-thumb": {
            height: 20,
            width: 20,
            backgroundColor: theme.palette.primary.dark,
            border: "2px solid currentColor",
            "&:focus, &:hover, &.Mui-active, &.Mui-focusVisible": {
              boxShadow: "inherit",
            },
            "&:before": {
              display: "none",
            },
          },
          "& .MuiSlider-valueLabel": {
            color: theme.palette.primary.main,
            lineHeight: 1.2,
            fontSize: 12,
            fontWeight: "bold",
            background: "unset",
            padding: 0,
            width: 22,
            height: 22,
            borderRadius: "50% 50% 50% 0",
            backgroundColor: theme.palette.secondary[100],
            transformOrigin: "bottom left",
            transform: "translate(50%, -100%) rotate(-45deg) scale(0)",
            "&:before": { display: "none" },
            "&.MuiSlider-valueLabelOpen": {
              transform: "translate(50%, -100%) rotate(-45deg) scale(1)",
            },
            "& > *": {
              transform: "rotate(45deg)",
            },
          },
        }}
      />
    </Box>
  );
};
export default ProductPageSlider;
