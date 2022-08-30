import { GetMonday, Monday_Api_One } from "../../Utils/ApiCalls";
import React, { Component } from "react";
import { GetCurrDate } from "../../Utils/GlobalFunctions";

export default class ReferalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
      BoardId: "",
      EmailField_Id: "",
    
      StageID:"",
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
      Contact_Phone:"",
      CurrentUser_Email:JSON.parse(localStorage.getItem("UserObj")).UserEmail,
    };
  }
 

  SubmitReferral = (e) => {
    e.preventDefault();
    var StageID = "";
    var boardId = "";
    var emailFieldId = "";       
    var descriptionFieldId = "";
    var authToken = "";
    var response = GetMonday();
    var refbtn=document.getElementById('RefBtn')
    refbtn.classList.add("DisabledInput")
    refbtn.disabled=true
    refbtn.innerText='Please Wait..'

    if (
      this.state.Contact_Email === "" &&
      this.state.Contact_Message === "" &&
      this.state.Contact_Name === ""
    ) {
      this.setState({ Email: true, Name: true, Message: true });
    } else if (this.state.Contact_Email === "") {
      this.setState({ Email: true, Name: false, Message: false });
    } else if (!this.state.Contact_Email.includes("@")) {
      this.setState({ Email: true, Name: false, Message: false });
    } else if (this.state.Contact_Name === "") {
      this.setState({ Email: false, Name: true, Message: false });
    } else if (this.state.Contact_Message === "") {
      this.setState({ Email: false, Name: false, Message: true });
    } else {
      response.then((data) => {
   
        boardId = data.items[0].fields.boardId;
        emailFieldId = data.items[0].fields.emailFieldId; 
        descriptionFieldId = data.items[0].fields.ReferedByID;
        authToken = data.items[0].fields.authToken;
        StageID=data.items[0].fields.stageId
        
        this.setState(
          {
            BoardId: boardId,
           
            EmailField_Id: emailFieldId,
            StageID:StageID,
            DescriptionField_Id: descriptionFieldId,
            AuthToken: authToken,
            Email: false,
            Name: false,
            Message: false,
          },
          () => {
            this.MondayFunction();
          }
        );
      });
    }
  };

  MondayFunction = () => {
    var CreatingLead_Raw = JSON.stringify({
      query:
        "mutation { create_item (board_id:" +
        this.state.BoardId +
        ', item_name: "' +
        this.state.Contact_Name +
        '") { id }}',
    });

    var Lead_Response = Monday_Api_One(CreatingLead_Raw,this.state.AuthToken);
    Lead_Response.then((Lead_Data) => {
      if (Lead_Data !== null) {      
        var LeadData_Raw = JSON.stringify({
          query:
            'mutation {change_multiple_column_values (item_id: '+
                  Lead_Data.data.create_item.id 
                  +', board_id: '+
                    this.state.BoardId 
                  +', column_values: "{\\"'+this.state.StageID+'\\": {\\"index\\": 13},\\"'+this.state.EmailField_Id+'\\":{\\"email\\":\\"'+this.state.Contact_Email
                   +'\\",\\"text\\":\\"Email '+ this.state.Contact_Name+'\\"},\\"'+this.state.DescriptionField_Id+'\\":\\"'+this.state.CurrentUser_Email+'\\"}") {id}}',
        });
        var LeadData_Response = Monday_Api_One(LeadData_Raw,this.state.AuthToken);
        LeadData_Response.then((LeadData) => {
          if (LeadData !== null) {


            var MoveToGroup = JSON.stringify({
              query:'mutation {move_item_to_group (item_id: '+Lead_Data.data.create_item.id+', group_id: "new_group23057") {id}}'
                 });
                 var LeadData_Response = Monday_Api_One(MoveToGroup,this.state.AuthToken);
                 LeadData_Response.then((Data)=>{
                 if(Data!==null){ this.setState({ Success_Msg: true });  
                 var refbtn=document.getElementById('RefBtn')
            
                 refbtn.innerText='Referral Sent'}
                 else {
                  this.setState({ Fail_Msg: true });
                }
                 })

            
          } else {
            this.setState({ Fail_Msg: true });
          }
        });
      } else {
        this.setState({ Fail_Msg: true });
      }
    });
  };
  render() {
    return (
      <form className="contact-one__form">
        <div className="row low-gutters">
          <div className="col-md-6 p-0 m-0">
            <div className="input-group m-0">
              <input
                type="text"
                name="name"
                placeholder="Referral's Name"
                onChange={(e) =>
                  this.setState({ Contact_Name: e.target.value })
                }
              />
              {this.state.Name ? (
                <p className="text-danger m-0">Please enter your name</p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="col-md-6 p-0 m-0">
            <div className="input-group m-0">
              <input
                type="text"
                name="email"
                placeholder="Referral's Email Address"
                onChange={(e) =>
                  this.setState({ Contact_Email: e.target.value })
                }
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
              <input
              type={"phone"}
                name="Phone"
                placeholder="Referral's Phone"
                onChange={(e) =>
                  this.setState({ Contact_Phone: e.target.value })
                }
              ></input>
              {this.state.Message ? (
                <p className="text-danger m-0">Please a valid phone number</p>
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
              id="RefBtn"
                onClick={(e) => this.SubmitReferral(e)}
                className="thm-btn"
              >
                Share Referral
              </button>

              {console.log(
                this.state.BoardId,
                this.state.BoardName,
                this.state.Contact_Email
              )}
            </div>
            {this.state.Success_Msg ? (
              <p className="text-success text-left m-0">
                Referral sent successfully!
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
