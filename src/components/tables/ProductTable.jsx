import React from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

const ProductTable = ({ product, isLoading }) => {
  const theme = useTheme();
  const columns = [
    {
      field: "id",
      headerName: "ID",
      headerAlign: "center",
      flex: 1,
      align: "right",
      type: "number",
    },
    {
      field: "name",
      headerName: "NAME",
      headerAlign: "center",
      flex: "grow",
    },
    {
      field: "brand",
      headerName: "BRAND",
      headerAlign: "center",
    },
    {
      field: "quantity",
      headerName: "QUANTITY",
      headerAlign: "center",
    },
    {
      field: "price",
      headerName: "PRICE",
      headerAlign: "center",
      align: "right",
      type: "number",
    },
    {
      field: "c1_meta",
      headerName: "M1",
      headerAlign: "center",
    },
    {
      field: "c2_meta",
      headerName: "M2",
      headerAlign: "center",
    },
    {
      field: "c3_meta",
      headerName: "M3",
      headerAlign: "center",
    },
    {
      field: "mrp",
      headerName: "MRP",
      headerAlign: "center",
      align: "right",
      type: "number",
    },
    // {
    //   field: "description",
    //   headerName: "DESCRIPTION",
    //   headerAlign: "center",
    // },
    {
      field: "rating",
      headerName: "RATING",
      headerAlign: "center",
      align: "right",
      type: "number",
    },
    {
      field: "reviews",
      headerName: "REVIEWS",
      headerAlign: "center",
      align: "right",
      type: "number",
    },
    {
      field: "recommendations",
      headerName: "RECOMMENDATIONS",
      headerAlign: "center",
      align: "right",
      type: "number",
    },
    {
      field: "discount_percent",
      headerName: "DISCOUNT %",
      headerAlign: "center",
      align: "right",
      type: "number",
    },
    {
      field: "discount_flat",
      headerName: "DISCOUNT FLAT",
      headerAlign: "center",
      align: "right",
      type: "number",
    },
    {
      field: "no_of_ratings",
      headerName: "NO OF RATING",
      headerAlign: "center",
      align: "right",
      type: "number",
    },
    {
      field: "created_at",
      headerName: "CREATED AT",
      headerAlign: "center",
    },
    {
      field: "updated_at",
      headerName: "UPDATED AT",
      headerAlign: "center",
    },
    // {
    //   field: "small_img",
    //   headerName: "ID",
    // },
  ];
  return (
    <Box
      mt="20px"
      height="75vh"
      width="100%"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: theme.palette.background.alt,
          color: theme.palette.secondary[100],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: theme.palette.primary.light,
        },
        "& .MuiDataGrid-footerContainer": {
          backgroundColor: theme.palette.background.alt,
          color: theme.palette.secondary[100],
          borderTop: "none",
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${theme.palette.secondary[200]} !important`,
          margin: "0 0 10px  0",
        },
      }}
    >
      <DataGrid
        loading={isLoading}
        rows={product}
        columns={columns}
        components={{ Toolbar: GridToolbar }}
      />
    </Box>
  );
};

export default ProductTable;
