import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {   

    return (
        <div className='text-center mt-20'>
            <h1 className='text-3xl mb-3'>Visualization Dashboard</h1>
            <p className='text-xl'>Netclan</p>            
            <Link to="/dashboard" className='btn btn-primary my-5'>Go To Dashboard</Link>
        </div>
    );
};

export default Home;