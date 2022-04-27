import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Tech from "./components/Tech";
import News from "./components/News";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Single from "./components/Single";
import Profile from "./components/profile/Profile";
import Registration from "./components/profile/Registration";
import TechAbout from "./components/profile/TechAbout";
import Report from "./components/profile/Report";
import FeedBack from "./components/profile/FeedBack";



const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/tech" element={<Tech/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/single" element={<Single/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/techAbout" element={<TechAbout/>}/>
            <Route path="/report" element={<Report/>}/>
            <Route path="/feedback" element={<FeedBack/>}/>
        </Routes>
    );
}

export default App;
