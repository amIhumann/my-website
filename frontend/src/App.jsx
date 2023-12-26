import React, { useEffect } from "react";
import "./index.css";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portofolio from "./components/portofolio/Portofolio";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import AOS from "aos";
import Swal from "sweetalert2";

function App() {
  document.addEventListener("scroll", () => {
    const section = document.querySelectorAll(".section");
    const arr = [];
    for (let i = 0; i < section.length; i++) {
      if ((section[i].offsetHeight / 2) <= section[i].getBoundingClientRect().bottom && ((section[i].offsetHeight / 2) >= section[i].getBoundingClientRect().top)) {
        arr[arr.length] = section[i];
        let active = document.querySelectorAll(".nav-menu a.active");
        let actived = document.querySelector(`.nav-menu a[href="#${(arr[1] || arr[0]).getAttribute("id")}"]`)
        if(active.length > 0 && actived){
          active[0].classList.remove("active");
          actived.classList.add("active");
        }
      }
    }
  });
  const poopityScoop = () => {
    window.ononline = (event) => {
      Swal.fire("Internet", "You are Connected", "success");
    };
    window.onoffline = (event) => {
      Swal.fire("internet", "Connection error!", "error");
    };
  };
  useEffect(() => {
    AOS.init({
      duration: "1500",
    });
    AOS.refresh();
    poopityScoop();
  }, []);
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portofolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
