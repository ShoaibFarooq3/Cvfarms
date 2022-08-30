import "../../Assets/Sidebar.css";
import "../../Assets/MobileMenu.css";
import "animate.css";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import Logo from "../../images/logo.png";

export default class MobileMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  Logout = () => {
    localStorage.removeItem("LoggedStatus");
  };
  render() {
    return (
      <div className="MenuBody animate__animated animate__fadeInLeft">
        <div className="row p-4">
          <div className="col-xl-6 col-lg-6 col-md-6 col-6 col-sm-6 d-flex justify-content-start">
            {/* <div className="">
              {" "}
              <img
                src={Logo}
                width={200}
                // "assets/images/resources/logo.png"
                className="main-logo"
                alt="Awesome Image"
              />
            </div> */}
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 d-flex justify-content-end">
            <a onClick={this.props.Toggle}>
              <i className="fa fa-close closeIconMenu mt-4 " />
            </a>
          </div>
        </div>

        <div
          className="nav flex-column nav-pills text-left p-3"
          id="v-pills-tab"
          role="tablist"
          aria-orientation="vertical"
        >
          {/* <a
            className="nav-link active"
            id="v-pills-home-tab"
            data-toggle="pill"
            href="#v-pills-home"
            role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
            onClick={this.props.Toggle}
          >
            <Link to="/" className="">
              VIEW DOCUMENTS
            </Link>
          </a> */}
          <ul className="Mobile__navigation-box">
            <li className="dropdown">
              <a href="#">About</a>
              <ul>
                <li>
                  <Link to="/aboutus" onClick={this.props.Toggle}>
                    <a>About Us</a>
                  </Link>
                </li>
                <li>
                  <Link to="/company-directory" onClick={this.props.Toggle}>
                    <a>Company Directory</a>
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" onClick={this.props.Toggle}>
                    <a>Gallery</a>
                  </Link>
                </li>
                <li>
                <Link to="/project-tracker" onClick={this.props.Toggle}>
                <a>Project Timeline</a>{" "}
              </Link>
                </li>
              </ul>
            </li>
            {/* <li className="dropdown" id="HomeNav" onClick={this.props.Toggle}>
              <Link to="/project-tracker">
                <a>Project Timeline</a>{" "}
              </Link>
            </li> */}
            <li className="dropdown" id="HomeNav" onClick={this.props.Toggle}>
              <Link to="/investor-progress">
                <a> VIEW DOCUMENTS</a>{" "}
              </Link>
            </li>

            <li className="dropdown">
              <a href="#">Resources</a>
              <ul>
                {/* <li onClick={this.props.Toggle}>
                  <Link to="/foodhistory">
                    <a>Food History</a>
                  </Link>
                </li>
                <li onClick={this.props.Toggle}>
                  <Link to="/cogen">
                    <a>Cogen Explanation</a>
                  </Link>
                </li> */}
                <li onClick={this.props.Toggle}>
                  <Link to="/proforma">
                    <a>Pro Forma</a>
                  </Link>
                </li>
                <li onClick={this.props.Toggle}>
                  <Link to="/businessplan">
                    <a>Business Plan</a>
                  </Link>
                </li>
                <li onClick={this.props.Toggle}>
                  <Link to="/referrals">
                    <a>Referral</a>
                  </Link>
                </li>
              </ul>
            </li>
            <li className="dropdown" id="HomeNav" onClick={this.props.Toggle}>
              <Link to="/contact">
                <a>LET'S TALK </a>{" "}
              </Link>
            </li>

            <li className="dropdown" id="FaqNav" onClick={this.props.Toggle}>
              <Link to="/faq">
                <a>FAQ</a>{" "}
              </Link>
            </li>
            <li className="dropdown" id="FaqNav" onClick={this.props.Toggle}>
              <Link to="/faq">
                <a>FAQ</a>{" "}
              </Link>
            </li>
            <li className="dropdown" onClick={this.props.Logout}>
              <a href="/">Logout</a>{" "}
            </li>
          </ul>
        </div>

        {/* <div class="dropdown-menu dropdown-menu-right text-right">
          <a class="dropdown-item" href="#">
            Link
          </a>
          <a class="dropdown-item" href="#">
            Link
          </a>
          <a class="dropdown-item" href="#">
            Link
          </a>
        </div> */}
      </div>
    );
  }
}
