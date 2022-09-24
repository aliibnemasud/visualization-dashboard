import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center mt-20'>
            <h1 className="text-8xl my-5">404</h1>            
            <h1 className='text-3xl mb-3'>No Page Found!</h1>
            <Link to="/" className='btn btn-primary my-5'>Go To Home</Link>
        </div>
    );
};

export default Error;