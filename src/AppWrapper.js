import React, { useState, useEffect, useRef } from "react";
import {
  useHistory,
  useLocation,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import DataTable from "./DataTable";
import ParticularMeter from "./ParticularMeter";
import SidebarActions from "./SidebarActions";
import { TabMenu } from "primereact/tabmenu";
import NecessaryFiles from "./NecessaryFiles";

export default function App() {
  let history = useHistory();
  const items = [
    { label: "Home", icon: "pi pi-fw pi-home", url: "/" },
    {
      label: "Necessary Files",
      icon: "pi pi-fw pi-file",
      url: "/necessaryFiles",
    },
  ];
  const [activeItem, setActiveItem] = useState({
    label: "Home",
    icon: "pi pi-fw pi-home",
  });
  return (
    <Router>
      <div>
        <div className="card">
          <TabMenu
            model={items}
            activeItem={activeItem}
            onTabChange={(e) => {
              // console.log(history);
              console.log(e.value);
            }}
          />
        </div>
        <Switch>
          <Route path="/necessaryFiles">
            <NecessaryFiles />
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
