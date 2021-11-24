import React from "react";
import Layout from "../../components/Layout";

export default function Home({ setRule, rule }) {
  return (
    <>
      <Layout links={["admin", "employer", "talent"]} rule={rule}>
        <h2>Home Page</h2>
        <button onClick={() => setRule("admin")}>Admin</button>
        <button onClick={() => setRule("employer")}>Employer</button>
        <button onClick={() => setRule("talent")}>Talent</button>
      </Layout>
    </>
  );
}
