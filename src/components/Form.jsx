import React from "react";
import formcssmodule from "./Form.module.css";
import Button from "../components/Button";
import ThankYouModule from "./Thankyou.module.css";
import { format } from "date-fns";

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
}) => {
  // const inputTexthandler = (e) => {
  //   console.log(e.target.value);
  //   setInputtext(e.target.value);
  // };
  const controller = () => {
    setButtonControl(true);
    console.log(`i am working`);
    console.log(buttonControl);
  };

  const ThankYou = (setButtonControl) => {
    return (
      <div className={ThankYouModule.completeImage}>
        <img src="icon-complete.svg" alt="completeIcon" />
        <h1 className={ThankYouModule.h1}>Thank You!</h1>
        <p className={ThankYouModule.p}>We have added your card detail</p>
        <Button />
        {/* <button>continue</button> */}
      </div>
    );
  };
  return (
    <div className={formcssmodule.formContainer}>
      <form className={formcssmodule.form}>
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

        <label className={formcssmodule.label}>Card Number </label>
        <input
          type="tel"
          placeholder="eg  0123 4567 8901 234000"
          required
          className={formcssmodule.firstinput}
          value={inputText
            .replace(/\s/g, "")
            .replace(/(\d{4})/, "$1")
            .trim()}
          // onChange={inputTexthandler}
          onChange={(e) => {
            setInputtext(e.target.value);
          }}
        />

        <div className={formcssmodule.flex}>
          <div className={formcssmodule.date}>
            <label className={formcssmodule.label}>Exp.Date (mm / yy)</label>
            <div className={formcssmodule.dateInput}>
              <input
                type="text"
                placeholder="MM"
                required
                className={formcssmodule.month}
                value={date}
                // {format (new Date(date), "MM yy")}
                // value={format(new Date(date), "MM yy")}
              />
              <input
                type="text"
                placeholder="YY"
                required
                className={formcssmodule.year}
              />
            </div>
          </div>

          <div className={formcssmodule.cvv}>
            <label className={formcssmodule.label}>cvc</label>
            <input
              type="text"
              placeholder="e.g 123"
              required
              className={formcssmodule.cvc}
              value={cvc}
              onChange={(e) => {
                setCvc(e.target.value);
              }}
            />
          </div>
        </div>

        <button
          className={formcssmodule.button}
          // onClick={() => setButtonControl(true)}
          onClick={() => controller(true)}
        >
          Confirm
        </button>
      </form>
      <div>
        {buttonControl && <ThankYou setButtonControl={setButtonControl} />}
      </div>
      {/* <div>
        <ThankYou onClick={() => controller(true)} />
      </div> */}
    </div>
  );
};

export default Form;
