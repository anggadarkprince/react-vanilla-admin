import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./App.css";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/home/Home";
import UserList from "./pages/user/UserList";
import React from "react";
import User from "./pages/user/User";
import CreateUser from "./pages/user/CreateUser";

function App() {
    return (
        <div>
            <Topbar/>
            <div className="container">
                <Sidebar/>
                <div className="pageWrapper">
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="users/*" element={<UserList/>}/>
                        <Route path="users/create" element={<CreateUser/>}/>
                        <Route path="users/:userId" element={<User/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
