import React from "react";
import { Outlet } from "react-router";
import { Link, NavLink } from "react-router-dom";

export default function Layout({ links, title, children, rule }) {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <h3>You Are {rule || "no rule yet"} now</h3>
        <nav>
          {links.map((link) => (
            <NavLink to={link} key={link}>
              {link}
            </NavLink>
          ))}
        </nav>
      </header>
      <h2>{title}</h2>
      {children}
      <Outlet />
      <footer>Footer</footer>
    </>
  );
}
