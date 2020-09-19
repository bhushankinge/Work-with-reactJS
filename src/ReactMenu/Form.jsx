import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./contactInput";

class Form extends Component {
  state = {
    clientData: {},
    errors: {}
  };

  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.clientData, this.schema, options);
    if (!error) return null;
    const errors = {};
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;
  };

  validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
  };

  handleSubmit = e => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });

    if (errors) return;
    this.doSubmit();
  };

  handleChange = ({ currentTarget: input }) => {
    const clientData = { ...this.state.clientData };
    clientData[input.name] = input.value;
    this.setState({ clientData });
  };

  renderButton = label => {
    return (
      <button className="btn btn-outline-primary" type="submit">
        {label}
      </button>
    );
  };

  renderInput = (name, label) => {
    const { clientData, errors } = this.state;
    return (
      <Input
        name={name}
        label={label}
        value={clientData[name]}
        onChange={this.handleChange}
        error={errors[name]}
      />
    );
  };
}

export default Form;
