import React, { useState } from "react";
import { Calendar } from "primereact/calendar";
import "primeflex/primeflex.css";

export default function CalendarDemo() {
  const [date, setDate] = useState(null);
  const [date10, setDate10] = useState(null);

  return (
    <div>
      <div className="p-field p-col-12 p-md-4">
        <label htmlFor="monthpicker">Month Picker</label>
        <Calendar
          id="monthpicker"
          value={date}
          onChange={(e) => {
            setDate(e.value);
            console.log(e.value);
          }}
          view="month"
          dateFormat="MM"
        />
      </div>{" "}
      <div className="p-field p-col-12 p-md-4">
        <label htmlFor="monthpicker">Month Picker</label>
        <Calendar
          id="monthpicker"
          value={date10}
          onChange={(e) => setDate10(e.value)}
          view="month"
          dateFormat="yy"
          yearNavigator
          yearRange="2010:2030"
        />
      </div>
    </div>
  );
}
