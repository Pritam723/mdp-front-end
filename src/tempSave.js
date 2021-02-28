import React, { useState } from "react";
import { SelectButton } from "primereact/selectbutton";

export default function SelectButtonDemo() {
  const [date, setDate] = useState("07-12-20");

  const dates = ["07-12-20", "08-12-20", "09-12-20"];

  return (
    <div>
      <div className="card">
        <h5>Date Selection</h5>
        <SelectButton
          value={date}
          options={dates}
          onChange={(e) => {
            console.log(e.value);
            setDate(e.value);
          }}
        />
      </div>
    </div>
  );
}
