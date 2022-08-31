// import EnhancedTable from "./components/EnhancedTable";
import "./App.css";
import ProductPage from "./components/Products/ProductPage";
import EnhancedTable from "./components/EnhancedTable";
import { Routes, Route} from "react-router-dom";
import ProductsDetail from "./components/Products/ProductsDetail";
import MyCart from "./components/Products/MyCart";
import Login from "./components/Loginpage/Login";
import Loginform from "./components/Loginpage/Loginform";
import Signupform from "./components/Loginpage/Signupform";

// import Form from "./components/Form";
// import Tooglebutton from "./components/Tooglebutton";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<EnhancedTable />} />
        <Route path="home" element={<EnhancedTable />} />
        <Route path="products" element={<ProductPage />} />
        <Route path="productdetail" element={<ProductsDetail />} />
        <Route path="mycart" element={<MyCart />} />
        <Route path="login" element={<Login />} />
        <Route path="login" element={<Loginform />} />
        <Route path="login" element={<Signupform />} />
        
      </Routes>
    </div>
  );
}

export default App;

//        <EnhancedTable />
//        <ProductPage />

//        <Tooglebutton/>
//        <Loginfrom isLogIn={false} />
//        <Form />
