import React, { Component, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "../../Assets/Slider.css";

// import required modules
import {EffectFade, Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css/bundle";
import { GetBannerImages } from "../../Utils/ApiCalls";


export default class Slider extends Component {

constructor(props){
    super(props)
    this.state={
        isLoading:true,
        BannerData:{}
    }
}

    componentWillMount(){

var bannerResponse=GetBannerImages(this.props.PageType)
bannerResponse.then((data)=>{
if(data!==null)
{this.setState({BannerData:data},()=>{
    this.setState({isLoading:false})
})}

})
        
    }
  render() {
    return (
        <>
       {!this.state.isLoading?
        <Swiper
          spaceBetween={30}
          centeredSlides={false}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          effect={"fade"}
          pagination={{
            clickable: false,
            type: "fraction",
              dynamicBullets: true,
            
          }}
          navigation={true}
          modules={[EffectFade,Autoplay, Pagination]}
          className="mySwiper"
        >
         {
         this.state.BannerData.includes.Asset.map((item,key)=>{
return(
<SwiperSlide key={key}
           style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(https:${item.fields.file.url})`,
          }}
           >
            <>
            <div  className="mainddiv text-left" >
                <div className="Banner_Title"><h1>{item.fields.title}</h1></div>
                <div className="Banner_Description">{item.fields.description}</div>
                <button className="btn btn-default thm-btn mt-4" id="Banner_Button">FIND OUT MORE</button>    
            </div>
            <div className="NewsLetter_Box">
              <h4>Subscribe to NewsLetter</h4>
<p>Tristique senectus et netus et malesuada <br/>Tristique senectus et netus et malesuada
</p>
<div className="row m-0">
  <input type="email" className="emailInput col-lg-10 col-md-10 col-sm-10 col-10" placeholder="Your email..."/>
<i className="customIcon fa fa-envelope col-lg-2 col-md-2 col-sm-2 col-2"></i>
</div>
             </div>
          </>
            </SwiperSlide>
)

         })
         
          
          }
          
        
        </Swiper>
        :
        <></>
        }
      </>
       )
  }
}

 

 


