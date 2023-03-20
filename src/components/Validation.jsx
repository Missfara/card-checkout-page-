import React from "react";

const Validation = (values) => {
  let error = {};
  if (!values.fullname) {
    values.fullname = "enter fullname";
  }
  if (!values.cardnumber) {
    values.cardnumber = "enter correct format";
  }
  return error;
};

export default Validation;
