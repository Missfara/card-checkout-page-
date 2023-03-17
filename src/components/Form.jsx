import React from "react";
import formcssmodule from "./Form.module.css";

let Form = () => {
  return (
    <div>
      <form className={formcssmodule.form}>
        <label className={formcssmodule.label}>
          Cardholder Name</label>

        <input
          type="text"
          placeholder="e.g Jane Appleseed"
          required
          className={formcssmodule.firstinput}
        />


        <label className={formcssmodule.label}>
          Card Number </label >
        <input
          type="text"
          placeholder="eg  0123 4567 8901 234000"
          required
          className={formcssmodule.firstinput}
        />


        <div className={formcssmodule.flex}>
          <div className={formcssmodule.date}>
            <label className={formcssmodule.label}>
              Exp.Date (mm / yy)
            </label>
            <div className={formcssmodule.dateInput}>
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
            </div>
          </div>

          <div className={formcssmodule.cvv}>
            <label className={formcssmodule.label}>cvc</label>
            <input
              type="text"
              placeholder="e.g 123"
              required
              className={formcssmodule.cvc}
            />
          </div>

        </div>

        {/* <button className={formcssmodule.button}>
          <span className={formcssmodule.buttontext}>Confirm</span>{" "}
        </button> */}
        <button className={formcssmodule.button}>confirm</button>
      </form>
    </div>
  );
};

export default Form;
