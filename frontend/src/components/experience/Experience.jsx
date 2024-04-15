import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper';
import { BsPatchCheckFill } from "react-icons/bs";
import { AiFillHtml5 } from "react-icons/ai";
import * as Di from "react-icons/di";
import "./experience.css";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Experience = ({experiences}) => {
  const data = Object.entries(experiences || {});
  const Tes = Di['DiCss3'];  
  return (
    <section id="experience" className="section">
      <h5 data-aos="fade">What Skills I Have</h5>
      <h2 data-aos="fade">My Experience</h2>
      <div data-aos="fade" className="container experience__container">
          <Swiper
            pagination={{
              type: 'progressbar',
            }}
            spaceBetween={30}
            navigation={false}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {data.map((element)=> (
              <SwiperSlide key={element[0]}>
              <div className="experience__frontend">
                <h3>{element[0]}</h3>
                <div className="experience__content">
                  {element[1].map((value, key)=>(
                    <article className="experience__details" key={`${element[0]}-${key}`}>
                      <BsPatchCheckFill className="experience__details-icon" />
                      <div>
                        <h4>{value.language}</h4>
                        <small>{value.level}</small>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              </SwiperSlide>
            ))}
          </Swiper>
      </div>
    </section>
  );
}


export default Experience;
