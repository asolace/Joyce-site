import React from 'react';
import { Link } from 'react-router-dom'

const Header = props => {
  return (
    <div className="joyce-header">
      <Link to="/" style={{ textDecoration: 'none' }}><h1 className="display-3 rainbow-animation">Joyce Wang</h1></Link>
      <p className="lead weird-april">April is soooo WEIRD!</p>
    </div>
  );
};

export default Header;
