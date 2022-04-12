import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Tech from "./components/Tech";
import News from "./components/News";
import Login from "./components/user/Login";
import Register from "./components/user/Register";



const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/tech" element={<Tech/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
    );
}

export default App;
