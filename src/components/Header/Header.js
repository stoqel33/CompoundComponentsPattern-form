import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();

  return (
    <section className="hero is-warning is-bold">
      <div className="hero-body">
        <div className="container">
          <NavLink to="/">
            <h1 className="title">Compound Components</h1>
          </NavLink>
          <h2 className="subtitle">Form of questions</h2>
        </div>
      </div>
      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              <li className={pathname === "/personal" ? "is-active" : null}>
                <NavLink to="/personal">Personal</NavLink>
              </li>
              <li className={pathname === "/hobbies" ? "is-active" : null}>
                <NavLink to="/hobbies">Hobbies</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
