import React, { Component } from "react";
import "../Assets/Proforma.css";

import VideoBg from "../images/videobg.jpg";
import proformabg from "../images/proformabg.png"
import "../../node_modules/video-react/dist/video-react.css";
// import { Proforma_Data } from "../Utils/dummyData";
import { Player } from "video-react";
import { RenderableDiv } from "./RenderableDiv";
import { GetProformaData } from "../Utils/ApiCalls";
import { Link } from "react-router-dom";

export default class Proforma extends Component {
  constructor(props) {
    super();
    this.state = {
      isOpen: false,
      videoURL: "",
      ImageUrl: "",
      Performa_Text: undefined,
      isLoading: false,
      VimeoVideo:true,
    };
  }
  componentDidMount() {
    var Proforma_Response = GetProformaData();
    Proforma_Response.then((Proforma_Data) => {
      if (Proforma_Data !== null) {
        var VideoId = Proforma_Data.items[0].fields.headerVideoPerforma.sys.id;
        var ImageId = Proforma_Data.items[0].fields.performaImage.sys.id;
        var PerformaText = Proforma_Data.items[0].fields.performaDescription;
        this.setState({ Performa_Text: PerformaText });
        Proforma_Data.includes.Asset.forEach((element) => {
          if (VideoId == element.sys.id) {
            console.log(element.fields.file.url);
            if (element.fields.file.url.includes("ctfassets")) {
              this.setState({VimeoVideo:false});
              this.setState(
                { videoURL: "https:" + element.fields.file.url },
                () => {
                   this.setState({ isLoading: false });
                }
              );
              
            }
            else{
              var URL= element.fields.file.url
              URL= URL.substring(URL.indexOf('m/') + 1);
              console.log(URL)
              this.setState(
                { videoURL: URL},
                () => {
                   this.setState({ isLoading: false });
                }
              );
              
            }
           
          }
          if (ImageId == element.sys.id) {
            this.setState({ ImageUrl: "https:" + element.fields.file.url });
          }
        });
      }
    });

    console.log(this.state.videoURL);
  }
  VideoPopUp = () => {
    this.setState({ isOpen: true });
  };
  render() {
    const MyStyle={
      backgroundImage: `url(${proformabg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }
    return (
      <>
        {!this.state.isLoading ? (
          <div>
            {this.state.isOpen ? (
              <div className="Video-Popup p-4">
                <i
                  className="fa-solid fa-xmark Icon"
                  onClick={() => this.setState({ isOpen: false })}
                ></i>
                {console.log(this.state.videoURL)}
                <div className="Video-Player">
                  {!this.state.VimeoVideo?
                   <Player
                //   playsInline
                height={600}
                width={1024}
                autoPlay={true}
                fluid={false}
                src={this.state.videoURL}
              />
              :
             
                  <iframe
                    src={"https://player.vimeo.com/video"+this.state.videoURL}
                    width="940"
                    height="626"
                    frameborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowfullscreen
                  ></iframe>}
                </div>
              </div>
            ) : (
              <></>
            )}
            <div className="Video_Section d-flex flex-column justify-content-center mt-5">
              <div className="popup-gallery-wrapper">
                {/* <!--begin popup-video--> */}
                <div className="popup-gallery hero-gallery">
                  <a
                    className="popup4 video-icon"
                    onClick={() => this.VideoPopUp()}
                  >
                    <i className="fas fa-play"></i>
                  </a>
                </div>
                {/* <!--end popup-video--> */}
              </div>
              <img src={VideoBg}></img>
            </div>

            <div className="row pt-4 pb-4" style={MyStyle}>
              <div className="col-xl-6 col-lg-6 col-md-6 pt-5">
                <img className="SideImage" src={this.state.ImageUrl}></img>
              </div>
              <div className="col-xl-6 xol-lg-6 col-md-6 p-5">
                <div className="block-title text-left m-0">
                  <p>RETURN ON CAPEX IN 1 YEAR</p>
                </div>
                <div className="PerformaText text-left">
                  { this.state.Performa_Text!==null?<RenderableDiv text={this.state.Performa_Text} />:<></>}
                </div>
                <Link to ="/proforma">
                <button className="thm-btn Performa-Btn">
                  Review our Proforma
                </button></Link>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
}
