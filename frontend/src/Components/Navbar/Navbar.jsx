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
              <Link to="/login"><p>Sign Out</p></Link>
            </button>
          )}
        </div>
      );
    } else {
      return (
        <div className="ml-auto">
          {isLoginPage ? null : (
            <button onClick={handleSignOut} className="login-button">
              <Link to="/login"><p>Sign In</p></Link>
            </button>
          )}
        </div>
      );
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="https://github.com/JAtharva22/html-css-projects/assets/93152317/2ca0f9ae-fe47-46a3-8428-f164435c126d" alt="Logo" />
      </div>
      <div id="google_translate_element"></div>
      <ul className="navitems">
        <Navbarlist />
      </ul>
      {renderAuthButton()}
    </nav>
  );
}

export default Navbar;