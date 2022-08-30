import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination , Autoplay } from "swiper"; 
export const Videos_Slider = () => {
  return (
    <Swiper
    slidesPerView={2}
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
className="mySwiper3"
>
<SwiperSlide><img src="https://cvfarmsstg.wpengine.com/wp-content/uploads/2022/06/henry-co-rfK7qmyPOEg-unsplash-1536x1024.jpg" width={"50%"}></img></SwiperSlide>
<SwiperSlide><img src="https://cvfarmsstg.wpengine.com/wp-content/uploads/2021/04/b-h3-img-02.jpg" width={"50%"}></img></SwiperSlide>
<SwiperSlide><img src="https://cvfarmsstg.wpengine.com/wp-content/uploads/2021/04/b-h3-img-03.jpg" width={"50%"}></img></SwiperSlide>
<SwiperSlide><img src="https://cvfarmsstg.wpengine.com/wp-content/uploads/2021/04/b-h3-img-04.jpg" width={"50%"}></img></SwiperSlide>

</Swiper>
  )
}
