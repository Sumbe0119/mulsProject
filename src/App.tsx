import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Course from "./components/Course";
import Premium from "./components/Premium";



const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/course" element={<Course/>}/>
            <Route path="/premium" element={<Premium/>}/>
        </Routes>
    );
}

export default App;
