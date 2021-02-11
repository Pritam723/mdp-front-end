import React, { useEffect, useState } from "react";
import {
  useLocation,
  useParams,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import "./cssFiles/Grid.css";
import "primeflex/primeflex.css";
import DataTable from "./DataTable";
import { Fieldset } from "primereact/fieldset";
import { Button } from "primereact/button";
import axios from "axios";
import FolderStructure from "./FolderStructure";

export default function Users(props) {
  let emptyMeter = {
    model: "fifteenmmdp.allmeterfiles",
    pk: null,
    fields: { year: "", month: "", zippedMeterFile: null, dirStructure: null },
  };
  //   const location = useLocation();
  let { meterIdParam } = useParams();

  const [meter, setMeter] = useState(emptyMeter);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/fmmdp/getMeterData/" + meterIdParam)
      .then((res) => res.json())
      .then((result) => {
        setMeter(result[0]);
        console.log(result);
      });
  }, []);

  const processMeterData = (id) => {
    console.log("already called");
    axios
      .post("http://127.0.0.1:8000/fmmdp/unzipMeterData/" + id)
      .then((response) => {
        setMeter(emptyMeter);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  function ProcessUploadedMeterData(props) {
    console.log("I am called");
    console.log(props);
    return (
      <Button
        label="Extract"
        className="p-button-rounded"
        onClick={() => processMeterData(props.id)}
      />
    );
  }

  return (
    <div className="p-grid p-dir-col">
      <div className="p-col">
        <h5>Particular Meter Data</h5>
        <Fieldset legend="Meter File Details" toggleable>
          <div className="p-col">
            <div className="p-grid">
              <div className="p-col">
                <h5>Year</h5> {meter.fields.year}
              </div>
              <div className="p-col">
                <h5>Month</h5> {meter.fields.month}
              </div>
              <div className="p-col">
                <h5>File</h5>
                <a
                  href={
                    "http://127.0.0.1:8000/fmmdp/media/" +
                    meter.fields.zippedMeterFile
                  }
                  download={
                    "http://127.0.0.1:8000/fmmdp/media/" +
                    meter.fields.zippedMeterFile
                  }
                >
                  {meter.fields.zippedMeterFile
                    ? meter.fields.zippedMeterFile.split("/").slice(-1).pop()
                    : null}
                </a>
              </div>
              <div className="p-col">
                {" "}
                <h5>Process</h5> <ProcessUploadedMeterData id={meter.pk} />{" "}
              </div>
              <div className="p-col">
                {" "}
                <h5>Status</h5> Will do {meter.pk}
              </div>
            </div>
          </div>
        </Fieldset>
      </div>
      <div className="p-col">
        <Fieldset legend="NPC Files" toggleable>
          {meter.fields.dirStructure ? (
            <React.StrictMode>
              <FolderStructure />
            </React.StrictMode>
          ) : (
            "Meter File not extracted yet"
          )}
        </Fieldset>
      </div>
      <div className="p-col">
        <Fieldset legend="MWH Files" toggleable>
          Not processed yet
        </Fieldset>
      </div>
      <div className="p-col">
        <Fieldset legend="Fictitious Meter MWH Files" toggleable>
          Not processed yet
        </Fieldset>
      </div>
      <div className="p-col">
        <Fieldset legend="Final Output" toggleable>
          Not processed yet
        </Fieldset>
      </div>
    </div>
  );
}
