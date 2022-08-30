import React from "react";
import '../Assets/NewContact.css'
import ContactForm from "./ContactForm";

const ContactSectionNew = () => {
  return (
  
  <div className="ContactBody">
  <div className="container">
    <div className="row">
      <div className="col-xl-6 col-lg-6 col-md-6">
        <div className="Contact_Text block-title text-left">
          <p>FOR A NEW WORLD</p>
          <h3>Let's make some change</h3>
<h6>In blandit commodo odio, vitae iaculis felis facilisis sed. Sed tempus porttitor lorem ac eleifend. In sit amet euismod ex.</h6>
        </div>
      </div>

      <div className="ContactForm col-xl-6 col-lg-6 col-md-6">
     <ContactForm/>
      </div>
    </div>
    </div>
    </div>
  );
};
export default ContactSectionNew