import React from "react";
import Fdata from "./FormData";
import Form from "./Form";

const Contact = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-mid-6 col-10 mx-auto ">
            <form action="">
              <div class="mb-3">
                {Fdata.map((val, ind) => {
                  return (
                    <Form
                      key={ind}
                      label={val.label}
                      placeholder={val.placeholder}
                      type={val.type}
                    />
                  );
                })}
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Example textarea
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div class="col-12">
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
