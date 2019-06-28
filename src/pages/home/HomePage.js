import React from 'react';
import { Link }from 'react-router-dom';

function HomePage() {
  return (
    <div>
      <h1>this is home page</h1>
      <Link to="/about">to about</Link>
    </div>
  );
}

export default HomePage;
