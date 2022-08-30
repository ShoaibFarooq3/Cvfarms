import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BlogByCategoy, BlogBySearch, BlogByTag } from "../../Utils/ApiCalls";
import BlogSidebar from "./BlogSidebar";
import { PostHeader } from "../PostHeader";

export default class BlogCategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BlogsListFinal: [],
      CategoryName: "",
      TagName: "",
      isLoading: true,
      Query: "",
    };
  }

  componentWillMount() {
    var NewFinalArray = [];
    var queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    var pathNameOfLink = window.location.pathname;
    pathNameOfLink = pathNameOfLink.substring(
      pathNameOfLink.lastIndexOf("/") + 1,
      pathNameOfLink.length
    );
    console.log(pathNameOfLink);
    var TypeOfQuery = window.location.pathname;
    TypeOfQuery = TypeOfQuery.substring(
      TypeOfQuery.indexOf("/") + 1,
      TypeOfQuery.lastIndexOf("/")
    );
    console.log(TypeOfQuery);

    while (pathNameOfLink.includes("-")) {
      pathNameOfLink = pathNameOfLink.replace("-", " ");
    }
    if (TypeOfQuery === "Category") {
      this.setState({ CategoryName: pathNameOfLink });
      var response = BlogByCategoy(pathNameOfLink);
    } else if (TypeOfQuery === "Tags") {
      this.setState({ TagName: pathNameOfLink });
      var response = BlogByTag(pathNameOfLink);
    } else if (TypeOfQuery === "SearchResults") {
      while (pathNameOfLink.includes("-")) {
        pathNameOfLink = pathNameOfLink.replace("-", " ");
      }
      console.log(pathNameOfLink)
      this.setState({ Query: pathNameOfLink });
      var response = BlogBySearch(pathNameOfLink);
    } else {
    }

    response.then((data) => {
      var Data = data;
      Data.items.forEach((element) => {
        var BlogObject = {};
        var Blog_UniqueIDObject = {};
        var AddedDate = element.fields.addedData;
        var BlogDescription = element.fields.blogBasicDescription;
        var BlogCategories = element.fields.blogCategories;
        var BlogTitle = element.fields.blogTitle;
        var BlogUniqueId = element.fields.blogUniqueId;
        var BlogImageID = element.fields.blogImage.sys.id;
        var BlogImage = "";
        Data.includes.Asset.forEach((itemInner) => {
          if (itemInner.sys.id == BlogImageID) {
            BlogImage = "https:" + itemInner.fields.file.url;
          }
        });
        BlogObject["AddedDate"] = AddedDate;
        BlogObject["BlogDescription"] = BlogDescription;
        BlogObject["BlogTitle"] = BlogTitle;
        BlogObject["BlogUniqueId"] = BlogUniqueId;
        BlogObject["BlogImage"] = BlogImage;
        BlogObject["BlogCategory"] = BlogCategories;
        NewFinalArray.push(BlogObject);
        Blog_UniqueIDObject["BlogTitle"] = BlogTitle;
      });
      this.setState({ BlogsListFinal: NewFinalArray }, () => {
        this.setState({ isLoading: false });
      });
    });
  }

  render() {
    return (
      <>
        {this.state.CategoryName !== "" ? (
          <PostHeader Title={this.state.CategoryName} Category={true} />
        ) : this.state.TagName !== "" ? (
          <PostHeader Title={this.state.TagName} Tag={true} />
        ) : this.state.Query !== "" ? (
          <PostHeader Title={this.state.Query} Query={true} />
        ) : (
          <></>
        )}
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8">
              {this.state.BlogsListFinal.map((item, key) => {
                var sdd = item.BlogTitle;
                while (sdd.includes(" ")) {
                  sdd = sdd.replace(" ", "-");
                }
                return (
                  <div
                    className="col-xl-12 col-lg-12 col-md-12 MainPostBody p-0 mb-4"
                    key={key}
                  >
                    <div className="blog_date">
                      <i className="fa-regular fa-calendar"></i>{" "}
                      <span>{item.AddedDate}</span>
                    </div>
                    <img
                      className="Blog_Image"
                      src={item.BlogImage}
                      height={500}
                    />

                    <div className="BlogMainText mt-3 m-0">
                      <h5>{this.state.CategoryName}</h5>
                    </div>

                    <div className="Blog_Category_Title">
                      <Link
                        to={
                          "/news/" + sdd + "/"+item.BlogUniqueId
                        }
                      >
                        <h3>{item.BlogTitle}</h3>
                      </Link>
                    </div>
                    <div className="Blog_Category_Desc">
                      <p>{item.BlogDescription}</p>
                    </div>
                    <div className="Blog_Btn">
                      <Link
                        to={
                          "/news/" + sdd + "/"+item.BlogUniqueId 
                          //+ "?BlogId=" + item.BlogUniqueId
                        }
                      >
                        <button className="btn btn-default ReadMoreBtn pr-0 pl-0">
                          Read More
                        </button>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            <BlogSidebar />
          </div>
        </div>
      </>
    );
  }
}
