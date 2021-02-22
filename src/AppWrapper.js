import React, { useState, useEffect, useRef } from "react";
import {
  useLocation,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import DataTable from "./DataTable";
import ParticularMeter from "./ParticularMeter";
import SidebarActions from "./SidebarActions";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/meterFile/:meterIdParam">
            <ParticularMeter />
          </Route>
          <Route path="/">
            <DataTable />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}
