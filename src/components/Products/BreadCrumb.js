import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

const BreadCrumb = () => {
  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  return (
    <div style={{ margin: "20px" }}>
      <Box sx={{ width: "100%", marginBottom: "20px" }}>
        <div role="presentation" onClick={handleClick}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/home">
              Home
            </Link>
            <Link
              underline="hover"
              color="inherit"
              href="/products"
            >
              Shop
            </Link>
          </Breadcrumbs>
        </div>
      </Box>
    </div>
  );
};

export default BreadCrumb;
