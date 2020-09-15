import React from "react";

const Form = props => {
  return (
    <>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          {props.label}
        </label>
        <input
          type={props.type}
          class="form-control"
          id="exampleFormControlInput1"
          placeholder={props.placeholder}
        />
      </div>
    </>
  );
};

export default Form;
