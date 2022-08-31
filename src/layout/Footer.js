import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box 
    sx={{
      paddingLeft: "20px",
      paddingRight: "20px",
      paddingBottom: "10px",
      paddingTop: "10px",
      background: "#F8FCFF",
      border: "1px solid #FAF1F1",
      // position: "fixed", 
      // width:"100%",
      position: "sticky",
      bottom: 0,
    }}>
      <Typography sx={{ textAlign: "center", }}>
        Copyright © Speed Force Digital - Digital Business Partners – 2006 -
        2022, All rights reserved.
      </Typography>
      </Box>
  );
};

export default Footer;
