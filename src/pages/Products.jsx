import React, { useState } from "react";
import { Box, Button, useTheme } from "@mui/material";
import Header from "../components/Header";
import { useGetProductsQuery } from "../state/api";
import CircularProgress from "@mui/material/CircularProgress";
import ProductTable from "../components/tables/ProductTable";
import ProductCard from "../components/cards/ProductCard";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";

const Products = () => {
  const { data, isLoading } = useGetProductsQuery();
  const [isTable, setIsTable] = useState(true);
  // const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const theme = useTheme();
  return (
    <Box m="1.5rem 2.5rem">
      <Box display="flex" justifyContent="space-between">
        <Header title="PRODUCTS" subtitle="See your list of products." />
        <Button
          variant="outlined"
          sx={{ border: "none", color: theme.palette.secondary.light }}
          startIcon={
            isTable ? (
              <DashboardCustomizeOutlinedIcon />
            ) : (
              <TableChartOutlinedIcon />
            )
          }
          onClick={() => setIsTable(e => !e)}
        >
          {isTable ? "Card View" : "Table View"}
        </Button>
      </Box>
      {data || !isLoading ? (
        isTable ? (
          <ProductTable product={data} isLoading={isLoading} />
        ) : (
          <ProductCard product={data} isLoading={isLoading} />
        )
      ) : (
        <Box sx={{ display: "flex" }}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default Products;
