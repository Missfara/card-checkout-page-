import React from "react";
import InputModuleCss from "./Input.module.css";

let Input = ({ inputText, setInputtext, name, setName, cvc, setCvc }) => {
  return (
    <div>
      <form className={InputModuleCss.formdiv}>
        <input
          type="number"
          placeholder="0000 0000 0000 0000"
          required
          maxLength={19}
          value={inputText
            .replace(/\s/g, "")
            .replace(/(\d{4})/, "$1")
            .trim()}
          className={InputModuleCss.input}
        />
      </form>
      <div>
        <h3 className={InputModuleCss.h3}>{name} </h3>
        <span className={InputModuleCss.cvctext}>{cvc}</span>
      </div>
    </div>
  );
};
export default Input;
