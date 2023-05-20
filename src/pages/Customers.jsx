import React from "react";
import { Box } from "@mui/material";
// import { useGetCustomersQuery } from "../state/api";
import Header from "../components/commons/Header";
// import { DataGrid } from "@mui/x-data-grid";

const Customers = () => {
  //   const theme = useTheme();
  //   const { data, isLoading } = useGetCustomersQuery();

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="CUSTOMERS" subtitle="List of Customers" />
    </Box>
  );
};

export default Customers;
