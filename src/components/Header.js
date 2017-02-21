import React from 'react';
import { Link } from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Jardin</Link>
        </div>
        <div className="nav">
          <ul className="nav navbar-nav">
            <li><Link to="/signup">Sign up</Link></li>
            <li><Link to="/login">Log in</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
