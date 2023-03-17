import React from "react";
import "./App.css"

// import Form from "./Form";
// import Imageone from "./Image";
import Form from "./components/Form";
import Image from "./components/Image";

function App() {
  return (
    <div className="App">
      <div className="image">
        <Image />
      </div>
      <div className="form">
        <Form />
      </div>
    </div>
  );
}

export default App;
