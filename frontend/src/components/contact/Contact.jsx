import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const Contact = ({sosmed}) => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    await emailjs
      .sendForm(
        "service_tg9z2gg",
        "template_suh2xpr",
        form.current,
        "pULHzgot_bfJ22URI"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            form.current.reset();
            Swal.fire("Message", "Message has been sent", "success");
          } else {
            Swal.fire("error", "Something Wrong,Try again", "error");
          }
        },
        (error) => {
          Swal.fire("error", "Message failed to sent", "error");
        }
      );
  };
  return (
    <section id="contact" className="section">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>{sosmed?.email && sosmed?.email.split(':')[1]}</h5>
            <a
              href={sosmed?.email}
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Mesengger</h4>
            <h5>Hanifan Hidayatulahh</h5>
            <a
              href={sosmed?.messenger}
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>{sosmed?.phone && sosmed?.phone?.split('/')[3]?.replace(/(\d{4})(\d{4})(\d{4})/, '$1-$2-$3')}</h5>
            <a
              href={sosmed?.phone}
              target="_blank"
              rel="noopener noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="text" name="telepon" placeholder="Your Phone Number" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            id=""
            rows="7"
            placeholder="Some text...."
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
