import React, { useEffect, useRef, useState } from 'react'
import image1 from '../../images/main-slider/slide_v1_1.jpg'
import { photos } from './photos'
export const BannerImages = (props) => {
    const [myImage,setMyImage]=useState(props.Photos)
  useEffect(()=>{
    setMyImage(props.Photos)
  },[props])
  
    return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>

    <div className="carousel-inner" >
   {myImage.map((x,key)=>{
return(

    <div className="carousel-item active" key={key}>


  <img className="d-block w-100"  src={x.src}/>
  
  </div> 


)

   }

   )}
</div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
  )
}
