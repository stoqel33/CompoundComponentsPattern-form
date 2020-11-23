import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section class="hero is-warning is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Compound Components</h1>
          <h2 class="subtitle">Form of questions</h2>
        </div>
      </div>
      <div class="hero-foot">
        <nav class="tabs is-boxed is-fullwidth">
          <div class="container">
            <ul>
              <li class="is-active">
                <NavLink to="/">Personal</NavLink>
              </li>
              <li>
                <NavLink to="/">Hobbies</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
