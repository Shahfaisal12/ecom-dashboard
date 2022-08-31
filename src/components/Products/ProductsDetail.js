import { Box, Button, Grid, ImageList, ImageListItem, Stack, TextField, Typography } from "@mui/material";

import * as React from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { styled } from '@mui/material/styles';

//Image List
const itemData = [
  {
    img: "../assets/image/subproduct/shoes1.jpg",
    title: "Shoes",
    rows: 1,
    cols: 1,
  },
  {
    img: "../assets/image/subproduct/shoes.jpg",
    title: "Shoes",
    rows: 5,
    cols: 3,
  },
  {
    img: "../assets/image/subproduct/shoes3.jpg",
    title: "Shoes",
    rows: 1,
    cols: 1,
  },

  {
    img: "../assets/image/subproduct/shoes4.jpg",
    title: "Shoes",
    rows: 1,
    cols: 1,
  },

  {
    img: "../assets/image/subproduct/shoes5.jpg",
    title: "Shoes",
    rows: 1,
    cols: 1,
  },

  {
    img: "../assets/image/subproduct/shoes2.jpg",
    title: "Shoes",
    rows: 1,
    cols: 1,
  },
];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

//End Image list

// rating

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "(Poor+)",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
}
// End Rating

//Custom Rating
const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
  });
  //End Custom Rating

const ProductsDetail = () => {
  //Rating
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  //end rating

  return (
    <Grid container rowSpacing={1} sx={{mt:2, mb:5}} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      <Grid item xs={6}>
        <ImageList
          sx={{ width: 500,  }}
          variant="quilted"
          cols={4}
          rowHeight={121}
        >
          {itemData.map((item) => (
            <ImageListItem
              key={item.img}
              cols={item.cols || 1}
              rows={item.rows || 1}
            >
              <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ width: "100%" }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: "bold" }}
            display="block"
            gutterBottom
          >
            Shoes
          </Typography>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold" }}
            display="block"
            gutterBottom
          >
            $25.00
          </Typography>

          <Box
            sx={{
              width: 200,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Rating
              name="hover-feedback"
              value={value}
              precision={0.5}
              getLabelText={getLabelText}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              onChangeActive={(event, newHover) => {
                setHover(newHover);
              }}
              emptyIcon={
                <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
              }
            />
            {value !== null && (
              <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
            )}
          </Box>

          <Box sx={{ width: "100%", mt: 5, maxWidth:400 }}>
            <Typography variant="p" gutterBottom>
              Quem tota utroque mea ea, nam blandit disputando te, sale volutpat
              pri in. Mutat eleifend per ut, has ut nusquam accumsan mnesarchum.
              Solum reque signiferumque ius ea. In primis eripuit menandri his,
              usu modus munere at eos.
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} sx={{alignItems:"center", mt:5}}>
          <TextField
          id="outlined-number-input"
          type="number"
          autoComplete="current-number"
        />
          <Button variant="outlined">Add to Cart</Button>
</Stack>

<Box
            sx={{
              width: 500,
              display: "flex",
              alignItems: "center",
              mt:5
            }}
            >
            <StyledRating
            name="customized-color"
            defaultValue={2}
            getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
            precision={0.5}
            icon={<FavoriteIcon fontSize="inherit" />}
            emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
            <Typography component="legend">The product is already in your wishlist!</Typography>
          </Box>

          <Box sx={{ width: "100%", my: 5, maxWidth:400 }}>
          <Typography variant="p" display="block" gutterBottom>
          SKU: 061
        </Typography>
        <Typography variant="p" display="block" gutterBottom>
        Category: Flour
        </Typography>
        <Typography variant="p" display="block" gutterBottom>
        Tag: Cooking
        
        </Typography>
        </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductsDetail;
