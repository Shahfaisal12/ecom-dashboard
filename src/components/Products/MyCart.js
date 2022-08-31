import styled from "@emotion/styled";
import {
  Box,
  Button,
  ButtonBase,
  ButtonGroup,
  Card,
  CardContent,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { Stack } from "@mui/system";
import { useState } from "react";
import BreadCrumb from "./BreadCrumb";

const card = [
  {
    id: "1",
    product_image: "../assets/image/headphoneblack.jpg",
    product_name: "Iphone",
    product_qty: 1,
    product_price: "$34",
  },
  {
    id: "2",
    product_image: "../assets/image/camera.jpg",
    product_name: "EarPhone",
    product_qty: 1,
    product_price: "$84",
  },
  {
    id: "3",
    product_image: "../assets/image/earphone1.jpg",
    product_name: "HeadPhone",
    product_qty: 1,
    product_price: "$12",
  },
];

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

//Main function
const MyCart = (id, quantity, state, action) => {
  //Increment Number // Decrement Number
  const [cart, setCart] = useState(card);

  // Increment the item
  const handleIncrement = (id) => {
    const cartTemp = [...cart];

    // find product inisde cat
    const foundIndex = cartTemp.findIndex((obj) => {
      return obj.id === id;
    });

    // update its quantity.
    cartTemp[foundIndex].product_qty += 1;
    setCart(cartTemp);
  };

  // Decrement the item
  const handleDecrement = (id) => {
    const cartTemp = [...cart];
    // find product inisde cat
    const foundIndex = cartTemp.findIndex((obj) => {
      return obj.id === id;
    });

    //If equal to 1 so Don't decrement Further
    if (cartTemp[foundIndex].product_qty === 1) {
      return;
    }
    // update its quantity.
    cartTemp[foundIndex].product_qty -= 1;
    setCart(cartTemp);
  };
  // End//Increment Number // Decrement Number

  // to delete the indv. elements from an Item Cart
  const removeItem = (id) => {
    return setCart({
      type: "REMOVE_ITEM",
      payload: id,
    });
  };

  if (cart.type === "REMOVE_ITEM") {
    return {
      ...state,
      item: state.cartTemp.filter((curElem) => {
        return curElem.id !== cart.payload;
      }),
    };
  }
  //End Delete item

  return (
    <>
      <BreadCrumb />

      <Grid container spacing={3} sx={{ pr: 2, mb: 5, mt: 2 }}>
        <Grid item xs={12} sm={12} md={8}>
          <Box>
            {cart.map((item, idx) => (
              <Box>
                <Grid container spacing={2} key={item.id}>
                  <Grid item>
                    <ButtonBase sx={{ width: 84, height: 120 }}>
                      <Img alt="complex" src={item.product_image} />
                    </ButtonBase>
                  </Grid>
                  <Grid item xs={12} sx={{ alignSelf: "center" }} sm container>
                    <Grid item xs>
                      <Typography variant="body2" gutterBottom>
                        {item.product_name}
                      </Typography>
                    </Grid>
                    <Grid item xs>
                      <ButtonGroup
                        variant="outlined"
                        aria-label="outlined primary button group"
                      >
                        <Button onClick={() => handleDecrement(item.id)}>
                          -
                        </Button>
                        <Button>{item.product_qty}</Button>
                        <Button onClick={() => handleIncrement(item.id)}>
                          +
                        </Button>
                      </ButtonGroup>
                    </Grid>
                    <Grid item xs>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        textAlign={"center"}
                      >
                        {item.product_price}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <IconButton
                        aria-label="delete"
                        size="small"
                        onClick={() => removeItem(id)}
                      >
                        <CloseOutlinedIcon fontSize="inherit" />
                      </IconButton>
                    </Grid>
                  </Grid>
                </Grid>
                <Divider />
              </Box>
            ))}
          </Box>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <Card
            sx={{ boxShadow: "none", background: "#F2F3F5", borderRadius: "0" }}
          >
            <CardContent>
              <Typography
                sx={{ mb: 3, fontWeight: "bold" }}
                variant="h6"
                component="div"
                gutterBottom
              >
                Summary
              </Typography>
              <Stack
                direction="row"
                spacing={2}
                sx={{ justifyContent: "space-between", mb: 2 }}
              >
                <Typography color="text.secondary">Order total</Typography>
                <Typography variant="body2">$34.32</Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                sx={{ justifyContent: "space-between", mb: 2 }}
              >
                <Typography color="text.secondary">Promo code</Typography>
                <Typography
                  variant="body2"
                  sx={{ background: "#ffffff", p: 0.5, alignSelf: "center" }}
                >
                  SALE22
                </Typography>
              </Stack>
              <Stack
                direction="row"
                spacing={2}
                sx={{ justifyContent: "space-between" }}
              >
                <Typography color="text.secondary">Shipping</Typography>
                <Typography variant="body2">$92.32</Typography>
              </Stack>
            </CardContent>
          </Card>
          <Card
            sx={{
              boxShadow: "none",
              background: "#F7F6FB",
              borderRadius: "0",
              borderTop: " 4px  dashed #FFFFFF",
            }}
          >
            <CardContent>
              <Stack
                direction="row"
                spacing={2}
                sx={{ justifyContent: "space-between" }}
              >
                <Typography color="text.secondary">Sub total</Typography>
                <Typography variant="body2">$2.01,32</Typography>
              </Stack>
            </CardContent>
          </Card>
          <Button
            size="medium"
            variant="contained"
            sx={{ float: "right", mt: 2 }}
            color="error"
          >
            CheckOut Items
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default MyCart;
