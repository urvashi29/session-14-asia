import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Employee from './Components/Employee';

const RoutesData = () => {
    return (

        <BrowserRouter>
            <Navbar />

            {/* react-router-dom 5 version */}
            {/* <Route exact path="/" component=<Home /> />
                <Route path="/home" component=<Home /> />
                <Route path="/about" component=<About /> />
                <Route path="/contact" component=<Contact /> />
                <Route path="/employee" component=<Employee /> /> */}


            {/* react-router-dom 6 version */}
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/employee" element={<Employee />} />
            </Routes>
        </BrowserRouter>

    )
}

export default RoutesData;