import React from "react";
import { Link } from "react-router-dom";

export default function WrongRule({ rule }) {
  return (
    <div>
      <h2>Sorry, You are not able to access this page</h2>
      <h3>
        Your rule is <u>{rule}</u> now
      </h3>
      <Link to="/">Back To Home Page</Link>
    </div>
  );
}
