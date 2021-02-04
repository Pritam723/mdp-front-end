import React, { useState } from "react";
import "./App.css";
// import jQuery from "jquery";

// function getCookie(name) {
//   var cookieValue = null;
//   if (document.cookie && document.cookie !== "") {
//     var cookies = document.cookie.split(";");
//     for (var i = 0; i < cookies.length; i++) {
//       var cookie = jQuery.trim(cookies[i]);
//       if (cookie.substring(0, name.length + 1) === name + "=") {
//         cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
//         break;
//       }
//     }
//   }
//   return cookieValue;
// }

function App() {
  const [year, setYear] = useState("");
  const [month, setMonth] = useState("");
  const [meterZippedFile, setMeterZippedFile] = useState();

  const newBook = () => {
    console.log("works");
    console.log(meterZippedFile);
    console.log(meterZippedFile.name);

    const uploadData = new FormData();
    uploadData.append("year", year);
    uploadData.append("meterZippedFile", meterZippedFile, meterZippedFile.name);
    // var csrftoken = getCookie("csrftoken");
    console.log(uploadData);
    // fetch("http://127.0.0.1:8000/fmmdp/addNewMeterFile/", {
    //   method: "POST",
    //   body: uploadData,
    // })
    //   .then((res) => console.log(res))
    //   .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <label>
        Year
        <input
          type="text"
          value={year}
          onChange={(evt) => setYear(evt.target.value)}
        />
      </label>
      <br />
      <label>
        Meter Zip File
        <input
          type="file"
          onChange={(evt) => setMeterZippedFile(evt.target.files[0])}
        />
      </label>
      <br />
      <button onClick={() => newBook()}>New Book</button>
    </div>
  );
}

export default App;
