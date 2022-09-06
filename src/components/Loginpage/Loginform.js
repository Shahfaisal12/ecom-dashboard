import React, { useEffect, useState } from "react";
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
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

//   ********************************** Style **************************************************
const paperStyle = {
  padding: 20,
  width: 300,
  margin: "20px auto",
};
const btnstyle = { margin: "8px 0", background: "#1976d2", color: "#FFFFFF" };
const linkstyle = { color: "#1976d2" };

//   ********************************** Main Function **************************************************
const Loginform = () => {
  //   USe states
  const initialValues = { username: "", email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  //   ********************************** Form Validations ***************************************************
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  });
  const validate = (values) => {
    const errors = {};

    //    ********************************** username Validation ***************************************************
    if (!values.username) {
      errors.username = "Username is required!";
    }

    //    ********************************** Password Validation ***************************************************
    const passwordRegex = /(?=.*[0-9])/;
    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be 8 characters long.";
    } else if (!passwordRegex.test(values.password)) {
      errors.password = "Invalid password. Must contain one number.";
    }
    return errors;
  };
  //    ********************************** End form Validation ***************************************************

  return (
    <>
      {
        Object.keys(formErrors).length === 0 && isSubmit
          ? alert("Signed in successfully")
          : ""
        //  ( <pre>{JSON.stringify(formValues, undefined, 2)}</pre> )
      }
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" />
          <h2>Sign In</h2>
        </Grid>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Username"
                type="text"
                placeholder="Enter User Name"
                fullWidth
                name="username"
                onChange={handleChange}
                value={formValues.username}
              />
              <Typography color="error" variant="caption">
                {formErrors.username}{" "}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Input
                fullWidth
                id="standard-adornment-password"
                type="password"
                value={formValues.password}
                onChange={handleChange}
                name="password"
                placeholder="Password"
              />
              <Typography
                color="error"
                variant="caption"
                style={{ lineHeight: "19px" }}
              >
                {formErrors.password}{" "}
              </Typography>
            </Grid>
          </Grid>
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" variant="contained" style={btnstyle} fullWidth>
            Sign in
          </Button>
        </form>
        <Typography>
          <Link href="#" style={linkstyle}>
            Forgot password ?
          </Link>
        </Typography>
        <Typography style={{ paddingBottom: "40px" }}>
          Do you have an account ?
          <Link href="/signupfrom" style={linkstyle}>
            Sign Up
          </Link>
        </Typography>
      </Paper>
    </>
  );
};
export default Loginform;
