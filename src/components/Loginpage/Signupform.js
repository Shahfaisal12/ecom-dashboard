import React from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  Input,
} from "@material-ui/core";
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

  const paperStyle = {
    padding: 20,
    height: "75vh",
    width: 280,
    margin: "20px auto",
  };
  const btnstyle = { margin: "8px 0", background: "#1976d2", color: "#FFFFFF" };
  const linkstyle = { color: "#1976d2" };

const Signupform = () => {

   //Password Show Hide
   const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
    // End Password Show/hide

  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"></Avatar>
          <h2>Sign Up</h2>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              label="First Name"
              placeholder="Enter First Name"
              required
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              label="Last Name"
              placeholder="Enter Last Name"
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Email"
              placeholder="Enter Email"
              type="email"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
          <Input
          fullWidth
          required
          id="standard-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }/>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox name="checkedB" color="primary" />}
              label="Remember me"
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained" style={btnstyle} fullWidth>
          Sign Up
        </Button>
        <Typography>
          Do you have an account ?
          <Link href="/loginform" primary style={linkstyle}>
            Signin Page
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default Signupform;
