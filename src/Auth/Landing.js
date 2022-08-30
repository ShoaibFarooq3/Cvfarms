import React, { Component } from "react";

import "../Assets/Slider.css";

import "../Assets/Loading.css";





import { NewFooter } from "../Components/NewFooter";
import Header from "../Components/Header";
import BlogsList from "../Components/BlogsList";
import Proforma from "../Components/Proforma";
import PageHeader from "../Components/PageHeader";
import ProjectOverview from "../Components/ProjectOverview";
import TeamMembers from "../Components/TeamMembers";
import { MovableDiv } from "../Components/MoveableComponent";
import { GetHomeData } from "../Utils/ApiCalls";

export default class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PageData: {},
      HeaderImage: [],
      GalleryImages: [],
      isLoading: true,
      HEaderIMG: [],
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
              this.setState({ HEaderIMG: this.state.HeaderImage });
            }
          });
        }
      })
      .catch(() => {});
  }
  componentDidMount(){
    window.scrollTo(0, 0)
}
  render() {
    return (
      <><Header Type="Global"/>
        <section>
         <PageHeader PageType="home_headerImage"/>
        </section>

        <section>
          <MovableDiv />
        </section>

        <section>
          <ProjectOverview />
        </section>
        <section>
          <BlogsList/>
        </section>
        <section>
          <Proforma />
        </section>
        <section>
          <TeamMembers />
        </section>
        <NewFooter/>
      </>
    );
  }
}
