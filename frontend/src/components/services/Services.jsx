import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = ({services}) => {
  return (
    <section id="services" className="section">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
      {services && Object.entries(services).map((element, index)=> (
        <article className="service" data-aos="fade" key={index}>
          <div className="service__head">
            <h3>{element[0]}</h3>
          </div>
          <ul className="service__list">
            {element[1] && element[1].map((value, key)=> (
              <li key={key}>
                <BiCheck className="service__list-icon" />
                <p>{value.desc}</p>
              </li>
            ))}
          </ul>
        </article>
      ))}
      </div>
    </section>
  );
};

export default Services;
