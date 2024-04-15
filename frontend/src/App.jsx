import React, { useState, useLayoutEffect, useContext } from "react";
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
import { GlobalState } from "./index";

function App() {
  const [data, setData] = useState({});
  const axios = useContext(GlobalState).axiosRequest;

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

  const getData = async (table) => {
    try {
      await axios
      .get(`display`)
      .then((response) => {
        setData(response?.data)
      });
    } catch (error) {
      Swal.fire("Error", error.message, "error");
    }
  };

  useLayoutEffect(() => {
    getData();
    AOS.init({
      duration: "1500",
    });
    AOS.refresh();
    poopityScoop();
  }, []);

  return (
    <>
      <Header cv={data?.cv} sosmed={data?.about}/>
      <Nav />
      <About about={data?.about} project={data?.portfolio}/>
      <Experience experiences={data?.experiences}/>
      <Services services={data?.services}/>
      <Portofolio portfolio={data?.portfolio}/>
      <Testimonials gallery={data?.gallery}/>
      <Contact sosmed={data?.about} />
      <Footer sosmed={data?.about} />
    </>
  );
}

export default App;
