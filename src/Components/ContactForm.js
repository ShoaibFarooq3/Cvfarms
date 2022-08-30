import { AddingQuery_Monday, GetFaqs, GetMonday, Monday_Api_One, UpdatingQuery_Monday } from "../Utils/ApiCalls";
import React, { Component } from "react";
import { GetCurrDate } from "../Utils/GlobalFunctions";
import '../Assets/ContactForm.css'
import toast, { Toast, Toaster } from "react-hot-toast";
import { Toasterd } from "react-hot-toast";
export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BoardName: "",
      BoardId: "",
      EmailField_Id: "",
      PersonField_Id: "",
      DateField_Id: "",
      DescriptionField_Id: "",
      AuthToken: "",
      Contact_Name: "",
      Contact_Email: "",
      Contact_Message: "",
      Success_Msg: false,
      Fail_Msg: false,
      Email: false,
      Name: false,
      Message: false,
      UserOBJ:JSON.parse(localStorage.getItem("UserObj"))
    };
  }
 


  SubmitContact = (e) => {
    e.preventDefault();
 
    if (
    
      this.state.Contact_Message === ""
    
    ) {
      this.setState({Message: true });
     
    } else {
    
      this.MondayFunction();
     
    }
  };

  MondayFunction = () => {
    
 var Adding_Response = AddingQuery_Monday(this.state.UserOBJ.UserID,this.state.Contact_Message);
 Adding_Response.then((data)=>{
if(data!==null){

 var updatingResponse= UpdatingQuery_Monday(this.state.UserOBJ.UserID)
// var updatingResponse=GetFaqs()
var submitButton=document.getElementById('SubmitBtn')

submitButton.classList.add("DisabledInput")
submitButton.disabled=true
submitButton.innerText='Loading..'

// })

toast.promise(
  updatingResponse,
  {
    loading: 'Please Wait',
    success: (data) => {
   if(data!==null){
    this.setState({ Success_Msg: true });
    submitButton.classList.remove("DisabledInput")
submitButton.disabled=false
submitButton.innerText='Contact Us'
    return "Message Sent"
   }
   },
    error: (err) => {
      this.setState({ Fail_Msg: true });
      return `Something Went Wrong Please Try Again`},
  },
  {
    style: {
      minWidth: '250px',
    },
    success: {
      duration: 1500,
      
    },
  }
);
}


 })
  };
  render() {
    return (
      <form className="contact-one__form">
        <Toaster/>
        <div className="row low-gutters">
          <div className="col-md-6 p-0">
            <div className="input-group">
              <input
              className="DisabledInput"
                type="text"
                name="name"
                placeholder="Your Name"
            disabled
                value={this.state.UserOBJ.Username}
                // onChange={(e) =>
                //   this.setState({ Contact_Name: e.target.value })
                // }
              />
              {this.state.Name ? (
                <p className="text-danger m-0">Please enter your name</p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="col-md-6 p-0">
            <div className="input-group">
              <input
                type="text"
                name="email"
                className="DisabledInput"
                placeholder="Email Address"
                disabled
                value={this.state.UserOBJ.UserEmail}
                // onChange={(e) =>
                //   this.setState({ Contact_Email: e.target.value })
                // }
              />
              {this.state.Email ? (
                <p className="text-danger m-0">Please enter a valid email</p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="col-md-12 p-0">
            <div className="input-group">
              <textarea
                name="message"
                placeholder="Write Message"
                onChange={(e) =>
                  this.setState({ Contact_Message: e.target.value })
                }
              ></textarea>
              {this.state.Message ? (
                <p className="text-danger m-0">Please enter your message</p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="col-md-12">
            <div className="input-group contact__btn">
              <button
                onClick={(e) => this.SubmitContact(e)}
                className="thm-btn"
                id="SubmitBtn"
              >
                Contact Us
              </button>

              {console.log(
                this.state.BoardId,
                this.state.BoardName,
                this.state.Contact_Email
              )}
            </div>
            {this.state.Success_Msg ? (
              <p className="text-success text-left m-0">
                Message Sent Successfully
              </p>
            ) : (
              <></>
            )}
            {this.state.Fail_Msg ? (
              <p className="text-danger text-left m-0">Something Went Wrong</p>
            ) : (
              <></>
            )}
          </div>
        </div>
      </form>
    );
  }
}
