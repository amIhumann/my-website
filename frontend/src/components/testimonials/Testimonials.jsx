import React from "react";
import AVTR1 from '../../assets/hanipan1.jpg'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards ,Autoplay} from "swiper";
import './testimonials.css'

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review</h5>
      <h2>My Gallery</h2>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[Autoplay,EffectCards]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="container testimonials__container"
      >
        <SwiperSlide><img id="image" src={AVTR1} alt="Avatar One" /></SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials