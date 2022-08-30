import React, { Component } from "react";
import { BlogsList_Data } from "../Utils/dummyData";
import "../Assets/Blog_Section.css";
import { GetBlogThumbnails } from "../Utils/ApiCalls";
import { Swiper, SwiperSlide } from "swiper/react";
import blogbg from '../images/blogbg.png'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../Assets/Slider.css";

// import required modules
import { Pagination , Autoplay } from "swiper";
import { Link } from "react-router-dom";

class BlogsList extends Component {
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
  if(data!==null){    var Data = data;
      Data.items.forEach((element) => {
        var BlogObject = {};
        var Blog_UniqueIDObject={}
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
      });}
      // localStorage.setItem("Blogs_UniqueID",JSON.stringify(UniqueIDSArray))
    });
  }
 

  render() {
    const MyStyle={
      backgroundImage: `url(${blogbg})`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }
    return (
      <section className="team_one about_team_one" style={MyStyle}>
        {!this.state.isLoading ? (
          <div className="container">
            <div className="row Title_Div mb-3">
              <div className="col-lg-10 col-xl-10 col-md-10 col-sm-12 block-title text-left ">
                <p>Stay in the know</p>
                <h3>Latest news for investors</h3>
              </div>
              <div className="col-lg-2 col-xl-2 col-md-2 col-sm-12 Investor">
                <Link to={"news"}>
                <button className="btn btn-default ProjectBtn pl-0 pr-0 mt-5">
                  View All
                </button>
                </Link>
              </div>
            </div>
           {this.state.BlogsListFinal!==null? <div className="row blogRow animate__animated animate__fadeInDown">
              <Swiper
                slidesPerView={4}
                centeredSlides={false}
                spaceBetween={30}
                navigation={false}
                grabCursor={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination,Autoplay]}
                className="mySwiper2"
              >
                {this.state.BlogsListFinal.map((item, key) => {
                  var sdd=item.BlogTitle
                  while(sdd.includes(" ")){
                    sdd=sdd.replace(" ","-")}
                  return (
                    
                    <SwiperSlide key={key} className={"m-0"}>
                      <div className="Blog_card card" >
                        <div className="">
                          <div className="blog_date">
                            <i className="fa-regular fa-calendar"></i>{" "}
                            <span>{item.AddedDate}</span>
                          </div>
                          <div className="Blog_Image">
                            <img
                              src={item.BlogImage}
                              width={400}
                              height={300}
                            />
                          </div>
                          <div className="">
                            <div className="Blog_Title">
                            <Link to = {"news/"+sdd+"/"+item.BlogUniqueId} > <h3>{item.BlogTitle}</h3></Link>
                            </div>
                            <div className="Blog_Desc">
                              <p>{item.BlogDescription}</p>
                            </div>
                            <div className="Blog_Btn">
                            <Link to={"news/"+sdd+"/"+item.BlogUniqueId}
                            //</div>+"?BlogId=" + item.BlogUniqueId}
                            >
                            
                              <button className="btn btn-default ProjectBtn pr-0 pl-0">
                                FIND OUT MORE
                              </button>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          :
          <></>  
          }
          </div>
        ) : (
          <></>
        )}
      </section>
    );
  }
}

export default BlogsList;
