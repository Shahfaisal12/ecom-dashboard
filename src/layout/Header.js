import * as React from "react";
import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";

import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import DataUsageOutlinedIcon from "@mui/icons-material/DataUsageOutlined";

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ background: "#FFFFFF", color: "#000000", boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight:'bold' }}>
            Orders
          </Typography>
          <Button color="inherit">
            <SearchOutlinedIcon />
          </Button>
          <Button color="inherit">
            <DataUsageOutlinedIcon />
          </Button>
          <Button color="inherit">
            <Avatar alt="Remy Sharp" src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" sx={{ width: 24, height: 24 }} />
          </Button>
          <Fab size="small" color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
