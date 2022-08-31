import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  CardActionArea,
  CardActions,
  TablePagination,
} from "@mui/material";
import { Grid } from "@mui/material";
import BreadCrumb from "./BreadCrumb";
import ProductTittle from "./ProductTittle";
import PriceRange from "./PriceRange";

const ProductPage = (props) => {
  // Used Page Nevigation
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  //........end Page Nevigation

  const productData = [
    {
      id: "1",
      productName: "Shoes",
      ProductImage: "../assets/image/shoes.jpg",
      ProductPrice: "$88.98",
    },
    {
      id: "2",
      productName: "Cycle H-12",
      ProductImage: "../assets/image/cycle.jpg",
      ProductPrice: "$98.98",
    },
    {
      id: "3",
      productName: "Earphone Bag H9",
      ProductImage: "../assets/image/earphonebag.jpg",
      ProductPrice: "$99.98",
    },
    {
      id: "4",
      productName: "telephone A2",
      ProductImage: "../assets/image/telephone.jpg",
      ProductPrice: "$121.18",
    },
    {
      id: "5",
      productName: "Camera H4",
      ProductImage: "../assets/image/camera.jpg",
      ProductPrice: "$123.34",
    },
    {
      id: "6",
      productName: "Earphone",
      ProductImage: "../assets/image/iphone.jpg",
      ProductPrice: "$12.12",
    },
    {
      id: "7",
      productName: "Bag",
      ProductImage: "../assets/image/bag.jpg",
      ProductPrice: "$78.2",
    },
    {
      id: "8",
      productName: "Earphone A-21",
      ProductImage: "../assets/image/earphone1.jpg",
      ProductPrice: "$12.81",
    },
    {
      id: "9",
      productName: "Earphone",
      ProductImage: "../assets/image/earphone.jpg",
      ProductPrice: "$21.98",
    },
    {
      id: "10",
      productName: "Head Phone",
      ProductImage: "../assets/image/headphoneblack.jpg",
      ProductPrice: "$32.11",
    },
    {
      id: "11",
      productName: "Watch",
      ProductImage: "../assets/image/watchblack.jpg",
      ProductPrice: "$44.22",
    },
    {
      id: "12",
      productName: "Watch",
      ProductImage: "../assets/image/watch.jpg",
      ProductPrice: "$53.34",
    },
  ];

  return (
    <div>
      <Box sx={{ width: "100%", marginBottom: "20px" }}>
        <ProductTittle />
      </Box>

      <BreadCrumb />

      <PriceRange />

      <Grid container spacing={2} p={2}>
        {productData
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} p={2}>
              <Card key={product.id} sx={{ maxWidth: 375 }} >
                <CardActionArea href="/productsdetail">
                  <CardMedia
                    component="img"
                    height="200"
                    image={product.ProductImage}
                    alt="Image Not Load"
                  />
                  <CardContent
                    sx={{
                      textAlign: "center",
                      padding: "12px",
                      paddingBottom: "0px",
                      fontWeight: "bold",
                    }}
                  >
                    <Typography gutterBottom variant="p" mb={0} component="div">
                      {product.productName}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions sx={{ justifyContent: "center" }}>
                  <Typography
                    color="primary"
                    sx={{
                      fontWeight: "700px",
                      padding: "0px",
                      fontStyle: "italic",
                    }}
                  >
                    {product.ProductPrice}
                  </Typography>
                </CardActions>
              </Card>
            </Grid>
          ))}
      </Grid>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15, 20]}
        component="div"
        count={productData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default ProductPage;
