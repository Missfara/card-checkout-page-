import React from "react";

let Form = () => {
  return (
    <div>
      <form>
        <label>
          CARDHOLDER NAME <br />
          <input type="text" placeholder="e.g Jane Appleseed" required />
        </label>{" "}
        <br /> <br />
        <label>
          CARD NUMBER <br />
          <input type="text" placeholder="eg  0123 4567 8901 234000" required />
        </label>{" "}
        <br /> <br />
        <div className="flex">
          <label>
            EXP.DATE(MM / YY) <br />
            <input type="text" placeholder="MM" required className="small" />
            <input type="text" placeholder="YY" required className="small" />
          </label>
          <label>
            CVC <br />
            <input type="text" />
          </label>{" "}
        </div>{" "}
        <br /> <br />
        <button> Confirm </button>{" "}
      </form>{" "}
    </div>
  );
};

export default Form;
