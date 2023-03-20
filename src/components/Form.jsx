import React, { useState } from "react";
import formcssmodule from "./Form.module.css";
import Button from "../components/Button";
import ThankYouModule from "./Thankyou.module.css";
import Validation from "../components/Validation";
import Thankyou from "../components/Thankyou";
import { Link } from "react-router-dom";

let Form = ({
  inputText,
  setInputtext,
  setButtonControl,
  buttonControl,
  name,
  setName,
  cvc,
  setCvc,
  date,
  setDate,
  month,
  setMonth,
  year,
  setYear,
  // setError,
  // error,
}) => {
  const [values, setValues] = useState({
    fullname: "",
    cardnumber: "",
    month: "",
    year: "",
    cvv: "",
  });
  const [error, setError] = useState({});

  const handleFormSubmit = (e) => {
    e.preventDefault("its working");
    console.log("");
    setError(Validation(values));
  };

  return (
    <div className={formcssmodule.formContainer}>
      <form className={formcssmodule.form}>
        <div>
          <label className={formcssmodule.label}>Cardholder Name</label>

          <input
            type="text"
            placeholder="e.g Jane Appleseed"
            required
            className={formcssmodule.firstinput}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <small className={formcssmodule.small}>Enter your name</small>
        </div>
        <div>
          <label className={formcssmodule.label}>Card Number </label>

          <input
            type="text"
            placeholder="eg  0123 4567 8901 234000"
            required
            maxLength={19}
            className={formcssmodule.firstinput}
            onKeyDown={(e) => {
              const text = e.target.value;
              console.log(text);
              const value = text.length > 4 && text.match(/\d{4}/g).join(" ");
              let elength = text?.match(/\d/g)?.length;
              const slice = elength - 4 * ~~(elength / 4);
              let result =
                value && slice ? value + " " + text.slice(-slice) : text;
              setInputtext(result);
              console.log(result);
              if (!/\d|Backspace/.test(e.key)) e.preventDefault();
            }}
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
          />

          <small className={formcssmodule.small}>can't be blank</small>
        </div>
        <div className={formcssmodule.flex}>
          <div className={formcssmodule.date}>
            <label className={formcssmodule.label}>Exp.Date (mm / yy)</label>
            <div className={formcssmodule.dateInput}>
              <input
                type="month"
                placeholder="MM /YY"
                required
                maxLength={2}
                className={formcssmodule.month}
                value={month}
                onChange={(e) => {
                  console.log(e.target.value);
                  setMonth(e.target.value);
                }}
              />

              <small className={formcssmodule.errordate}>can't be blank</small>
              {/* <input
                type="text"
                placeholder="YY"
                required
                maxLength={4}
                className={formcssmodule.year}
                value={year}
                onChange={(e) => {
                  setYear(e.target.value);
                }}
              /> */}
            </div>
          </div>
          <div className={formcssmodule.cvv}>
            <label className={formcssmodule.label}>cvc</label>
            <input
              type="tel"
              placeholder="e.g 123"
              required
              className={formcssmodule.cvc}
              value={cvc}
              onChange={(e) => {
                setCvc(e.target.value);
              }}
              onSubmit={() => handleFormSubmit()}
            />
            <small className={formcssmodule.small}>can't be blank</small>
          </div>
        </div>

        <button
          className={formcssmodule.button}
          onClick={(e) => {
            e.preventDefault();
            setButtonControl(!buttonControl);
          }}
        >
          <Link to={"/button"}>Confirm</Link>
        </button>
      </form>
    </div>
  );
};

export default Form;
