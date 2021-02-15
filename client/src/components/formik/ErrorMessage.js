import React from "react";
import { Field, getIn } from "formik";
const ErrorMessage = ({ name }) => (
  <Field name={name}>
    {({ form }) => {
      const error = getIn(form.errors, name);
      const touch = getIn(form.touched, name);
      return touch && error ? (
        <div
          className="error"
          style={{ color: "#cf6679", marginBottom: "10px" }}
        >
          {error}
        </div>
      ) : null;
    }}
  </Field>
);

export default ErrorMessage;
