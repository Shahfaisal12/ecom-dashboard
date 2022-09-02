import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  FormControl,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PropTypes from "prop-types";
import { IMaskInput } from "react-imask";
import Input from "@mui/material/Input";
import Paper from "@mui/material/Paper";

//Mask Function
const TextMaskCustom = React.forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(+00) 000-0000000"
      definitions={{
        "#92": /[1-9]/,
      }}
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

TextMaskCustom.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
// End Mask Function

//order Table
function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData("T-Shirt x 1", "$150"),
  createData("Polo T-Shirt x 1", "$250"),
  createData("Shoes x 1", "$350"),
  createData("Subtotal", "$750"),
  createData("Tax", "$35"),
  createData("Total", "$785"),
];
// End order Table

const CheckOutPage = () => {
  //Mask
  const [values, setValues] = React.useState({
    textmask: "(+92) 343-0000000",
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  //End mask

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={8} sx={{ my: 5 }}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Have a Coupon?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl sx={{ m: 1 }} variant="standard">
              <TextField
                id="coupon_code"
                label="Coupon Code"
                type="text"
                variant="standard"
                fullWidth
              />
              <Button variant="contained" color="error" sx={{ mt: 5 }}>
                Apply Coupon
              </Button>
            </FormControl>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ mt: 5 }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Shipping Address</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <FormControl sx={{ m: 1 }} variant="standard">
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    id="first_name"
                    label="First Name"
                    type="text"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="last_name"
                    label="Last Name"
                    type="text"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="company_name"
                    label="Company Name"
                    type="text"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6} sx={{ mt: "auto" }}>
                  <Input
                    value={values.textmask}
                    onChange={handleChange}
                    label="Phone"
                    name="textmask"
                    id="formatted-text-mask-input"
                    inputComponent={TextMaskCustom}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="email"
                    label="Email Address"
                    type="email"
                    variant="standard"
                    aria-describedby="my-helper-text"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="address"
                    label="Address"
                    type="text"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="country"
                    label="Select Your Country"
                    type="text"
                    variant="standard"
                    fullWidth
                  />
                </Grid>

                <Grid item xs={6}>
                  <TextField
                    id="appartment"
                    label="Appartment"
                    type="text"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="city"
                    label="City"
                    type="text"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="district"
                    label="District"
                    type="text"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    id="postal_code"
                    label="Postal Code"
                    type="text"
                    variant="standard"
                    fullWidth
                  />
                </Grid>
              </Grid>
            </FormControl>
          </AccordionDetails>
        </Accordion>
      </Grid>
      <Grid item xs={12} sm={12} md={4}  sx={{ my: 5 }}>
        <TableContainer component={Paper} sx={{mr:2}}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow sx={{ "td,th": { border: '1px solid rgba(224, 224, 224, 1)' } }}>
                <TableCell sx={{fontWeight:'bold', fontSize:'18px'}}>Product</TableCell>
                <TableCell align="right" sx={{fontWeight:'bold', fontSize:'18px'}}>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  orientation="vertical"
                  key={row.name}
                  sx={{ "td,th": { border: '1px solid rgba(224, 224, 224, 1)' } }}
                >
                  <TableCell component="th" scope="row" orientation="vertical">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default CheckOutPage;
