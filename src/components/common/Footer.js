import React from "react";
import "./Footer.css";
/* eslint react/prop-types: 0 */

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/*Column 1*/}
          <div className="col">
            <h4>AH AIRLINES INC</h4>
            <ul className="list-unstyled">
              <li>+91 912 345 6789</li>
              <li>Global Village</li>
              <li>Bangalore, India</li>
            </ul>
          </div>

          <div className="col">
            <h4> . </h4>
            <ul className="list-unstyled">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Diretions</li>
            </ul>
          </div>

          <div className="col">
            <h4>.</h4>
            <ul className="list-unstyled">
              <li>Promotions</li>
              <li>Partners</li>
              <li>Careers</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy; AH AIRLINES INC | All right reserved | Terms of service |
            Privacy{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
