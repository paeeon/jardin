import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({navLinks}) => {
  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Jardin</Link>
        </div>
        <div className="nav">
          <ul className="nav navbar-nav">
          {navLinks.map((link) => {
            return (<li key={link.id}><Link to={link.route}>{link.text}</Link></li>);
          })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
