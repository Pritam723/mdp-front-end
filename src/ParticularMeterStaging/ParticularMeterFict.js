import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import "../cssFiles/Grid.css";
import "primeflex/primeflex.css";
import { Fieldset } from "primereact/fieldset";
import { Button } from "primereact/button";
import axios from "axios";
import FolderStructure from "../FolderStructure";

export default function ParticularMeter(props) {
  let { meterIdParam } = useParams();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/fifteenmmdp/getMeterData/" + meterIdParam)
      .then((res) => res.json())
      .then((result) => {
        // setMeter(result[0]);
        console.log(result);
      });
  }, []);

  return (
    <div className="p-col">
      <Fieldset legend="Fictitious Meter MWH" toggleable>
        Not processed yet
      </Fieldset>
    </div>
  );
}
