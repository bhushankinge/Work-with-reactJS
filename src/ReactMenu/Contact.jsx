import React, { Component } from "react";
import Form from "./Form";
import Joi from "joi-browser";
import "./Contact.css";

class Contact extends Form {
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
      .label("Phone Number")
  };

  doSubmit = () => {
    console.log("submitted");
  };

  render() {
    return (
      <>
        <div className="my-5">
          <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
          <div className="row">
            <div className="col-mid-6 col-10 mx-auto ">
              <form onSubmit={this.handleSubmit}>
                {this.renderInput("email", "Email Address")}
                {this.renderInput("firstName", "First Name")}
                {this.renderInput("lastName", "Last Name")}
                {this.renderInput("phone", "Phone Number")}
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
                <div className="col-12">{this.renderButton("Submit")}</div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Contact;
