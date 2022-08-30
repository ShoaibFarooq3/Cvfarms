import React from "react";
import "../Assets/NewFooter.css";
export const NewFooter = () => {
  return (
    <div className="Footer_Body">
      <div className="row topArea rightSection text-left">
        <div className="col-xl-4 col-lg-4 col-md-12">
            <p className="LefText">Eco-friendly theme.</p>
        </div>
        <div className="col-xl-8 col-lg-8 col-md-12">
          <span className="Footer_Line">
            Preserve nature with Biotellus, a theme specially made for true
            green life enthusiasts.
          </span>
        </div>
      </div>
      <div className="row rightSection BottomRow">
        <div className="col-xl-4 col-lg-4 col-md-12"></div>
        <div className="col-xl-8 col-lg-8 col-md-12">
          <div className="row text-left">
            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="Footer_Title">
                <h5>Start a conversation:</h5>
                <p>biotellus@qodeinterctive.com</p>
                <p>+1 035 2445 8265</p>
                <h6>Terms &amp; Conditions</h6>

              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="Footer_Title">
                <h5>Find Our Address:</h5>
                <p>Old Westbury 256, New York</p>
                <p>11201, United States</p>
                <h6>Privacy Policy</h6>

              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="Footer_Title">
                <h5>Our Social:</h5>
                <i className="fab fa-facebook-square Footericon " ></i>
                <i className="fab fa-twitter Footericon" ></i>
                <i className="fab fa-instagram Footericon" ></i>
                
                
                <h6>© 2021 Qode Interactive, All Rights Reserved</h6>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
