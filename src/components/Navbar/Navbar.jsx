import { useState } from "react";
import "../Navbar/navbar.scss";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const user = true;

  return (
    <>
      <nav>
        <div className="left">
          <Link to="/" className="logo">
            <img src="/logo.png" alt="logo" />
            <span>Real Estate</span>
          </Link>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact-us">Contact</Link>
          <Link to="/agent">Agents</Link>
        </div>
        <div className="right">
          {user ? (
            <div className="user">
              <img
                src="	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-Q8z7LMNUcy7c84k6loduysKVlfQtHyBTEVK7odCwUg&s"
                alt="profile picture"
              />
              <span>Jone Doe</span>
              <Link to="/profile" className="profile">
                <div className="notification">3</div>
                <span>Profile</span>
              </Link>
            </div>
          ) : (
            <>
              <Link to="/login">Sign-in</Link>
              <Link to="/register" className="signUp">
                Sign-up
              </Link>
            </>
          )}
          <div className="menuIcon">
            <img
              src="/menu.png"
              alt="menu-Icon"
              onClick={() => setOpenMenu((pre) => !pre)}
            />
          </div>
          <div className={openMenu ? "menu active" : "menu"}>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact-us">Contact</Link>
            <Link to="/agent">Agents</Link>
            <Link to="/login">Sign in</Link>
            <Link to="/register">Sign up</Link>
          </div>
        </div>
      </nav>
    </>
  );
};
