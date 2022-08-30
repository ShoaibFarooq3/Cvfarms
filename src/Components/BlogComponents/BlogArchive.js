import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GetBlogThumbnails } from "../../Utils/ApiCalls";
import PageHeader from "../PageHeader";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      BlogsListFinal: [],
      isLoading: true,
    };
  }
  componentWillMount() {
    var NewFinalArray = [];
    var UniqueIDSArray = [];

    var BlogData = GetBlogThumbnails();
    BlogData.then((data) => {
      var Data = data;
      Data.items.forEach((element) => {
        var BlogObject = {};
        var Blog_UniqueIDObject = {};
        var AddedDate = element.fields.addedData;
        var BlogDescription = element.fields.blogBasicDescription;
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
        NewFinalArray.push(BlogObject);
        Blog_UniqueIDObject["BlogUniqueId"] = BlogUniqueId;
        Blog_UniqueIDObject["BlogTitle"] = BlogTitle;

        UniqueIDSArray.push(Blog_UniqueIDObject);
      });
      this.setState({ BlogsListFinal: NewFinalArray }, () => {
        this.setState({ isLoading: false });
      });
      localStorage.setItem("Blogs_UniqueID", JSON.stringify(UniqueIDSArray));
    });
  }
componentDidMount(){
    window.scrollTo(0, 0)
}
  render() {
    return (
      <div>
        <PageHeader PageType="blog_headerImage" />
    
        <div className="mt-4 container">
          <div className="row">
            {this.state.BlogsListFinal.map((item, key) => {
              var sdd=item.BlogTitle
              while(sdd.includes(" ")){
                sdd=sdd.replace(" ","-")
              }
              return (
               <>
                <div
                  className="Blog_card mt-4 mb-4 card col-xl-4 col-lg-4 col-md-6 col-sm-6"
                  key={key}
                >
                  <div className="">
                    <div className="blog_dateT">
                      <i className="fa-regular fa-calendar"></i>{" "}
                      <span>{item.AddedDate}</span>
                    </div>
                    <div className="Blog_Image">
                      <img src={item.BlogImage} width={400} height={400} />
                    </div>
                    <div className="">
                      <div className="Blog_Title mb-3">
                      <Link to={"news/"+sdd+"/"+item.BlogUniqueId}>
                        <h3>{item.BlogTitle}</h3></Link>
                      </div>
                      <div className="Blog_Desc m-0">
                        <p>{item.BlogDescription}</p>
                      </div>
                      <div className="Blog_Btn">
                        <Link to={"news/"+sdd+"/"+item.BlogUniqueId
                        //+"?BlogId=" + item.BlogUniqueId
                        }>
                          <button className="btn btn-default ReadMoreBtn pr-0 pl-0">
                            Read More
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
               
               </>
               
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
