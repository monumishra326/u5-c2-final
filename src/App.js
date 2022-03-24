// import "./App.css";
import { Rentals } from "./Components/Rentals/Rentals";
import { AddHouse } from "./Components/AddHouse/AddHouse";
import { useState } from "react";

function App() {
  // const [toogle, settoogle] = useState(true);
  // var table = "block";
  // var form = "none";
  // const togglers = () => {
  //   settoogle(false);
  //   if (toogle === false) {
  //     form = "block";
  //   } else {
  //     form = "none";
  //   }

  //   if (toogle === true) {
  //     table = "block";
  //   } else {
  //     table = "none";
  //   }
  // };

  return (
    <div className="App">
      <AddHouse></AddHouse>
      <Rentals></Rentals>
      <button className="toggleForm">
        {/* Show text Add House or Show Rentals based on state */} Toggle
      </button>
      {/* Show component based on state */}
      <br />
    </div>
  );
}

export default App;
