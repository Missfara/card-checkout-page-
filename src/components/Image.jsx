import React from "react";
import Imagecssmodule from "./Image.module.css";

let Image = ({ inputText, setInputtext, name, cvc, month, year }) => {
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

          <span className={Imagecssmodule.cvctext}>{cvc}</span>
        </div>
        <div className={Imagecssmodule.frontContainer}>
          <img
            src="bg-card-front.png"
            alt="imagethree-mobile"
            className={Imagecssmodule.front}
          />
          <span
              className={Imagecssmodule.cardNum}
            // value={inputText
            //   .replace(/\s/g, "")
            //   .replace(/(\d{4})/, "$1")
            //   .trim()}
            // value={inputText.match(/\d{4}/g)}

            onKeyDown="return /\d/.test(e.key)"
            
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
          > {inputText ? inputText : "0000 0000 0000 0000"} </span>
          <div className={Imagecssmodule.nameWrapper}>
          <h3 className={Imagecssmodule.cardName}>{name} </h3>
          <span className={Imagecssmodule.month}>
          {month}
          
        </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Image;
