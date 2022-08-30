import React, { Component } from "react";
import Logo from "../images/logo.png";
import "../Assets/Auth_Styles/login.css";
import { Link } from "react-router-dom";
import "animate.css";
import {
  Getting_Info_Of_Item,
  RegisterUser,
  UpdatingStatus_Of_Item,
  UserExists,
} from "../Utils/ApiCalls";
import { Toaster, toast } from "react-hot-toast";
import { LoginHeader } from "./LoginHeader";
import { Expired, Link_Expired, NotFound, Unauthorised } from "../Screens/NotFound";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      DetailsList: [],
      UserName: "",
      UserID_Mondays: "",
      UserEmail_Mondays: "",
      Loading: true,
      DataState: "",
      UserPassword: "",
      PasswordMatch: false,
      EmptyRePassword: false,
      EmptyPassword: false,
      RePassword: "",
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.GettingItemInfo();
    }, 2000);
    // check email exist in contentfull false
  }

  GettingItemInfo = () => {
    var queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    var URL_ItemID = urlParams.get("ItemID");
    Getting_Info_Of_Item(URL_ItemID)
      .then((res_Data) => {
        if (res_Data.data != undefined) {
          if (res_Data.data.items != undefined) {
            if (res_Data.data.items.length == 0) {
              this.setState({
                DetailsList: [],
                UserName: "",
                UserID_Mondays: "",
                Loading: false,
                DataState: "No_Record",
              });
            }

            this.setState(
              {
                DetailsList: res_Data.data.items[0].column_values,
                UserName: res_Data.data.items[0].name,
                UserID_Mondays: URL_ItemID,
              },
              () => {
                var EmailOBJ = {};
                var valueEmail = "";
                this.state.DetailsList.forEach((element) => {
                  if (element.id == "email_1") {
                    try {
                      EmailOBJ = JSON.parse(element.value);
                      valueEmail = EmailOBJ.email;
                    } catch {
                      EmailOBJ = null;
                    }
                    this.setState({ UserEmail_Mondays: valueEmail }, () => {
                      console.log(
                        this.state.UserID_Mondays,
                        this.state.UserEmail_Mondays,
                        this.state.DetailsList,
                        this.state.UserName
                      );
                    });
                  }
                });
                if (valueEmail != "") {
                  UserExists(valueEmail)
                    .then((res_Data) => {
                      if (res_Data != null) {
                        if (res_Data.total != 0) {
                          this.setState({ DataState: "Email_Exist" });
                        } else {
                          this.setState({ DataState: "Not_Exist" });
                        }
                      } else {
                        this.setState({ DataState: "InvalidEmail" });
                      }
                    })
                    .catch(() => {
                      this.setState({ DataState: "InvalidEmail" });
                    });
                } else {
                  this.setState({ DataState: "InvalidEmail" });
                }
                this.setState({ Loading: false });
              }
            );
          } else {
            //no record
            this.setState({
              DetailsList: [],
              UserName: "",
              UserID_Mondays: "",
              Loading: false,
              DataState: "No_Record",
            });
          }
        } else {
          this.setState({
            DetailsList: null,
            UserName: null,
            UserID_Mondays: "",
            Loading: false,
            DataState: "Error",
          });
        }
      })
      .catch((e) => {});
  };

  RegisterClick = (e) => {
    if (this.state.RePassword === "" && this.state.UserPassword === "") {
      this.setState({ EmptyRePassword: true, EmptyPassword: true });
    } else if (this.state.RePassword === "") {
      this.setState({ EmptyRePassword: true, EmptyPassword: false });
    } else if (this.state.UserPassword === "") {
      this.setState({ EmptyRePassword: false, EmptyPassword: true });
    } else if (this.state.RePassword !== this.state.UserPassword) {
      this.setState({ PasswordMatch: true });
    } else {
      this.setState({
        EmptyRePassword: false,
        EmptyPassword: false,
        PasswordMatch: false,
      });

      var response = RegisterUser(
        this.state.UserEmail_Mondays,
        this.state.UserPassword,
        this.state.UserName,
        this.state.UserID_Mondays
      );
      console.log(response);
      response.then((Data) => {
        console.log(Data);
        if (Data !== null) {
          if (
            Data.message !== undefined ||
            Data.message === "Validation error"
          ) {
            this.setState({ DataState: "InvalidEmail" });
          } else {
            UpdatingStatus_Of_Item(this.state.UserID_Mondays,1)
            toast.success("User Registered. Please Wait...");
            setTimeout(() => {
              window.location.href = "/login";
            }, 2000);
          }
        }
      });
    }
  };

  render() {
    if (this.state.Loading) {
      return (
        <div className="vertical-align-wrap text-left">
        <div className="vertical-align-middle auth-main">
        <div class="lds-grid">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div></div></div>
      );
    } else {
      switch (this.state.DataState) {
        case "Error": {
          return <NotFound></NotFound>;
          break;
        }
        case "No_Record": {
          return <Unauthorised />;

          break;
        }
        case "InvalidEmail": {
          return <Unauthorised />;

          break;
        }
        case "Email_Exist": {
          return <Link_Expired/>;

          break;
        }
        case "Not_Exist": {
          return (
            <>
              <div className="vertical-align-wrap text-left">
                <Toaster />
                <div className="vertical-align-middle auth-main">
                  <div className="Auth_box animate__animated animate__fadeInUpBig animate__delay-1s">
                    <div className="Card">
                      <div className="body">
                        <div className="form-auth-small Login_Form">
                          <div className="form-group">
                            <span className="text-light">User Name: </span>
                            <input
                              className="form-control registerInputs disabledInput"
                              placeholder="User Name"
                              id="RegisterUserName"
                              value={this.state.UserName}
                            />
                          </div>

                          <div className="form-group">
                            <span className="text-light">Email: </span>
                            <input
                              className="form-control registerInputs disabledInput"
                              placeholder="User Email"
                              id="RegisterEmail"
                              value={this.state.UserEmail_Mondays}
                            />
                          </div>
                          <div className="form-group">
                            <span className="text-light">Password:</span>
                            <input
                              className="form-control registerInputs"
                              type="password"
                              placeholder="User Password"
                              id="RegisterPassword"
                              onChange={(e) => {
                                this.setState({ UserPassword: e.target.value });
                              }}
                            />
                            {this.state.EmptyPassword ? (
                              <div className="text-danger">
                                Enter a password
                              </div>
                            ) : (
                              <></>
                            )}
                          </div>
                          <div className="form-group">
                            <span className="text-light">
                              Confirm password:
                            </span>
                            <input
                              className="form-control registerInputs"
                              type="password"
                              placeholder="Confirm Password"
                              id="RegisterConfirmPassword"
                              onChange={(e) => {
                                this.setState({ RePassword: e.target.value });
                              }}
                            />
                            {this.state.EmptyRePassword ? (
                              <div className="text-danger">
                                Re-Enter Password
                              </div>
                            ) : (
                              <></>
                            )}

                            {this.state.PasswordMatch ? (
                              <div className="text-danger">
                                Passowrds donot match
                              </div>
                            ) : (
                              <></>
                            )}
                          </div>

                          <div className="form-group mt-2">
                            <button
                              className="btn btn-primary btn-lg btn-block"
                              onClick={() => this.RegisterClick()}
                            >
                              Register
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Toaster />
              <LoginHeader />
              <video
                src="http://cv.leadsfizz.com/login.mov"
                autoPlay
                muted
                id="myVideo"
              ></video>
            </>
          );
          break;
        }
        case "": {
          return <div></div>;
          break;
        }
      }
    }
  }
}
