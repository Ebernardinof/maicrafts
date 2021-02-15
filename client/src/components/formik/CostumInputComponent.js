import React from "react";

const CustomInputComponent = ({
  field, // { name, value, onChange, onBlur }
  form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
  ...props
}) => (
  <div className={`${props.className} field`}>
    {props.label ? <label>{props.placeholder}</label> : false}
    <input type="text" {...field} {...props} />
  </div>
);

export default CustomInputComponent;
