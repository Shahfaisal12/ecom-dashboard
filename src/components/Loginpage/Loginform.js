import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const paperStyle = {
  padding: 20,
  height: "74vh",
  width: 280,
  margin: "20px auto",
};
const btnstyle = { margin: "8px 0", background: "#1976d2", color: "#FFFFFF" };
const linkstyle = { color: "#1976d2" };


const Loginform = () => {
 
  return (
    <>
    <Paper elevation={10} style={paperStyle}>
    <Grid align="center">
      <Avatar src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"></Avatar>
      <h2>Sign In</h2>
    </Grid>
    <TextField
      label="Username"
      placeholder="Enter username"
      fullWidth
      required
    />
    <TextField
      label="Password"
      placeholder="Enter password"
      type="password"
      fullWidth
      required
    />
    <FormControlLabel
      control={<Checkbox name="checkedB" color="primary" />}
      label="Remember me"
    />
    <Button type="submit" variant="contained" style={btnstyle} fullWidth>
      Sign in
    </Button>
    <Typography>
      <Link href="#" style={linkstyle}>
        Forgot password ?
      </Link>
    </Typography>
    <Typography>
      Do you have an account ?
      <Link href="/signupfrom" primary style={linkstyle}>
        Sign Up
      </Link>
    </Typography>
  </Paper>
    </>
  );
};
export default Loginform;