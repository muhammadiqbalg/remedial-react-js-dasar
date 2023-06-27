import React from "react";
import { Routes, Route } from 'react-router-dom';


import Home from './Routes/Home';
import Student from './Routes/Student';
import AddStudent from './Routes/AddStudent';
import EditStudent from './Routes/EditStudent';
import NotFound from './Routes/NotFound';

import NavBar from "./components/Navbar";

const App = () => {
    return (
        <>
        <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Student" element={<Student />} />
            <Route path="/Student/Add" element={<AddStudent />} />
            <Route path="/Student/:id" element={<EditStudent />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
        </> // TODO: replace this
    );
};

export default App;
