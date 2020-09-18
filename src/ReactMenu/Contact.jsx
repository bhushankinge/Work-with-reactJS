import React, { Component } from "react";
import Joi from "joi-browser";
import Input from "./contactInput";
import "./Contact.css";

class Contact extends Component {
  state = {
    clientData: { email: "", firstName: "", lastName: "", phone: "" },
    errors: {}
  };

  schema = {
    email: Joi.string()
      .required()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .label("Email Address"),

    firstName: Joi.string()
      .required()
      .min(3)
      .max(30)
      .label("First Name"),

    lastName: Joi.string()
      .required()
      .min(3)
      .max(30)
      .label("Last Name"),

    phone: Joi.number()
      .required()
      .min(10)
      .max(10)
      .label("Phone Number")
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

    console.log("submitted");
  };

  handleChange = ({ currentTarget: input }) => {
    const clientData = { ...this.state.clientData };
    clientData[input.name] = input.value;
    this.setState({ clientData });
  };

  render() {
    const { clientData, errors } = this.state;

    return (
      <>
        <div className="my-5">
          <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
          <div className="row">
            <div className="col-mid-6 col-10 mx-auto ">
              <form onSubmit={this.handleSubmit}>
                <Input
                  name="email"
                  label="Email Address"
                  value={clientData.email}
                  onChange={this.handleChange}
                  error={errors.email}
                />

                <Input
                  name="firstName"
                  label="First Name"
                  value={clientData.firstName}
                  onChange={this.handleChange}
                  error={errors.firstName}
                />

                <Input
                  name="lastName"
                  label="Last Name"
                  value={clientData.lastName}
                  onChange={this.handleChange}
                  error={errors.lastName}
                />

                <Input
                  name="phone"
                  label="Phone Number"
                  value={clientData.phone}
                  onChange={this.handleChange}
                  error={errors.phone}
                />

                <div className="mb-3">
                  <label
                    htmlfor="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Example textarea
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button className="btn btn-outline-primary" type="submit">
                    Submit form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
