import React from "react";
import { Navigate } from "react-router";

export default function privateRoute({ children, rule, ruleShouldBe }) {
  return ruleShouldBe.includes(rule) ? children : <Navigate to="401" />;
}
