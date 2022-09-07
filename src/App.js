// import EnhancedTable from "./components/EnhancedTable";
import "./App.css";
import ProductPage from "./components/Products/ProductPage";
import EnhancedTable from "./components/Products/Table/EnhancedTable";
import { Routes, Route} from "react-router-dom";
import ProductsDetail from "./components/Products/ProductsDetail";
import MyCart from "./components/Products/MyCart";
import Login from "./components/Loginpage/Login";
import Loginform from "./components/Loginpage/Loginform";
import Signupform from "./components/Loginpage/Signupform";
import SingleProductDetail from "./components/Products/SinglePoductPage/SingleProductDetail";
import CheckOutPage from "./components/Products/CheckOutPage";
import Orders from "./components/Userdashboard/Orders";
import OrderDetail from "./components/Userdashboard/OrderDetail";
import PageNotFound from "./components/Pagenotfound/PageNotFound";

// import Form from "./components/Form";
// import Tooglebutton from "./components/Tooglebutton";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<EnhancedTable />} />
        <Route path="/home" element={<EnhancedTable />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/productdetail" element={<ProductsDetail />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/loginform" element={<Loginform />} />
        <Route path="/signupfrom" element={<Signupform />} />
        <Route path="/singleproductdetail" element={<SingleProductDetail />} />
        <Route path="/checkout" element={<CheckOutPage />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/orderdetail" element={<OrderDetail />} />
        <Route path="/pagenotfound" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;

//        <Tooglebutton/>
//        <Loginfrom isLogIn={false} />
//        <Form />
