import { useState } from 'react';
import './Navbar.css';
import Navbarlist from './Navbarlist';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSignOut = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const isLoginPage = location.pathname === '/login';

  const renderAuthButton = () => {
    if (isLoggedIn) {
      return (
        <div className="ml-auto">
          {isLoginPage ? null : (
            <button onClick={handleSignOut} className="login-button">
              <Link to="/login">Sign out</Link>
            </button>
          )}
        </div>
      );
    } else {
      return (
        <div className="ml-auto">
          {isLoginPage ? null : (
            <button onClick={handleSignOut} className="login-button">
              <Link to="/login">Sign in</Link>
            </button>
          )}
        </div>
      );
    }
  };

  return (
    <nav className="navbar">
      <div className="logo-links">
        <h2>
          SmartLegalX
        </h2>
        <ul className="navitems">
          <Navbarlist />
          <li>

      <a href="http://localhost:8000" target="_blank" style={{textDecoration:'none',color:'black'}}>Chatbot</a>
          </li>
        </ul>
      </div>
      <div id="google_translate_element"></div>
      {renderAuthButton()}

    </nav>
  );
}

export default Navbar;