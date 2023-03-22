import React from "react";
import InputModuleCss from "./Input.module.css";

let Input = ({
  inputText,
  setInputtext,
  name,
  setName,
  cvc,
  setCvc,
  month,
  setMonth,
  setYear,
  year,
}) => {
  return (
    <div>
      <form className={InputModuleCss.formdiv}>
        {/* <h3 className={InputModuleCss.formdiv}> {inputText}</h3> */}
        {/* <input
          type="text"
          placeholder="0000 0000 0000 0000"
          required
          maxLength={19}
          disabled
          // value={inputText
          //   .replace(/\s/g, "")
          //   .replace(/(\d{4})/, "$1")
          //   .trim()}
          // value={inputText.match(/\d{4}/g)}
          className={InputModuleCss.input}
          onKeyDown="return /\d/.test(e.key)"
          value={inputText}
          onChange={(e) => {
            const text = e.target.value;
            const value = text.length > 4 && text.match(/\d{4}/g).join(" ");
            let elength = text?.match(/\d/g)?.length;
            const slice = elength - 4 * ~~(elength / 4);
            let result =
              value && slice ? value + " " + text.slice(-slice) : text;
            setInputtext(result);
            console.log(result);
          }}
        /> */}
      </form>
      <span className={InputModuleCss.cvctextbackcard}>{cvc}</span>
      <div>
        <h3 className={InputModuleCss.h3}>{name} </h3>
        <span className={InputModuleCss.cvctext}>
          {month}
          {year}
        </span>
      </div>
    </div>
  );
};
export default Input;
