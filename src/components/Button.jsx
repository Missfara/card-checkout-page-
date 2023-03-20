import React from "react";
import Buttonmodulecss from "./Button.module.css";

const Button = ({ buttonControl, setButtonControl }) => {
  const controller = (e) => {
    console.log(buttonControl);
    e.preventDefault();
    setButtonControl(!buttonControl);
  };
  return (
    <div>
      <button
        className={Buttonmodulecss.button}
        onClick={() => controller()}
        // onClick={() => controller()}
      >
        continue
      </button>
    </div>
  );
};
export default Button;
