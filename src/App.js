import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/homeVeiw/Home";
import Admin1 from "./pages/adminViews/Admin1";
import Admin2 from "./pages/adminViews/Admin2";
import Admin3 from "./pages/adminViews/Admin3";
import Employer1 from "./pages/employerViews/Employer1";
import Employer2 from "./pages/employerViews/Employer2";
import Employer3 from "./pages/employerViews/Employer3";
import Employer4 from "./pages/employerViews/Employer4";
import Talent1 from "./pages/talentViews/Talent1";
import Talent2 from "./pages/talentViews/Talent2";
import Talent3 from "./pages/talentViews/Talent3";
import Layout from "./components/Layout";
import PrivateRoute from "./utils/PrivateRoute";
import WrongRule from "./components/WrongRule";

function App() {
  const [rule, setRule] = useState("");
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home setRule={setRule} rule={rule} />} />
        <Route path="/:page/401" element={<WrongRule rule={rule} />} />
        <Route path="/:page/:subPage/401" element={<WrongRule rule={rule} />} />
        <Route
          path="admin"
          element={
            <PrivateRoute rule={rule} ruleShouldBe="admin">
              <Layout
                links={["page1", "page2", "page3"]}
                title="Admin"
                rule={rule}
              />
            </PrivateRoute>
          }
        >
          <Route path="page1" element={<Admin1 />} />
          <Route path="page2" element={<Admin2 />} />
          <Route path="page3" element={<Admin3 />} />
        </Route>
        <Route
          path="employer"
          element={
            <Layout
              links={["page1", "page2", "page3", "page4"]}
              title="Employer"
              rule={rule}
            />
          }
        >
          <Route
            path="page1"
            element={
              <PrivateRoute rule={rule} ruleShouldBe={"employer"}>
                <Employer1 />
              </PrivateRoute>
            }
          />
          <Route
            path="page2"
            element={
              <PrivateRoute rule={rule} ruleShouldBe={"employer"}>
                <Employer2 />
              </PrivateRoute>
            }
          />
          <Route
            path="page3"
            element={
              <PrivateRoute rule={rule} ruleShouldBe={"employer"}>
                <Employer3 />
              </PrivateRoute>
            }
          />
          <Route
            path="page4"
            element={
              <PrivateRoute rule={rule} ruleShouldBe={["employer", "admin"]}>
                <Employer4 />
              </PrivateRoute>
            }
          />
        </Route>
        <Route
          path="talent"
          element={
            <PrivateRoute rule={rule} ruleShouldBe="talent">
              <Layout links={["page1", "page2", "page3"]} title="Telent" />
            </PrivateRoute>
          }
          rule={rule}
        >
          <Route path="page1" element={<Talent1 />} />
          <Route path="page2" element={<Talent2 />} />
          <Route path="page3" element={<Talent3 />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
