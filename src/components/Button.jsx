import React from "react";
import Buttonmodulecss from "./Button.module.css";

const Button = (buttonControl, setButtonControl) => {
  //   const controller = () => {
  //     // setButtonControl(true);
  //     console.log(`i am working`);
  //     console.log(buttonControl);
  //   };
  return (
    <div>
      <button
        className={Buttonmodulecss.button}
        onClick={() => setButtonControl()}
        // onClick={() => controller()}
      >
        continue
      </button>
    </div>
  );
};
export default Button;
