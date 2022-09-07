import React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ListItemIcon } from "@mui/material";
import ViewSidebarIcon from "@mui/icons-material/ViewSidebar";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [openStore, setOpenStore] = React.useState(true);
  const [openComms, setOpenComms] = React.useState(true);
  const [openReports, setOpenReports] = React.useState(true);
  const [openDesigns, setOpenDesigns] = React.useState(true);

  const storeHandleClick = () => {
    setOpenStore(!openStore);
  };
  const commsHandleClick = () => {
    setOpenComms(!openComms);
  };
  const reportHandleClick = () => {
    setOpenReports(!openReports);
  };
  const designHandleClick = () => {
    setOpenDesigns(!openDesigns);
  };

  const linkstyle = { textDecoration: "none", color: "#000000" };

  return (
    <List
      sx={{
        width: "16%",
        bgcolor: "background.paper",
        background: "#F1F1F4",
        height: "100vh",
        overflow: "auto",
        scrollbarWidth: "none",
        position: "fixed",
      }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          style={{ background: "#F1F1F4" }}
        >
          <ListItemIcon>
            <ViewSidebarIcon />
          </ListItemIcon>
        </ListSubheader>
      }
    >
      <Link to="/home" style={linkstyle}>
        <ListItemButton>
          <ListItemText primary="Home" />
        </ListItemButton>
      </Link>
      <Link to="/login" style={linkstyle}>
        <ListItemButton>
          <ListItemText primary="Login" />
        </ListItemButton>
      </Link>
      <ListItemButton onClick={storeHandleClick}>
        <ListItemText primary="Store" />
        {openStore ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openStore} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
        <Link to="/products" style={linkstyle}>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Products" />
          </ListItemButton>
        </Link>
          <Link to="singleproductdetail" style={linkstyle}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Single Product" />
            </ListItemButton>
          </Link>
          <Link to="/productdetail" style={linkstyle}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Product Detail" />
            </ListItemButton>
          </Link>
          <Link to="/mycart" style={linkstyle}>
            <ListItemButton sx={{ pl: 4 }} href="/mycart">
              <ListItemText primary="MyCart" />
            </ListItemButton>
          </Link>
          <Link to="/checkout" style={linkstyle}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="CheckOut" />
            </ListItemButton>
          </Link>
          <Link to="/orders" style={linkstyle}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Orders" />
            </ListItemButton>
          </Link>
          <Link to="/orderdetail" style={linkstyle}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Order Detail Page" />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
      <ListItemButton onClick={commsHandleClick}>
        <ListItemText primary="Comms" />
        {openComms ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openComms} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to="/pagenotfound" style={linkstyle}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Page Not Found" />
            </ListItemButton>
          </Link>
          <Link to="" style={linkstyle}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Comm2" />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
      <ListItemButton onClick={reportHandleClick}>
        <ListItemText primary="Reports" />
        {openReports ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openReports} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to="" style={linkstyle}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Report1" />
            </ListItemButton>
          </Link>
          <Link to="" style={linkstyle}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Report2" />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
      <ListItemButton onClick={designHandleClick}>
        <ListItemText primary="Design" />
        {openDesigns ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={openDesigns} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <Link to="" style={linkstyle}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Design1" />
            </ListItemButton>
          </Link>
        </List>
      </Collapse>
    </List>
  );
};

export default Sidebar;
