import React from "react";
import Imagecssmodule from "./Image.module.css";

let Image = () => {
  return (
    <div className={Imagecssmodule.outerdiv}>
      <div>{/* <img src="bg-main-desktop.png" alt="pic1" /> */}</div>
      <div className={Imagecssmodule.imageonemobillediv}>
        <img
          src="bg-main-mobile.png"
          alt="imageone-mobile"
          className={Imagecssmodule.imageonemobille}
        />
      </div>
      <div className={Imagecssmodule.imagetwomobillediv}>
        <img
          src="bg-card-back.png"
          alt="imagetwo-mobile"
          className={Imagecssmodule.imagetwomobille}
        />
      </div>
      <div className={Imagecssmodule.imagethreemobilediv}>
        <img
          src="bg-card-front.png"
          alt="imagethree-mobile"
          className={Imagecssmodule.imagethreemobile}
        />
      </div>
    </div>
  );
};
export default Image;
