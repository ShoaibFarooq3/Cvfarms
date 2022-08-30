import React, { Component } from "react";

// import "../Assets/Slider.css";

import '../Assets/Loading.css'
import { BannerImages } from "./Homepage Components/BannerImages";
import MY_Gallery from "./Homepage Components/MyGallery";

import { GetHomeData } from "../Utils/ApiCalls";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PageData: {},
      HeaderImage: [],
      GalleryImages: [],
      isLoading: true,
      HEaderIMG:[]
    };
  }
  componentWillMount() {
    var promise_Home = GetHomeData();
    promise_Home
      .then((data) => {
        if (data !== null) {
          this.setState({ PageData: data });
          this.setState({ isLoading: false }, () => {
            if (!this.state.isLoading) {
              this.state.PageData.includes.Asset.forEach((item) => {
                var isHeader = false;
                var HeaderImageObj = {};
                var GalleryImageObj = {};
                item.metadata.tags.forEach((item2) => {
                  if (item2.sys.id == "homeHeader") {
                    isHeader = true;
                  }
                });
                if (isHeader) {
                  HeaderImageObj = {
                    src: "https:" + item.fields.file.url,
                    width: item.fields.file.details.image.width,
                    height: item.fields.file.details.image.height,
                  };

                  this.state.HeaderImage.push(HeaderImageObj);
                } else {
                  GalleryImageObj = {
                    src: "https:" + item.fields.file.url,
                    width: item.fields.file.details.image.width,
                    height: item.fields.file.details.image.height,
                  };
                  this.state.GalleryImages.push(GalleryImageObj);
                }
              });
              console.log(this.state.GalleryImages);
              console.log(this.state.HeaderImage);
this.setState({HEaderIMG:this.state.HeaderImage})
            }
          });
        }
      })
      .catch(() => {});
  }

  // componentWillUnmount() {
  //   window.removeEventListener("HomeChangeListener", () => {});
  // }

  render() {
    return (
      <>
        {/* <BannerCarousel/>   */}

        {!this.state.isLoading ? (
          <div className="page-wrapper">
            <BannerImages Photos={this.state.HeaderImage} />
            <MY_Gallery Photos={this.state.GalleryImages} />
          </div>
        ) : (
          <div className="LoadingScreen">
          <img src="assets/images/loader.png" className="blink-image align-middle" alt="" />
        </div> 
        )}
      </>
    );
  }
}
