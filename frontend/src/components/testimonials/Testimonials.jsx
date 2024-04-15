import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards, Autoplay } from "swiper";
import "./testimonials.css";
import { GlobalState } from '../../index';

const Testimonials = ({gallery}) => {
  const url = useContext(GlobalState).url;

  return (
    <section id="testimonials" className="section">
      <h5>Review</h5>
      <h2>My Gallery</h2>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[Autoplay, EffectCards]}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        className="container testimonials__container"
      >
        {gallery && gallery.map((value, key) => (
          <SwiperSlide key={key}>
            <img id="image" src={`${url}images/${value.img}`} alt={value.title} />
          </SwiperSlide>
      ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
