import React from "react";
import ThankYouModule from "./Thankyou.module.css";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Image from "../components/Image";

const ThankYou = (buttoncontroler2, setButtoncontroler2) => {
  const handleClick = () => {
    setButtoncontroler2(false);
  };
  return (
    <>
      <Image />
      <div className={ThankYouModule.completeImage}>
        <img src="icon-complete.svg" alt="completeIcon" />
        <img src=" card-logo.svg" alt="imageone-mobile" />
        <h1 className={ThankYouModule.h1}>Thank You!</h1>
        <p className={ThankYouModule.p}>We have added your card detail</p>
        <Link to={"/"}>
          <Button onClick={handleClick} />
        </Link>
        {/* <button>
        <Link>continue</Link>
      </button> */}
      </div>
    </>
  );
};

export default ThankYou;
