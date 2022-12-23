import React from "react";

const Contact = () => {
  return (
    <div className="section">
      <div className="container">
        <div className="card shadow">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <h1>Contact form</h1>
                <hr />
                <div className="form-group">
                  <label className="mb-1">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your Name"
                  />
                </div>
                <div className="form-group">
                  <label className="mb-1">Phone Number</label>
                  <input
                    type="Number"
                    className="form-control"
                    placeholder="Enter your phobe number"
                  />
                </div>
                <div className="form-group">
                  <label className="mb-1">Email Address</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email address"
                  />
                </div>
                <div className="form-group">
                  <label className="mb-1">Message</label>
                  <textarea
                    name=""
                    id=""
                    rows="3"
                    placeholder="Enter your message"
                    className="form-control"
                  ></textarea>
                </div>
                <div className="form-group py-3">
                  <button type="button" className="btn btn-primary w-100">
                    Send message
                  </button>
                </div>
              </div>
              <div className="col-md-6 border-start">
                <h1>Company Information</h1>
                <div className="underline"></div>
                <div>
                  <p>03161063604</p>
                </div>
                <div>
                  <p>sameersattar1111@gmail.com</p>
                </div>
                <div>
                  <p>karachi</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
