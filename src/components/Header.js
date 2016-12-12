import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <div className="header clearfix">
      <h2 className="pull-left">Jardin</h2>
      <div className="pull-right">
        <Link to="/signup">Sign up</Link>
        <Link to="/login">Log in</Link>
      </div>
    </div>
  );
}

export default Header;
