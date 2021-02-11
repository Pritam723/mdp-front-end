import React, { useState, useLayoutEffect } from "react";
import "./styles.css";

import Tree from "./Tree/Tree";

const structure = [
  {
    name: "Python",
    size: "4.00KB",
    type: "folder",
    path:
      "D:\\mdp\\mdp-back-end\\mdp\\fifteenmmdp/media/meterFile\\2020\\DEC\\NPC Files\\Python",
    files: [
      { name: "datetime.jpg", size: "338.89KB" },
      { name: "dateTime2.PNG", size: "29.13KB" },
      {
        name: "IEM00000115A_5min.npc",
        size: "102.58KB",
        id: 9,
        type: "file",
        path:
          "D:\\mdp\\mdp-back-end\\mdp\\fifteenmmdp/media/meterFile\\2020\\DEC\\NPC Files\\Python\\IEM00000115A_5min.npc",
      },
      { name: "MyTopics.PNG", size: "33.04KB" },
      {
        name: "Presentation-Code",
        size: "0.00KB",
        type: "folder",
        path:
          "D:\\mdp\\mdp-back-end\\mdp\\fifteenmmdp/media/meterFile\\2020\\DEC\\NPC Files\\Python\\Presentation-Code",
        files: [
          {
            name: ".ipynb_checkpoints",
            size: "0.00KB",
            type: "folder",
            path:
              "D:\\mdp\\mdp-back-end\\mdp\\fifteenmmdp/media/meterFile\\2020\\DEC\\NPC Files\\Python\\Presentation-Code\\.ipynb_checkpoints",
            files: [
              {
                name: "D5L1 datetime module in Python-checkpoint.ipynb",
                size: "7.77KB",
              },
              {
                name: "D5L2 timedeltas in datetime module-checkpoint.ipynb",
                size: "4.00KB",
              },
              { name: "Untitled-checkpoint.ipynb", size: "0.07KB" },
            ],
          },
          { name: "D5L1 datetime module in Python.ipynb", size: "7.77KB" },
          { name: "D5L2 timedeltas in datetime module.ipynb", size: "4.00KB" },
          { name: "Untitled.ipynb", size: "0.54KB" },
        ],
      },
      {
        name:
          "Program Schedule on Big Data Analysis using Python & R-Programming from 7-11 Dec 2020 (1).pdf",
        size: "424.64KB",
      },
      { name: "Python Presentation.pptx", size: "2816.50KB" },
      { name: "python.png", size: "9.72KB" },
      { name: "pythonLogo.jpg", size: "33.27KB" },
      {
        name: "Running py file using batch scripts",
        size: "0.00KB",
        type: "folder",
        path:
          "D:\\mdp\\mdp-back-end\\mdp\\fifteenmmdp/media/meterFile\\2020\\DEC\\NPC Files\\Python\\Running py file using batch scripts",
        files: [
          { name: "addition.py", size: "0.01KB" },
          {
            name: "IEM00000123A.npc",
            size: "102.07KB",
            id: 10,
            type: "file",
            path:
              "D:\\mdp\\mdp-back-end\\mdp\\fifteenmmdp/media/meterFile\\2020\\DEC\\NPC Files\\Python\\Running py file using batch scripts\\IEM00000123A.npc",
          },
          { name: "test.bat", size: "0.16KB" },
        ],
      },
      {
        name: "Scheduling a python script",
        size: "0.00KB",
        type: "folder",
        path:
          "D:\\mdp\\mdp-back-end\\mdp\\fifteenmmdp/media/meterFile\\2020\\DEC\\NPC Files\\Python\\Scheduling a python script",
        files: [],
      },
      {
        name: "SendToWR",
        size: "0.00KB",
        type: "folder",
        path:
          "D:\\mdp\\mdp-back-end\\mdp\\fifteenmmdp/media/meterFile\\2020\\DEC\\NPC Files\\Python\\SendToWR",
        files: [
          {
            name: "Presentation-Code",
            size: "0.00KB",
            type: "folder",
            path:
              "D:\\mdp\\mdp-back-end\\mdp\\fifteenmmdp/media/meterFile\\2020\\DEC\\NPC Files\\Python\\SendToWR\\Presentation-Code",
            files: [
              {
                name: ".ipynb_checkpoints",
                size: "0.00KB",
                type: "folder",
                path:
                  "D:\\mdp\\mdp-back-end\\mdp\\fifteenmmdp/media/meterFile\\2020\\DEC\\NPC Files\\Python\\SendToWR\\Presentation-Code\\.ipynb_checkpoints",
                files: [
                  {
                    name: "D5L1 datetime module in Python-checkpoint.ipynb",
                    size: "7.77KB",
                  },
                  {
                    name: "D5L2 timedeltas in datetime module-checkpoint.ipynb",
                    size: "4.00KB",
                  },
                  { name: "Untitled-checkpoint.ipynb", size: "0.07KB" },
                ],
              },
              { name: "D5L1 datetime module in Python.ipynb", size: "7.77KB" },
              {
                name: "D5L2 timedeltas in datetime module.ipynb",
                size: "4.00KB",
              },
              { name: "Untitled.ipynb", size: "0.54KB" },
            ],
          },
          { name: "Python Presentation.pptx", size: "2816.50KB" },
        ],
      },
      { name: "topics.jfif", size: "121.60KB" },
      {
        name: "VENV",
        size: "0.00KB",
        type: "folder",
        path:
          "D:\\mdp\\mdp-back-end\\mdp\\fifteenmmdp/media/meterFile\\2020\\DEC\\NPC Files\\Python\\VENV",
        files: [
          {
            name: "Built in VENV module from standard lib.docx",
            size: "14.81KB",
          },
        ],
      },
    ],
  },
];

export default function App() {
  let [data, setData] = useState(structure);

  const handleClick = (node) => {
    console.log(node);
    console.log("hiiiiiiiii");
  };
  const handleUpdate = (state) => {
    localStorage.setItem(
      "tree",
      JSON.stringify(state, function (key, value) {
        if (key === "parentNode" || key === "id") {
          return null;
        }
        return value;
      })
    );
  };

  useLayoutEffect(() => {
    try {
      let savedStructure = JSON.parse(localStorage.getItem("tree"));
      if (savedStructure) {
        setData(savedStructure);
      }
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="App">
      <h2>Extracted Folder</h2>

      <Tree data={data} onUpdate={handleUpdate} onNodeClick={handleClick} />
    </div>
  );
}
