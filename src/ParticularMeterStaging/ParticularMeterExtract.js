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
import { ProgressBar } from "primereact/progressbar";

export default function ParticularMeterExtract(props) {
  let emptyMeter = {
    model: "fifteenmmdp.allmeterfiles",
    pk: null,
    fields: {
      year: "",
      month: "",
      zippedMeterFile: null,
      dirStructure: null,
      status: null,
      dirStructureRealMWH: null,
      dirStructureFictMWH: null,
      dirStructureFinalOutput: null,
    },
  };
  //   const location = useLocation();
  let { meterIdParam } = useParams();
  let match = useRouteMatch();

  const [meter, setMeter] = useState(emptyMeter);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/fifteenmmdp/getMeterData/" + meterIdParam)
      .then((res) => res.json())
      .then((result) => {
        setMeter(result[0]);
        console.log(result);
      });
  }, []);

  return (
    <>
      <div className="p-col">
        <Fieldset legend="NPC Files" toggleable>
          {props.progressbarVisible ? (
            <>
              <h5>Processing</h5>
              <ProgressBar
                mode="indeterminate"
                style={{ height: "6px" }}
              ></ProgressBar>
            </>
          ) : meter.fields.dirStructure ? (
            <FolderStructure
              dir={meter.fields.dirStructure}
              fileType="NPCFiles"
            />
          ) : (
            "Meter File not extracted yet"
          )}
        </Fieldset>
      </div>
      <div className="p-col">
        <Fieldset legend="Error during Extract" toggleable>
          {props.ErrorMessage}
        </Fieldset>
      </div>
    </>
  );
}
