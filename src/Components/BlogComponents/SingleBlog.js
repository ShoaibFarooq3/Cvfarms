import React, { Component } from "react";
import { GetBlogContent } from "../../Utils/ApiCalls";
import { PostHeader } from "../PostHeader";
import "../../Assets/SingleBlog.css";
import { RenderableDiv } from "../RenderableDiv";
import MY_Gallery from "../Homepage Components/MyGallery";
import BlogSidebar from "./BlogSidebar";
import Comments from "./Comments";
export default class BlogPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BlogId: "",
      BlogObj: {},
      isLoading: true,
      BlogText: {},
      BlogCategories: [],
      BlogTags: [],
      blogImages: [],
      BlogBackendId:"null",
    }
  }
  componentWillMount() {
    // var queryString = window.location.search;
    // const urlParams = new URLSearchParams(queryString);

    var pathNameOfLink=window.location.pathname;
    pathNameOfLink=pathNameOfLink.substring(pathNameOfLink.lastIndexOf("/")+1,pathNameOfLink.length)
    console.log(pathNameOfLink)

    var Blog_Data = GetBlogContent(pathNameOfLink);
    Blog_Data.then(
      (data) => {
        if (data !== null) {
          var Data = data;
          var BlogMainId= Data.items[0].sys.id
          var BlogObject = {};
          var AddedDate = Data.items[0].fields.addedData;
          var BlogDescription = Data.items[0].fields.blogBasicDescription;
          var BlogTitle = Data.items[0].fields.blogTitle;
          var BlogUniqueId = Data.items[0].fields.blogUniqueId;
          var BlogImageID = Data.items[0].fields.blogImage.sys.id;
          var BlogTextMain = Data.items[0].fields.blogTextMain;
          var BlogCategories = Data.items[0].fields.blogCategories;
          var BlogTags = Data.items[0].fields.blogTagsList;
          var BlogImage = "";
          var BlogImageObj = {};
          Data.includes.Asset.forEach((itemInner) => {
            if (itemInner.sys.id == BlogImageID) {
              BlogImage = "https:" + itemInner.fields.file.url;
            }
          });
          Data.includes.Asset.forEach((element) => {
            BlogImageObj = {
              src: "https:" + element.fields.file.url,
              width: element.fields.file.details.image.width,
              height: element.fields.file.details.image.height,
            };
            this.state.blogImages.push(BlogImageObj);
          });

          BlogObject["AddedDate"] = AddedDate;
          BlogObject["BlogDescription"] = BlogDescription;
          BlogObject["BlogTitle"] = BlogTitle;
          BlogObject["BlogUniqueId"] = BlogUniqueId;
          BlogObject["BlogImage"] = BlogImage;

          this.setState({
            BlogText: BlogTextMain,
            BlogCategories: BlogCategories,
            BlogTags: BlogTags,
            // BlogBackendId:BlogMainId
          });
          this.setState({ BlogObj: BlogObject });
          this.setState({ isLoading: false });
          setTimeout(() => {
            this.setState({ BlogBackendId:BlogMainId})
          }, 2000);
        }
      },
      () => {}
    );
  }
  componentDidMount(){
    window.scrollTo(0, 0)
}
  render() {
    return (
      <>
        {!this.state.isLoading ? (
          <div className="page-wrapper">
            <PostHeader Title={this.state.BlogObj.BlogTitle} />
            <div className="container Blog_Content">
              <div className="row">
                <div className="col-xl-8 col-lg-8 col-md-8 MainPostBody MainBlog p-0 mb-4">
                  <div className="blog_date">
                    <i className="fa-regular fa-calendar"></i>{" "}
                    <span>{this.state.BlogObj.AddedDate}</span>
                  </div>
                  <img src={this.state.BlogObj.BlogImage} />
                  <div className="BlogMainText mt-4 p-3">

                    {this.state.BlogCategories !== undefined?
                      <h5>{this.state.BlogCategories[0]}</h5>
                    :
                    <></>
                    }
                    {this.state.BlogText !== null ||
                    this.state.BlogText !== undefined ||
                    this.state.BlogText !== [] ? (
                      <RenderableDiv text={this.state.BlogText} />
                    ) : (
                      <></>
                    )}

                    {this.state.blogImages.length > 1 ? (
                      <MY_Gallery Photos={this.state.blogImages} />
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className="mt-4 p-3">
                  <Comments ID={this.state.BlogBackendId}/>  
                  </div>
                      

                </div>
                {/* MainContent End */}
                {/* SideBar */}
                <BlogSidebar/>
                
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
