import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section className="hero is-warning is-bold">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Compound Components</h1>
          <h2 className="subtitle">Form of questions</h2>
        </div>
      </div>
      <div className="hero-foot">
        <nav className="tabs is-boxed is-fullwidth">
          <div className="container">
            <ul>
              <li className="is-active">
                <NavLink to="/personal">Personal</NavLink>
              </li>
              <li>
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
