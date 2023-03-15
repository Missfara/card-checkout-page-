import React from "react";
import formcssmodule from "./Form.module.css";

let Form = () => {
  return (
    <div>
      <form>
        <label>
          <span className={formcssmodule.label}> Cardholder Name</span>
          <br />
          <input
            type="text"
            placeholder="e.g Jane Appleseed"
            required
            className={formcssmodule.firstinput}
          />
        </label>
        <br /> <br />
        <label>
          <span className={formcssmodule.labeltwo}> Card Number</span>
          <br />
          <input
            type="text"
            placeholder="eg  0123 4567 8901 234000"
            required
            className={formcssmodule.firstinput}
          />
        </label>{" "}
        <br /> <br />
        <div className="flex">
          <label>
            <span className={formcssmodule.labelthree}>
              {" "}
              Exp.Date (mm / yy)
            </span>{" "}
            <br />
            <input
              type="text"
              placeholder="MM"
              required
              className={formcssmodule.month}
            />
            <input
              type="text"
              placeholder="YY"
              required
              className={formcssmodule.year}
            />
          </label>
          <label>
            <span className={formcssmodule.labelfour}>cvc</span> <br />
            <input
              type="text"
              placeholder="e.g 123"
              required
              className={formcssmodule.cvc}
            />
          </label>
        </div>
        <br /> <br />
        {/* <button className={formcssmodule.button}>
          <span className={formcssmodule.buttontext}>Confirm</span>{" "}
        </button> */}
        <button className={formcssmodule.button}>confirm</button>
      </form>
    </div>
  );
};

export default Form;
