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
import Plot from "react-plotly.js";
import { Dropdown } from "primereact/dropdown";
import { CascadeSelect } from "primereact/cascadeselect";
import { Divider } from "primereact/divider";

import "../cssFiles/AccordionDemo.css";
import ChangeMeterDataComponent from "./ChangeMeterDataComponent";
import ComponentWiseAnalysis from "./ComponentWiseAnalysis";

export default function ParticularMeter(props) {
  let { meterIdParam } = useParams();

  const [xAxisData, setXAxisData] = useState([]);
  const [end1Data, setEnd1Data] = useState([]);
  const [end2data, setEnd2Data] = useState([]);
  const [diff, setDiff] = useState([]);

  const [stateWiseData, setStateWiseData] = useState({});
  const [feeders, setFeeders] = useState([]);

  const [selectedEntity, setSelectedEntity] = useState(null);
  const [selectedFeeder, setSelectedFeeder] = useState({
    id: null,
    "Feeder Name": "",
    End1: "",
    End2: "",
  });

  const [polarity, setPolarity] = useState({
    name: "Default",
    multiplier: "def",
  });
  const entities = [
    {
      type: "States",
      code: "states",
      entities: [
        { name: "BIHAR", code: "BH" },
        { name: "WEST BENGAL", code: "WB" },
        { name: "DVC", code: "DVC" },
        { name: "GRIDCO", code: "GR" },
        { name: "SIKKIM", code: "SKM" },
        { name: "JHARKHAND", code: "JH" },
      ],
    },
    {
      type: "Generators",
      code: "generators",
      entities: [
        { name: "BARH(NTPC)", code: "BARH(NTPC)" },
        { name: "FARAKKA", code: "FARAKKA" },
        { name: "Kahalgaon", code: "Kahalgaon" },
        { name: "Talcher", code: "Talcher" },
        { name: "BRBCL", code: "BRBCL" },
        { name: "DARLIPALLI", code: "DARLIPALLI" },
        { name: "MTPS", code: "MTPS" },
        { name: "NPGC", code: "NPGC" },
        { name: "APNRL", code: "APNRL" },
        { name: "GMR", code: "GMR" },
        { name: "JITPL", code: "JITPL" },
        { name: "MAITHON RB (MPL)", code: "MAITHON RB (MPL)" },
        { name: "RANGIT", code: "RANGIT" },
        { name: "TEESTA", code: "TEESTA" },
        { name: "TEESTA-III", code: "TEESTA-III" },
        { name: "CHUZACHEN(GATI)", code: "CHUZACHEN(GATI)" },
        { name: "DICKCHU", code: "DICKCHU" },
        { name: "JORETHANG", code: "JORETHANG" },
        { name: "TASHIDING", code: "TASHIDING" },
        { name: "TALCHER  SOLAR", code: "TALCHER  SOLAR" },
      ],
    },
    {
      type: "Inter-Regional",
      code: "interregional",
      entities: [
        { name: "NER", code: "NER" },
        { name: "SR", code: "SR" },
        { name: "NR", code: "NR" },
        { name: "WR", code: "WR" },
      ],
    },
  ];
  const polarityArray = [
    { name: "Default", multiplier: "def" },
    { name: "Opposite", multiplier: "opp" },
  ];
  const onFeederChange = (e) => {
    setSelectedFeeder(e.value);
    setXAxisData([]);
    setEnd1Data([]);
    setEnd2Data([]);
    setDiff([]);
    console.log(e.value);
  };
  const onPolarityChange = (e) => {
    setPolarity(e.value);
    console.log(e.value);
  };
  const onStateChange = (e) => {
    setSelectedEntity(e.value);
    setFeeders(stateWiseData[e.value.name]);
    setSelectedFeeder(stateWiseData[e.value.name][0]);
    setXAxisData([]);
    setEnd1Data([]);
    setEnd2Data([]);
    setDiff([]);
    console.log(e.value);
  };
  useEffect(() => {
    fetch("/fifteenmmdp/analyseData/" + meterIdParam)
      .then((res) => res.json())
      .then((result) => {
        setStateWiseData(result);
        console.log(result);
      });
  }, []);

  const fetchGraphData = () => {
    console.log(selectedFeeder);
    axios
      .post(
        "/fifteenmmdp/fetchGraphData/" +
          meterIdParam +
          "/" +
          selectedFeeder["End1"].trim() +
          "/" +
          selectedFeeder["End2"].trim() +
          "/" +
          polarity.multiplier
      )
      .then((response) => {
        console.log(response);
        setXAxisData(response.data.xAxisData);
        setEnd1Data(response.data.end1Data);
        setEnd2Data(response.data.end2Data);
        setDiff(response.data.diff);

        // window.location.reload();
      })
      .catch((error) => {});
  };
  return (
    <>
      <div className="p-col">
        <Fieldset legend="Analyse" toggleable>
          <div className="p-grid">
            <div className="p-col">
              <div className="dropdown-demo">
                <CascadeSelect
                  value={selectedEntity}
                  options={entities}
                  optionLabel={"name"}
                  optionGroupLabel={"type"}
                  optionGroupChildren={["entities"]}
                  style={{ minWidth: "14rem" }}
                  placeholder={"Select an Entity"}
                  onChange={onStateChange}
                />
              </div>
            </div>
            <div className="p-col">
              <div className="dropdown-demo">
                <Dropdown
                  value={selectedFeeder}
                  options={feeders}
                  onChange={onFeederChange}
                  optionLabel="Feeder Name"
                  placeholder="Select Feeder"
                />
              </div>{" "}
            </div>{" "}
            <div className="p-col">
              <div className="dropdown-demo">
                <Dropdown
                  value={polarity}
                  options={polarityArray}
                  onChange={onPolarityChange}
                  optionLabel="name"
                  placeholder="Select Polarity"
                />
              </div>{" "}
            </div>
            <div className="p-col">
              <Button
                label="Fetch Data"
                className="p-button-rounded p-button-success"
                onClick={fetchGraphData}
              />
            </div>{" "}
            <div className="p-col">Work with graph </div>
          </div>
          {selectedEntity ? (
            <Plot
              data={[
                {
                  x: xAxisData,
                  y: end1Data,
                  type: "line",
                  // mode: "lines+markers",
                  // marker: { color: "red" },
                  name: selectedFeeder["End1"],
                },
                {
                  type: "line",
                  x: xAxisData,
                  y: end2data,
                  marker: { color: "red" },
                  name: selectedFeeder["End2"],
                },
                {
                  type: "line",
                  x: xAxisData,
                  y: diff,
                  marker: { color: "green" },
                  name: "Difference",
                },
              ]}
              layout={{
                width: 1500,
                height: 500,
                title: selectedFeeder["End1"] + " vs " + selectedFeeder["End2"],
              }}
            />
          ) : (
            <></>
          )}
          <Divider />
          {selectedFeeder["End1"] || selectedFeeder["End2"] ? (
            <ChangeMeterDataComponent
              meterId={meterIdParam}
              end1={selectedFeeder["End1"].trim()}
              end2={selectedFeeder["End2"].trim()}
              fetchGraphDataAgain={fetchGraphData}
            />
          ) : (
            <></>
          )}
        </Fieldset>
      </div>{" "}
      <div className="p-col">
        {selectedFeeder["End1"] || selectedFeeder["End2"] ? (
          <Fieldset legend="Component analysis" toggleable>
            <ComponentWiseAnalysis
              meterId={meterIdParam}
              end1={selectedFeeder["End1"].trim()}
              end2={selectedFeeder["End2"].trim()}
            />
          </Fieldset>
        ) : (
          <></>
        )}{" "}
      </div>
    </>
  );
}
