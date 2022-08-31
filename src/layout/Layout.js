import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Grid } from "@mui/material";

const Layout = ({ children }) => {
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={3} md={2}>
          <Sidebar />
        </Grid>
        <Grid item xs={12} sm={9} md={10}> 
          <Header />
          <main>{children}</main>
          <Footer />
        </Grid>
      </Grid>
    </div>
  );
};

export default Layout;
