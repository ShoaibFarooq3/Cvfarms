import React, { Component } from "react";

import "../Assets/Auth_Styles/login.css";
import { Link } from "react-router-dom";
import 'animate.css'
import {GetUserVersion, UpdateUserInfo, UserExists} from '../Utils/ApiCalls'
import { LoginHeader } from "./LoginHeader";
import { Expired, Unauthorised } from "../Screens/NotFound";
import { DecryptVal, EncryptVal } from "../Utils/Encryption";
import dateFormat from "dateformat";
import toast, { Toaster } from "react-hot-toast";

export default class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      RePassword: "",
      UserPassword:"",
      EmptyRePassword:false,
      EmptyPassword:false,
      invalidCred: false,      
      PasswordMatch:false,
      Unauthorized_User:false,
      Expired:false,
      Version:"",
      UserName:"",
      EntryID:"",
      User_Email:"",
      UserID:""
    };
  }

componentWillMount(){

    var queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var URL_Email=urlParams.get("email")
    var decodeEmail=window.location.search;
URL_Email=decodeEmail.substring(decodeEmail.indexOf("email=")+6,decodeEmail.indexOf("&time="))

    var dummyMail="dumb@testmail.com"
    var URl_Time=urlParams.get("time")
    URl_Time=new Date (URl_Time)
    URl_Time=URl_Time.getTime()
    var addMlSeconds = 5*60 * 60 * 1000;
var newDateObj = new Date(URl_Time - addMlSeconds);
    var currentDate=new Date()
  //  currentDate= dateFormat(currentDate, "dddd, mmmm dS, yyyy, h:MM:ss TT");
   URl_Time=dateFormat(URl_Time, "dddd, mmmm dS, yyyy, h:MM:ss TT");
    // alert(URl_Time)

      if(newDateObj<currentDate)
      {
        this.setState({Expired:true})
      }

      

    if(DecryptVal(URL_Email)==""){
      this.setState({Unauthorized_User:true})
    }else{
      this.setState({User_Email:DecryptVal(URL_Email)})
      var response=  UserExists(DecryptVal(URL_Email))
      response.then((Data)=>{
        console.log(Data)
       if(Data!==null)
       {
        console.log(Data)
        if(Data.total==0)
        {
          
          this.setState({Unauthorized_User:true})
        }
        else{
         
          this.setState({Unauthorized_User:false})
          this.setState({EntryID:Data.items[0].sys.id})
          this.setState({UserName:Data.items[0].fields.userName})
          this.setState({UserID:Data.items[0].fields.userId})
          var VersionResponse= GetUserVersion(Data.items[0].sys.id)
          VersionResponse.then((data)=>{
            if(data!==null){
              this.setState({Version:data.sys.version})
            }
          })
        }
       }
    
      })
  }


}


  ResetClick = () => {

    if(this.state.RePassword===""&&this.state.UserPassword==="")
    {
        this.setState({EmptyRePassword:true,EmptyPassword:true})
    }
    else if(this.state.RePassword===""){
        this.setState({EmptyRePassword:true,EmptyPassword:false})
    }
    else if(this.state.UserPassword===""){
        this.setState({EmptyRePassword:false,EmptyPassword:true})
    }
    else if(this.state.RePassword!==this.state.UserPassword){
        this.setState({PasswordMatch:true})
    }
    else{this.setState({EmptyRePassword:false,EmptyPassword:false,PasswordMatch:false})
         
  var response= UpdateUserInfo(this.state.User_Email,this.state.RePassword,this.state.UserName,this.state.EntryID, this.state.Version, this.state.UserID)
  response.then((data)=>{
    if(data!==null){
      // alert("Password Updated")

    }
    else{
      alert("Faliure")
    }
  })
  toast.promise(
    response,
    {
      loading: 'Please Wait',
      success: (data) => {
     if(data!==null){
      setTimeout(() => {
        window.location.href="/"
      }, 1500);
      return "Password Updated"
     }
     },
      error: (err) => `Something Went Wrong Please Try Again`,
    },
    {
      style: {
        minWidth: '250px',
      },
      success: {
        duration: 15000,
        
      },
    }
  );
       
    
        }
   
  };
 

  
  render() {
    return (
    <>
{this.state.Unauthorized_User?
    <Unauthorised/>
:
this.state.Expired?
<Expired/>
:
    <>
 <Toaster/>
    <LoginHeader/>
      <video src="http://cv.leadsfizz.com/login.mov" autoPlay muted  id="myVideo">
  
</video>
      <div className="vertical-align-wrap text-left">
        <div className="vertical-align-middle auth-main">
          <div className="Auth_box animate__animated animate__fadeInUpBig">
            <div className="Card">             
              <div className="body">
            
               <div className="form-auth-small Login_Form">

                  <div className="form-group">
                    {this.state.PasswordMatch ? (
                      <div className="text-danger">Passowrds donot match</div>
                    ) : (
                      <></>
                    )}
                    
                    <label className="control-label sr-only">
New Password</label>
                    <input
                      className="form-control"
                      id="signin-email"
                      placeholder="New Password"
                      required
                      type="password"
                      

                      onChange={(val) => {
                        this.setState({ RePassword: val.target.value });
                      }}
                    />
                    {this.state.EmptyRePassword ? (
                      <div className="text-danger">Enter a password</div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="form-group">

                    <label className="control-label sr-only"> Re-Enter Password</label>
                    <input
                      className="form-control"
                      id="signin-password"
                      required
                      placeholder={"Re Enter New Password"}

                      type="password"
                      /* value={password} */

                      onChange={(val) => {
                        this.setState({ UserPassword: val.target.value });
                      }}
                    />
                    {this.state.EmptyPassword ? (
                      <div className="text-danger">Re-Enter Password</div>
                    ) : (
                      <></>
                    )}
                  </div>                
                  
                 
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      onClick={() => this.ResetClick()}
                    >
                     Save Password
                    </button>               
              
                </div>
              


              </div>
            </div>
          </div>
        </div>
      </div>
      </>}
      </>
    );
  }
}
