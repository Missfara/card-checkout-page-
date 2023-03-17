import React from "react";
import Imagecssmodule from "./Image.module.css";

let Image = () => {
  return (
    <div className={Imagecssmodule.outerdiv}>
      <div className={Imagecssmodule.bgContainer}>
        <img
          src="bg-main-mobile.png"
          alt="imageone-mobile"
          className={Imagecssmodule.bg}
        />
      </div>
      <div className={Imagecssmodule.cards}>
        <div className={Imagecssmodule.backContainer}>
          <img
            src="bg-card-back.png"
            alt="imagetwo-mobile"
            className={Imagecssmodule.back}
          />
        </div>
        <div className={Imagecssmodule.frontContainer}>
          <img
            src="bg-card-front.png"
            alt="imagethree-mobile"
            className={Imagecssmodule.front}
          />
        </div>
      </div>
    </div>
  );
};
export default Image;
