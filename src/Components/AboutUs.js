import React, { Component } from "react";
import Vision from "../images/Vision.jpg";
import { GetAboutData, GetTeamData } from "../Utils/ApiCalls";
import "animate.css";

import "../Assets/Loading.css";
import TeamMembers from "./TeamMembers";
import ContactSectionNew from "./contactSectionNew";
import PageHeader from "./PageHeader";
import BlogsList from "./BlogsList";
export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PageData: {},
      backgroundImage: "",
      isLoading: true,
      TeamArray: [],
      teamLoading:true,
      TeamData:{}
    };
  }
  componentWillMount() {
    var About = GetAboutData();
    About.then((data) => {
      if (data !== null) {
        this.setState({ PageData: data }, () => {
          this.setState({
            backgroundImage:
              "https:" + this.state.PageData.includes.Asset[0].fields.file.url,
          });
          this.setState({ isLoading: false });
        });
      }
    });
   
  
  }
  componentDidMount(){
    window.scrollTo(0, 0)
  }
  render() {
    const myStyle = {
      background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${this.state.backgroundImage})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      height: "300px",
    };

    return (
      <>
        {!this.state.isLoading ? (
          <div className="page-wrapper">
            {/* <section className="page-header" id="pageHeader" style={myStyle}>
              <div className="container">
                <h2>About</h2>
              </div>
            </section> */}

            <PageHeader PageType="about_headerImage"/>

            <section className="about_two">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="block-title text-left">
                      <p>Our Mission</p>
                      <h3>We’re Providing The Best Solution</h3>
                      <div className="leaf">
                        <img src="assets/images/resources/leaf.png" alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="about_two_text text-left">
                  {this.state.PageData!==null?  <div
                      dangerouslySetInnerHTML={{
                        __html: this.state.PageData.items[0].fields.mission,
                      }}
                    ></div>:<></>}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section className="product-one">
              <div className="container">
                <div className="row">
                  <div className="col-xl-6 col-lg-6">
                    <div className="product_img">
                      <img src={Vision} alt="Product One Img" />
                      <div className="experience_box">
                        <h2>40 Year</h2>
                        <p>Of Experience</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                    <div className="growing_product">
                      <div className="block-title text-left">
                        <p>Our Vision</p>
                        <h3>Growing products</h3>
                        <div className="leaf">
                          <img src="assets/images/resources/leaf.png" alt="" />
                        </div>
                      </div>
                      <div className="growing_product_text text-left">
                       {this.state.PageData!==null? <div
                          dangerouslySetInnerHTML={{
                            __html: this.state.PageData.items[0].fields.vision,
                          }}
                        ></div>:<></>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Team Section */}
            <BlogsList/>
         <TeamMembers/>

            {/* Contact Section */}
           <ContactSectionNew/>
          </div>
        ) : (
          <div className="LoadingScreen">
            <img src="assets/images/loader.png" className="blinking" alt="" />
          </div>
        )}

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
          {/* <!-- /.side-menu__block-overlay --> */}
          <div className="side-menu__block-inner">
            <div className="side-menu__top justify-content-end">
              <a href="#" className="side-menu__toggler side-menu__close-btn">
                <img src="assets/images/shapes/close-1-1.png" alt="" />
              </a>
            </div>
            {/* <!-- /.side-menu__top --> */}

            <nav className="mobile-nav__container">
              {/* <!-- content is loading via js --> */}
            </nav>
            <div className="side-menu__sep"></div>
            {/* <!-- /.side-menu__sep --> */}
            <div className="side-menu__content">
              <p>
                <a href="mailto:needhelp@tripo.com">needhelp@tripo.com</a>{" "}
                <br />
                <a href="tel:888-999-0000">888 999 0000</a>
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
            {/* <!-- /.side-menu__content --> */}
          </div>
          {/* <!-- /.side-menu__block-inner --> */}
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
          {/* <!-- /.search-popup__inner --> */}
        </div>
      </>
    );
  }
}
