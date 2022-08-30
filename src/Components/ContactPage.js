import React, { Component } from "react";
import PageHeader from "./PageHeader";
import MAP from "../images/map2.png";
import ContactForm from "./ContactForm";



export default class ContactPage extends Component {
    componentDidMount(){
        window.scrollTo(0, 0)
    }
  render() {
    return (
      <>
        <PageHeader PageType="contact_headerImage" />
        <div className="container">
          <div className="row pt-5 pb-5">
            <div className="col-lg-4 col-md-4">
              <div className="Contact_Text block-title text-left">
                <p>RENEWABLE WAY</p>
                <h3>Our offices</h3>
                <h5>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum dolore
                </h5>
                <a>
                  <h5 className="mt-3">
                    <i className="fa-solid fa-location-dot"></i> Quick business
                    execution
                  </h5>
                </a>
                <a>
                  <h5 className="mt-3">
                    <i className="fa-solid fa-phone"></i> 00 875 665 874 99
                  </h5>
                </a>
                <a>
                  <h5 className="mt-3">
                    <i className="fa-solid fa-envelope"></i> biotellus@qode.com
                  </h5>
                </a>
              </div>
            </div>
            <div className="col-lg-8 col-md-8">
              <img src={MAP}></img>
            </div>
          </div>
          <div className="row pt-5 pb-5">
            <div className="col-lg-6 col-md-6 d-flex justify-content-start">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2798753664!2d-74.25986331889527!3d40.697670070388114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1657886872650!5m2!1sen!2s"
                width="550"
                height="450"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="Contact_Text block-title text-left mb-3">
                <p>FOR A NEW WORLD</p>
                <h3>Let's make some change</h3>
                <h6>
                  In blandit commodo odio, vitae iaculis felis facilisis sed.
                  Sed tempus porttitor lorem ac eleifend. In sit amet euismod
                  ex.
                </h6>
              </div>
              <div className="ContactForm">
                <ContactForm/>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
