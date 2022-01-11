import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import UserList from "./pages/user/UserList";
import React from "react";
import User from "./pages/user/User";
import CreateUser from "./pages/user/CreateUser";
import ProductList from "./pages/products/ProductList";
import Product from "./pages/products/Product";
import CreateProduct from "./pages/products/CreateProduct";

function App() {
    return (
        <div>
            <Topbar/>
            <div className="container">
                <Sidebar/>
                <div className="pageWrapper">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="users" element={<UserList/>}/>
                        <Route path="users/create" element={<CreateUser/>}/>
                        <Route path="users/:userId" element={<User/>}/>
                        <Route path="products" element={<ProductList/>}/>
                        <Route path="products/create" element={<CreateProduct/>}/>
                        <Route path="products/:productId" element={<Product/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
