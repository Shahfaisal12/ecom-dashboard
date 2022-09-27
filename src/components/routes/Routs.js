import React from "react";
import ProductPage from "../Products/ProductPage";
import EnhancedTable from "..//Products/Table/EnhancedTable";
import { Routes, Route } from "react-router-dom";
import ProductsDetail from "..//Products/ProductsDetail";
import MyCart from "..//Products/MyCart";
import Login from "..//Loginpage/Login";
import Loginform from "..//Loginpage/Loginform";
import Signupform from "..//Loginpage/Signupform";
import SingleProductDetail from "..//Products/SinglePoductPage/SingleProductDetail";
import CheckOutPage from "..//Products/CheckOutPage";
import Orders from "..//Userdashboard/Orders";
import OrderDetail from "..//Userdashboard/OrderDetail";
import PageNotFound from "..//Pagenotfound/PageNotFound";

const Routs = () => {
  return (
    <div className="Routs">
      <Routes>
        <Route path="/" element={<EnhancedTable />} />
        <Route path="/home" element={<EnhancedTable />} />
        <Route path="/products" element={<ProductPage title="Product Page" />} />
        <Route path="/product/detail" element={<ProductsDetail />} />
        <Route path="/singleproductdetail" element={<SingleProductDetail />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginform" element={<Loginform />} />
        <Route path="/signupfrom" element={<Signupform />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/order/detail" element={<OrderDetail />} />
        <Route path="*" exact={true} element={<PageNotFound />} />
        {/* <Route path="/registration/form" element={<Registrationform />} /> */}
      </Routes>
    </div>
  );
};

export default Routs;
