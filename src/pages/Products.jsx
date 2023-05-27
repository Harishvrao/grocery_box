import React, { useState } from "react";
import { Box, Button, Pagination, useTheme } from "@mui/material";
import Header from "../components/commons/Header";
import { useGetProductsQuery } from "../state/api";
import CircularProgress from "@mui/material/CircularProgress";
import ProductTable from "../components/tables/ProductTable";
import ProductCard from "../components/cards/ProductCard";
import TableChartOutlinedIcon from "@mui/icons-material/TableChartOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import ProductPageSlider from "./../components/sliders/ProductPageSlider";

const Products = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(8);
  const [isTable, setIsTable] = useState(false);

  const { data, isLoading } = useGetProductsQuery({ page, limit });
  // const isNonMobile = useMediaQuery("(min-width: 1000px)");
  const theme = useTheme();

  return (
    <Box m="1.5rem 2.5rem">
      {/* Header */}
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

      {/* SINGLE PAGE */}
      {data && !isLoading ? (
        isTable ? (
          <ProductTable product={data.data || []} isLoading={isLoading} />
        ) : (
          <>
            <Box
              mt="20px"
              spacing={2}
              display="flex"
              justifyContent="space-between"
            >
              <Pagination
                count={data.pagination.total_pages}
                page={page}
                onChange={(e, v) => setPage(v)}
              />
              <ProductPageSlider limit={limit} setLimit={setLimit} />
            </Box>
            <ProductCard products={data?.data || []} isLoading={isLoading} />
            <Pagination
              sx={{ m: "20px" }}
              count={data.pagination.total_pages}
              page={page}
              onChange={(e, v) => setPage(v)}
            />
          </>
        )
      ) : (
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress color="secondary" />
        </Box>
      )}
    </Box>
  );
};

export default Products;
