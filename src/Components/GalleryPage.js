import React, { Component } from "react";
import PageHeader from "./PageHeader";
import { Gallery_Data } from "../Utils/dummyData";
import "animate.css";
import MY_Gallery from "./Homepage Components/MyGallery";
import { GetGalleryData } from "../Utils/ApiCalls";
import "../Assets/GalleryPage.css";
export default class GalleryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      GalleryData: Gallery_Data,
      Gallery_Images: [],
      Social_Images: [],
      Zoho_Images: [],
      GalleryType: "",
      AllImages: [],
      isLoading: true,
    };
  }

  componentWillMount() {
    var Gallery_Promise = GetGalleryData();
    Gallery_Promise.then((data) => {
      if (data !== null) {
        this.setState({ GalleryData: data }, () => {
          // Gallery Images
          this.state.GalleryData.items[0].fields.galleryImages.forEach(
            (item) => {
              var GalleryImageObj = {};
              var ImageId = item.sys.id;

              this.state.GalleryData.includes.Asset.forEach((element) => {
                if (ImageId === element.sys.id) {
                  GalleryImageObj = {
                    src: "https:" + element.fields.file.url,
                    width: element.fields.file.details.image.width,
                    height: element.fields.file.details.image.height,
                  };
                }
              });
              this.state.Gallery_Images.push(GalleryImageObj);
            }
          );

          // Social Images
          this.state.GalleryData.items[0].fields.socialMediaSources.forEach(
            (item) => {
              var GalleryImageObj = {};
              var ImageId = item.sys.id;
              this.state.GalleryData.includes.Asset.forEach((element) => {
                if (ImageId === element.sys.id) {
                  GalleryImageObj = {
                    src: "https:" + element.fields.file.url,
                    width: element.fields.file.details.image.width,
                    height: element.fields.file.details.image.height,
                  };
                }
              });
              this.state.Social_Images.push(GalleryImageObj);
            }
          );

          // Zoho Images
          this.state.GalleryData.items[0].fields.zohoSources.forEach((item) => {
            var GalleryImageObj = {};
            var ImageId = item.sys.id;
            this.state.GalleryData.includes.Asset.forEach((element) => {
              if (ImageId === element.sys.id) {
                GalleryImageObj = {
                  src: "https:" + element.fields.file.url,
                  width: element.fields.file.details.image.width,
                  height: element.fields.file.details.image.height,
                };
              }
            });
            this.state.Zoho_Images.push(GalleryImageObj);
          });
          this.setState({ isLoading: false });
          this.setState({
            AllImages: [
              ...this.state.Gallery_Images,
              ...this.state.Social_Images,
              ...this.state.Zoho_Images,
            ],
          });
        });
      }
    });

    console.log(this.state.Gallery_Images);
    console.log(this.state.Social_Images);
    console.log(this.state.Zoho_Images);
  }
  handleFilter = (Type) => {
    this.setState({ GalleryType: Type });
    var Filterbtns = document.querySelectorAll(".Active-Filter");
    Filterbtns.forEach((element) => {
      element.classList.remove("Active-Filter");
    });

    var ActiveBtn = document.getElementById(Type);
    ActiveBtn.classList.add("Active-Filter");
  };

  render() {
    return (
      <>
        {!this.state.isLoading ? (
          <div className="page-wrapper">
            <PageHeader PageType="gallery_headerImage" />

            <section className="mt-4">
              <div className="container">
                <div className=" row d-flex justify-content-center Gallery_Filters">
                  {/* <div className="col-xl-4 col-lg-4 col-md-4 col-sm"> */}
                  <button
                    className="Filter-Btn Active-Filter"
                    id="All_Filter"
                    onClick={() => this.handleFilter("All_Filter")}
                  >
                    All Images
                  </button>
                  {/* </div> */}
                  {/* <div className="col-xl-4 col-lg-4 col-md-4 col-sm"> */}
                  <button
                    className="Filter-Btn"
                    id="Social_Filter"
                    onClick={() => this.handleFilter("Social_Filter")}
                  >
                    Social Images
                  </button>
                  {/* </div> */}

                  {/* <div className="col-xl-4 col-lg-4 col-md-4 col-sm"> */}
                  <button
                    className="Filter-Btn"
                    id="Zoho_Filter"
                    onClick={() => this.handleFilter("Zoho_Filter")}
                  >
                    Zoho Images
                  </button>
                  {/* </div> */}
                </div>

                <div className="Images p-5">
                  {this.state.GalleryType === "All_Filter" ||
                  this.state.GalleryType === "" ? (
                    <div className="All_Images">
                      {this.state.AllImages !== null ? (
                        <MY_Gallery Photos={this.state.AllImages} />
                      ) : (
                        <></>
                      )}
                    </div>
                  ) : this.state.GalleryType === "Social_Filter" ? (
                    <div className="Social_Images">
                      {this.state.Social_Images !== null ? (
                        <MY_Gallery Photos={this.state.Social_Images} />
                      ) : (
                        <></>
                      )}
                    </div>
                  ) : this.state.GalleryType === "Zoho_Filter" ? (
                    <div className="Zoho_Images">
                      {this.state.Zoho_Images !== null ? (
                        <MY_Gallery Photos={this.state.Zoho_Images} />
                      ) : (
                        <></>
                      )}
                    </div>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </section>
          </div>
        ) : (
          <></>
        )}
      </>
    );
  }
}
