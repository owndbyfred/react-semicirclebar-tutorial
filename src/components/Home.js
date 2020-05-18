import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Hello, World!</h1>
      <p>This is a sample home page</p>

      <Link to='/search?q=Java' className='btn btn-primary mr-3'>
        Java
      </Link>

      <Link to='/search?q=Python' className='btn btn-primary mr-3'>
        Python
      </Link>

      <Link to='/search?q=JavaScript' className='btn btn-primary mr-3'>
        JavaScript
      </Link>
    </>
  );
};

export default Home;
