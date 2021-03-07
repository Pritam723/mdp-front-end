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
  let emptyNPC = {
    model: "fifteenmmdp.npcfile",
    pk: null,
    fields: {
      meterFile: null,
      dirStructureNPC: null,
    },
  };
  //   const location = useLocation();
  let { meterIdParam } = useParams();
  let match = useRouteMatch();

  const [npcData, setNpcData] = useState(emptyNPC);

  useEffect(() => {
    fetch("/fifteenmmdp/getNPCData/" + meterIdParam)
      .then((res) => res.json())
      .then((result) => {
        if (result.length > 0) {
          setNpcData(result[0]);
        }
        console.log(result);
      })
      .catch((error) => {
        console.log("Some server side error");
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
          ) : npcData.fields.dirStructureNPC ? (
            <FolderStructure
              dir={JSON.parse(npcData.fields.dirStructureNPC)}
              fileType="NPCFiles"
              meterId={npcData.fields.meterFile}
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
