import React, { Component } from "react";
import { GetBlogThumbnails } from "../../Utils/ApiCalls";

import { GetItemCounts } from "../../Utils/GlobalFunctions";
export default class BlogSidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Categories_Array: [],
      Tags_Array: [],
      SearchQuery:""
    };
  }

  componentWillMount() {
    var MergedArray = [];
    var MergedArray2 = [];

    var response = GetBlogThumbnails();
    response.then((data) => {
      data.items.forEach((element) => {
        MergedArray = [...MergedArray, ...element.fields.blogCategories];
        MergedArray2 = [...MergedArray2, ...element.fields.blogTagsList];
      });
      var Catagories = GetItemCounts(MergedArray);
      var Tags = GetItemCounts(MergedArray2);
      this.setState({ Categories_Array: Catagories });
      this.setState({ Tags_Array: Tags });
    });
  }
  SetSearch=(e)=>{
    while (e.includes(" ")) {
      e = e.replace(" ", "-");
    }
    this.setState({SearchQuery:e})
  }

  render() {
    return (
      <div className="col-xl-4 col-lg-4 col-md-4 PostSideBar pl-5 mb-4">
        <div className="input-group">
          <div className="form-outline">
            <input
              type="search"
              id="BlogSearch"
              className="form-control"
              placeholder="Search"
              onChange={(e)=>{this.SetSearch(e.target.value)}}
              />
          </div>
           
          <a href={"/SearchResults/" + this.state.SearchQuery}>
          <button type="button" className="btn btn-primary" id="sidebar_search">
            <i className="fas fa-search"></i>
          </button></a>
        </div>

        <div className="SideBar_Data text-left">  
          <h3>About</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit etiam purus
            erat sit.
          </p>
          {/* {this.state.BlogCategories !==undefined ? ( */}
          <>
            <h3>Categories</h3>
            {this.state.Categories_Array.map((item, key) => {
              var sdd = item.Name;
              while (sdd.includes(" ")) {
                sdd = sdd.replace(" ", "-");
              }
              return (
                <a href={"/Category/" + sdd 
                //+ "?CatId=" + item.Name
              }>
                  <h4 className="SideBar_Data" key={key}>
                    {item.Name} &#40;{item.count}&#41;
                  </h4>
                </a>
              );
            })}
          </>
          {/* ) : (
            <></>
          )} */}
          {/* { this.state.BlogTags !== undefined  ? ( */}
          <>
            <h3>Tags</h3>
            <div className="row">
              {this.state.Tags_Array.map((item, key) => {
                var sd = item.Name;
                while (sd.includes(" ")) {
                  sd = sd.replace(" ", "-");
                }
                return (
                  <a className="col-lg-4 col-md-4 col-sm-4 col-4" href={"/Tags/" + sd 
                  //+ "?TagId=" + item.Name
                  }>
                    <h5 key={key}>
                      {item.Name}
                    </h5>
                  </a>
                );
              })}
            </div>
          </>
          {/* ) : (
            <></>
          )} */}
          <h3>Socials</h3>
          <i className="fab fa-facebook-square Footericon "></i>
          <i className="fab fa-twitter Footericon"></i>
          <i className="fab fa-instagram Footericon"></i>
        </div>
      </div>
    );
  }
}
