import React from "react";
import Imagecssmodule from "./Image.module.css";

let Image = () => {
  return (
    <div>
      {/* <img src="bg-main-desktop.png" alt="pic1" /> */}
      <img
        src="bg-main-mobile.png"
        alt="imageone-mobile"
        // className={Imagecssmodule.imageonemobille}
      />
      <img
        src="bg-card-back.png"
        alt="imagetwo-mobile"
        className="imagetwo-mobile"
      />
      <img
        src="bg-card-front.png"
        alt="imagethree-mobile"
        className="imagethree-mobile"
      />
    </div>
  );
};
export default Image;
