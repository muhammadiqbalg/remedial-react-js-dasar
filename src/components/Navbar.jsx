import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <>
            <Link to={'/'}>
                <h1 data-testid='home-page'>Student Portal</h1>
            </Link>
            <Link to={'/student'}>
                <h1 data-testid='student-page'>All Student</h1>
            </Link>
            <Link to={'/add'}>
                <h1 data-testid='add-page'>Add Student</h1>
            </Link>  
        </>
    );
};

export default NavBar;
