import React, { Component } from "react";
import { Router } from "react-router-dom";
import { Link, Navigate } from "react-router-dom";
import { Logout } from "../Utils/GlobalFunctions";
import MobileMenu from "./HeaderComponents.js/MobileMenu";

import { SideBar } from "./HeaderComponents.js/SideBar";
export class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Sidebar: false,
      MobileNav: false,
      LoggedStatus: localStorage.getItem("LoggedStatus"),
    };
  }

  changeBackground = () => {
    var header = document.getElementById("Main_Header");
    var Nav = document.getElementById("StickyNav");
    var Icon = document.getElementById("StickyIcon");
    if (window.scrollY >= 206) {
      header.classList.add("StickyHeader");
      Nav.classList.add("StickyNav");
      Icon.classList.add("StickyIcon");
    } else {
      header.classList.remove("StickyHeader");
      Nav.classList.remove("StickyNav");
      Icon.classList.remove("StickyIcon");
    }
  };
  DontChangeBackground = () => {
    var header = document.getElementById("Main_Header");
    var Nav = document.getElementById("StickyNav");
    var Icon = document.getElementById("StickyIcon");
    if (window.scrollY >= 0) {
      header.classList.add("StickyHeader");
      Nav.classList.add("StickyNav");
      Icon.classList.add("StickyIcon");
    } else {
      header.classList.remove("StickyHeader");
      Nav.classList.remove("StickyNav");
      Icon.classList.remove("StickyIcon");
    }
  };
  toggleSidebar = () => {
    this.setState({ SideBar: !this.state.Sidebar });
  };
  toggleMenu = () => {
    this.setState({ MobileNav: true });
  };
  closeSidebar = () => {
    this.setState({ SideBar: false });
  };
  closeMenu = () => {
    this.setState({ MobileNav: false });
  };
  componentDidMount() {
    if (this.props.Type == "Global") {
      this.changeBackground();
      window.addEventListener("scroll", this.changeBackground);
    } else {
      this.DontChangeBackground();
      window.addEventListener("scroll", this.DontChangeBackground);
    }
  }

  activeMeniItem = (id) => {
    var parents = document.getElementById("Main_Menu");
    var activeMenu = document.getElementById(id);

    for (let index = 0; index < parents.children.length; index++) {
      if (parents.children[index].id !== id) {
        parents.children[index].classList.remove("current");
      }
    }
    activeMenu.classList.add("current");
  };

  Logout = () => {
    Logout();
  };

  render() {
    return (
      <>
        {this.state.MobileNav ? (
          <MobileMenu Toggle={() => this.closeMenu()}  Logout={()=> this.Logout()}/>
        ) : (
          <></>
        )}
        {this.state.SideBar ? (
          <SideBar Toggle={() => this.closeSidebar()} />
        ) : (
          <></>
        )}
        <div className="site-header__header-one-wrap text-left">
          <header className="main-nav__header-one" id="Main_Header">
            <nav className="header-navigation stricky">
              <div className="topSideShape"></div>
              <div className="container-fluid clearfix">
                {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                <div className="row pl-4 pr-4">
                  <div className="main-nav__left col-xl-11 col-lg-11 col-md-11 col-sm-11 col-11">
                    <a className="" onClick={() => this.toggleMenu()}>
                      <i className="fa fa-bars text-white Menu_Icon"></i>
                    </a>
                  </div>
                  <div
                    className="main-nav__main-navigation d-flex justify-content-end col-xl-11 col-lg-11 col-md-11"
                    id="StickyNav"
                  >
                    <ul className="main-nav__navigation-box">
                    <li className="dropdown">
                        <a href="#">About</a>
                        <ul>
                          <li>
                            <Link to ="/aboutus">
                            <a>About Us</a></Link>
                          </li>
                          <li><Link to ="/company-directory">
                            <a>Company Directory</a></Link>
                          </li>
                          <li><Link to ="/gallery">
                            <a>Gallery</a></Link>
                          </li>
                          <li><Link to="/project-tracker">
                          <a>Project Timeline</a>{" "}
                        </Link>
                          </li>
                         
                          
                        </ul>
                        
                      </li> 

                      {/* <li
                        className="dropdown"
                        id="HomeNav"
                        onClick={() => this.activeMeniItem("HomeNav")}
                      >
                        <Link to="/project-tracker">
                          <a>PROJECT TIMELINE</a>{" "}
                        </Link>
                      </li> */}
                      <li
                        className="dropdown"
                        id="HomeNav"
                        onClick={() => this.activeMeniItem("HomeNav")}
                      >
                        <Link to="/investor-progress">
                          <a> VIEW DOCUMENTS</a>{" "}
                        </Link>
                      </li>


                      <li className="dropdown">
                        <a href="#">Resources</a>
                        <ul>
                          {/* <li>
                            <Link to ="/foodhistory">
                            <a>Food History</a></Link>
                          </li>
                          <li><Link to ="/cogen">
                            <a>Cogen Explanation</a></Link>
                          </li> */}
                          <li><Link to ="/proforma">
                            <a >Pro Forma</a></Link>
                          </li>
                          <li><Link to ="/businessplan">
                            <a>Business Plan</a></Link>
                          </li>
                          <li><Link to ="/referrals">
                            <a>Referral</a></Link>
                          </li>
                        </ul>
                        
                      </li> 
                      <li
                        className="dropdown"
                        id="HomeNav"
                        onClick={() => this.activeMeniItem("HomeNav")}
                      >
                        <Link to="/contact">
                          <a>LET'S TALK </a>{" "}
                        </Link>
                      </li>
                      


                      <li
                        className="dropdown"
                        id="FaqNav"
                        onClick={() => this.activeMeniItem("FaqNav")}
                      >
                        <Link to="/faq">
                          <a>FAQ</a>{" "}
                        </Link>
                      </li>
                      {this.state.LoggedStatus === "yes" ? (
                        <li
                          className="dropdown"
                          id="LogoutNav"
                          onClick={() => this.Logout()}
                        >
                          <a href="/">Logout</a>{" "}
                        </li>
                      ) : (
                        <>
                          <li className="dropdown" id="LoginNav">
                            <a href="login">Login</a>{" "}
                          </li>
                          <li className="dropdown" id="registerNav">
                            <a href="register">Register</a>{" "}
                          </li>
                        </>
                      )}
                      {/* <li
                        className="dropdown"
                        id="AboutNav"
                        onClick={() => this.activeMeniItem("AboutNav")}
                      > */}
                        {/* <Link to="AboutUS"> About Us</Link>
                      </li>
                      <li
                        className="dropdown"
                        id="GalleryNav"
                        onClick={() => this.activeMeniItem("GalleryNav")}
                      >
                        <Link to="Gallery"> Gallery</Link>
                      </li> */}

                      
                    </ul>
                  </div>

                  <div className="main-nav__right col-lg-1 d-flex justify-content-end col-xl-1 col-sm-1 col-1">
                    <div className="icon_cart_box" id="StickyIcon">
                      <a onClick={() => this.toggleSidebar()}>
                        {/* <i className="fa-solid fa-grip"></i> */}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </header>
        </div>

        <a
          href="#"
          data-target="html"
          className="scroll-to-target scroll-to-top"
        >
          <i className="fa fa-angle-up"></i>
        </a>

        <div className="side-menu__block">
          <div className="side-menu__block-overlay custom-cursor__overlay">
            <div className="cursor"></div>
            <div className="cursor-follower"></div>
          </div>
          {/* <!-- /.side-menu__block-overlay -->  */}
          <div className="side-menu__block-inner ">
            <div className="side-menu__top justify-content-end">
              <a href="#" className="side-menu__toggler side-menu__close-btn">
                <img src="assets/images/shapes/close-1-1.png" alt="" />
              </a>
            </div>
            {/* <!-- /.side-menu__top -->  */}

            <nav className="mobile-nav__container">
              {/* <!-- content is loading via js --> */}
            </nav>

            <div className="side-menu__sep"></div>
            {/* <!-- /.side-menu__sep -->  */}

            <div className="side-menu__content">
              <p>
                <a href="mailto:needhelp@tripo.com">needhelp@agricol.com</a>{" "}
                <br /> <a href="tel:888-999-0000">888 999 0000</a>
              </p>
              <div className="side-menu__social">
                <a href="#">
                  <i className="fab fa-facebook-square"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-pinterest-p"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="search-popup">
          <div className="search-popup__overlay custom-cursor__overlay">
            <div className="cursor"></div>
            <div className="cursor-follower"></div>
          </div>
          {/* <!-- /.search-popup__overlay --> */}
          <div className="search-popup__inner">
            <form action="#" className="search-popup__form">
              <input
                type="text"
                name="search"
                placeholder="Type here to Search...."
              />
              <button type="submit">
                <i className="fa fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Header;
