import { React, useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import "primeflex/primeflex.css";
import axios from "axios";
import proxyServer from "./GlobalVars";
export default function CardDemo() {
  const footer = (fileName) => (
    <span>
      <Button label="Change File" className="p-button-rounded p-button-info" />
      {"  "}
      <a href={proxyServer + "/fifteenmmdp/downLoadFullFinalOutputFiles/"}>
        {fileName}{" "}
      </a>
    </span>
  );
  const [cols, setCols] = useState(<>hiii</>);
  useEffect(() => {
    let _cols = [];
    axios("/fifteenmmdp/getNecessaryFiles")
      .then((res) => res.data)
      .then((result) => {
        console.log(result);
        result.forEach((item) => {
          _cols.push(
            <div key={item.fileId} className="p-col">
              {" "}
              <Card
                title={item.fileName}
                subTitle={item.subTitle}
                style={{ width: "25em" }}
                footer={() => footer(item.fileName)}
                // header={header}
              >
                <p className="p-m-0" style={{ lineHeight: "1.5" }}>
                  {item.description}
                </p>
              </Card>
            </div>
          );
        });
        setCols(_cols);
      });
  }, []);
  return <div className="p-grid">{cols}</div>;
}
