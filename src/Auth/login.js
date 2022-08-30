import React, { Component } from "react";

import "../Assets/Auth_Styles/login.css";
import { Link } from "react-router-dom";
import 'animate.css'
import {LoginUser, RegisterUser, SendResetLink, UserExists} from '../Utils/ApiCalls'
import { LoginHeader } from "./LoginHeader";
import { EncryptVal } from "../Utils/Encryption";
import toast, { Toaster } from "react-hot-toast";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UserEmail: "",
      UserPassword:"",
      EmptyEmail:false,
      EmptyPassword:false,
      invalidCred: false,
      LoginForm:true,
      ResetEmail:"",
      EmailNotExist:false,
      EncryptedEmail:"",
      Link_Timeout:null,
      ResetSuccess:false,
     
    };
  }
  
  LoginClick = () => {

    if(this.state.UserEmail===""&&this.state.UserPassword==="")
    {
        this.setState({EmptyEmail:true,EmptyPassword:true})
    }
    else if(this.state.UserEmail===""|| !this.state.UserEmail.includes("@")){
        this.setState({EmptyEmail:true,EmptyPassword:false})
    }
    else if(this.state.UserPassword===""){
        this.setState({EmptyEmail:false,EmptyPassword:true})
    }
    else{this.setState({EmptyEmail:false,EmptyPassword:false})
    var Login_response= LoginUser(this.state.UserEmail,this.state.UserPassword)
    Login_response.then((data)=>{
        if(data.total===0){
            this.setState({invalidCred:true})
        }
        else{
            localStorage.setItem("LoggedStatus", "yes");
            localStorage.setItem("UserName",data.items[0].fields.userName)
         window.location.href = '/';
         var UserObj={};
       UserObj={
"UserID":data.items[0].fields.userId,
"Username":data.items[0].fields.userName,
"UserEmail":data.items[0].fields.userEmail
       }  

       localStorage.setItem("UserObj",JSON.stringify(UserObj))
        }


    })
    
    
        }
   
  };

  ToggleForm=()=>{
    
this.setState({LoginForm:!this.state.LoginForm})
  }

  ForgetPassword=()=>{
  var response=  UserExists(this.state.ResetEmail)
  response.then((Data)=>{
    console.log(Data)
   if(Data!==null)
   {
    if(Data.total==0)
    {
      this.setState({EmailNotExist:true})
    }
    else{
      
      this.setState({EmailNotExist:false})
       this.setState({EncryptedEmail:EncryptVal(this.state.ResetEmail)},()=>{
      var Curr_Time=new Date ()
      Curr_Time=Curr_Time.getTime()
       var addMlSeconds = 3*60 * 60 * 1000;
   var Link_Time = new Date(Curr_Time + addMlSeconds);
this.setState({Link_Timeout:Link_Time})
// alert(this.state.EncryptedEmail)
var resetResponse=SendResetLink(this.state.ResetEmail,this.state.EncryptedEmail,Link_Time);
// resetResponse.then((data=>{
//   if(data=="success")
//   {
//     this.setState({ResetSuccess:true})
//   }
//   else{
//     this.setState({ResetSuccess:false})
//     alert("There was an error, please try again later.")

//   }
// }))
toast.promise(
  resetResponse,
  {
    loading: 'Please Wait',
    success: (data) => {
   if(data=="success"){
    this.setState({ResetSuccess:true})
    return "Reset Link Sent"
   }
   },
    error: (err) => {
      this.setState({ResetSuccess:false})
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

       })

    }
   }

  })

  
  }
  render() {
    return (
    
    <>
    <Toaster/>
    <LoginHeader/>
      <video src="http://cv.leadsfizz.com/login.mov" autoPlay muted  id="myVideo">
  
</video>
      <div className="vertical-align-wrap text-left">
        <div className="vertical-align-middle auth-main">
          <div className="Auth_box animate__animated animate__fadeInUpBig animate__delay-5s	">
            <div className="Card">             
              <div className="body">
              {this.state.LoginForm? 
               <div className="form-auth-small Login_Form">
                 
                  <div className="form-group">
                    {this.state.invalidCred ? (
                      <div className="text-danger">Invalid Credentials</div>
                    ) : (
                      <></>
                    )}
                    
                    <label className="control-label sr-only">Email</label>
                    <input
                      className="form-control"
                      id="signin-email"
                      placeholder="Username or EmailAddress"
                      required
                      type="email"
                      /* value={email} */

                      onChange={(val) => {
                        this.setState({ UserEmail: val.target.value });
                      }}
                    />
                    {this.state.EmptyEmail ? (
                      <div className="text-danger">Enter A Valid Email</div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="form-group">

                    <label className="control-label sr-only">Password</label>
                    <input
                      className="form-control"
                      id="signin-password"
                      required
                      placeholder="Password"
                      type="password"
                      /* value={password} */

                      onChange={(val) => {
                        this.setState({ UserPassword: val.target.value });
                      }}
                    />
                    {this.state.EmptyPassword ? (
                      <div className="text-danger">Enter Password</div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="form-group clearfix">
                    <label className="fancy-checkbox element-left">
                      <input
                        type="checkbox"
                        // onChange={(e) => this.RememberStatusChange(e)}
                      />
                      <span> Remember me</span>
                    </label>
                  </div>
                  
                 
                    <button
                      className="btn btn-primary btn-lg btn-block"
                      onClick={() => this.LoginClick()}
                    >
                      Log in
                    </button>
                
                
                  <div className="bottom text-left">
                    <span className="helper-text m-b-10">
                      {/* <i className="fa fa-lock"></i>{" "} */}
                      <a  className="text-light" onClick={()=>this.ToggleForm()}>
                       Lost your password?
                        <br />
                      </a>
                    </span>
                    {/* <span>
                      Don't have an account?{" "}
                      <Link to="/register">Register</Link>
                    </span> */}
                  </div>
                </div>
                :
                <div className="form-auth-small ForgetPassword">
                <div className="form-group mb-5">
                    {this.state.EmailNotExist? (
                      <div className="text-danger">The entered email is not registed</div>
                    ) :
                    this.state.ResetSuccess?
                    <div className="text-success">Password reset link sent to entered email.</div>  
                    
                    :
                    (
                      <></>
                    )}
                    
                    <label className="control-label sr-only">Email</label>
                    <input
                      className="form-control"
                      id="signin-email"
                      placeholder="Enter EmailAddress"
                      required
                      type="email"
                     
                      onChange={(val) => {
                        this.setState({ ResetEmail: val.target.value });
                      }}
                    />
                    {console.log(this.state.ResetEmail)}
                    {this.state.EmptyEmail ? (
                      <div className="text-danger">Enter A Valid Email</div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <button
                      className="btn btn-primary btn-lg btn-block mt-4"
                      onClick={() => this.ForgetPassword()}
                    >
                      Reset Password
                    </button>
                    <div className="bottom text-left">
                    <span className="helper-text m-b-10">
                      {/* <i className="fa fa-lock"></i>{" "} */}
                      <a className="text-light" onClick={()=>this.ToggleForm()}>
                       Back to login
                        <br />
                      </a>
                    </span>
                    {/* <span>
                      Don't have an account?{" "}
                      <Link to="/register">Register</Link>
                    </span> */}
                  </div>
                </div>}


              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}
