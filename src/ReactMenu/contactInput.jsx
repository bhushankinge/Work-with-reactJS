import React from "react";

const Input = ({ name, label, value, error, onChange }) => {
  return (
    <div className="mb-3">
      <label htmlfor="exampleFormControlInput1" className="form-label">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        type={name}
        className="form-control"
        id="exampleFormControlInput1"
        placeholder={label}
      />
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
