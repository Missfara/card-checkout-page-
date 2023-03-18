import React from "react";
import "./App.css";

// import Form from "./Form";
// import Imageone from "./Image";
import Form from "./components/Form";
import Image from "./components/Image";
import Input from "./components/Input";
import { useState } from "react";
import Button from "./components/Button";
import { format } from "date-fns";

function App() {
  const [inputText, setInputtext] = useState("");
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [cvc, setCvc] = useState("");
  const [buttonControl, setButtonControl] = useState("yep");

  return (
    <div className="App">
      <div className="image">
        <Image />
      </div>
      <div>
        <Input
          setInputtext={setInputtext}
          inputText={inputText}
          name={name}
          setName={setName}
          date={date}
          setDate={setDate}
          setCvc={setCvc}
          cvc={cvc}
        />
      </div>
      <div className="form">
        <Form
          setInputtext={setInputtext}
          inputText={inputText}
          setButtonControl={setButtonControl}
          buttonControl={buttonControl}
          name={name}
          setName={setName}
          date={date}
          setDate={setDate}
          cvc={cvc}
          setCvc={setCvc}
        />
      </div>
    </div>
  );
}

export default App;
