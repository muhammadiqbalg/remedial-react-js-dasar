import React from "react";
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <>
            <Link t0={'/student'} data-testid="student-btn">
                <button>All Student</button>
            </Link>
        </>
    );
};

export default Home;