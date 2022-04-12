import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Tech from "./components/Tech";
import News from "./components/News";



const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/news" element={<News/>}/>
            <Route path="/tech" element={<Tech/>}/>
        </Routes>
    );
}

export default App;
