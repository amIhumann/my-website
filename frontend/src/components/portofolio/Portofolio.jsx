import React, { useState } from "react";
import "./portofolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";
import { BsFillCaretDownFill } from "react-icons/bs";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const Portofolio = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section id="portfolio" className="section">
      <h5 data-aos="fade">My Recent Work</h5>
      <h2 data-aos="fade">Portfolio</h2>
      <div
        className="container"
      >
        <Box>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              aria-label="basic tabs example"
              TabIndicatorProps={{
                style: {
                  backgroundColor: "var(--color-primary)"
                }
              }}
              id="iniTabs"
            >
              <Tab
                label="Item One"
                {...a11yProps(0)}
                sx={{ minWidth: "fit-content", flex: 1, color : 'var(--color-white)'}}
              />
              <Tab
                label="Item Two"
                {...a11yProps(1)}
                sx={{ minWidth: "fit-content", flex: 1, color : 'var(--color-white)' }}
              />
              <Tab
                label="Item Three"
                {...a11yProps(2)}
                sx={{ minWidth: "fit-content", flex: 1, color : 'var(--color-white)' }}
              />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
          <div className="portfolio__container">
            <article data-aos="zoom-in" className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG2} alt="image2" />
            </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a
                href="https:github.com"
                className="resize-content btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https:.com"
                className="resize-content btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
          <article data-aos="zoom-in" className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={IMG3} alt="image3" />
            </div>
            <h3>This is a portfolio item title</h3>
            <div className="portfolio__item-cta">
              <a
                href="https:github.com"
                className="resize-content btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href="https:.com"
                className="resize-content btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
          </div>
          <div className="more">
            <button className="btn btn-primary">
              Show More{" "}
              <BsFillCaretDownFill style={{ verticalAlign: "text-top" }} />
            </button>
          </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Box>
      </div>
    </section>
    // <section id="portfolio" className="section">
    //   <h5 data-aos="fade">My Recent Work</h5>
    //   <h2 data-aos="fade">Portfolio</h2>
    //   <div className="container portfolio__container">
    //     <article data-aos="zoom-in" className="portfolio__item">
    //       <div className="portfolio__item-image">
    //         <img src={IMG1} alt="image1" />
    //       </div>
    //       <h3>This is a portfolio item title</h3>
    //       <div className="portfolio__item-cta">
    //         <a
    //           href="https://github.com"
    //           className="btn"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Github
    //         </a>
    //         <a
    //           href="https://.com"
    //           className="btn btn-primary"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Live Demo
    //         </a>
    //       </div>
    //     </article>
    //     <article data-aos="zoom-in" className="portfolio__item">
    //       <div className="portfolio__item-image">
    //         <img src={IMG2} alt="image2" />
    //       </div>
    //       <h3>This is a portfolio item title</h3>
    //       <div className="portfolio__item-cta">
    //         <a
    //           href="https://github.com"
    //           className="btn"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Github
    //         </a>
    //         <a
    //           href="https://.com"
    //           className="btn btn-primary"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Live Demo
    //         </a>
    //       </div>
    //     </article>
    //     <article data-aos="zoom-in" className="portfolio__item">
    //       <div className="portfolio__item-image">
    //         <img src={IMG3} alt="image3" />
    //       </div>
    //       <h3>This is a portfolio item title</h3>
    //       <div className="portfolio__item-cta">
    //         <a
    //           href="https://github.com"
    //           className="btn"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Github
    //         </a>
    //         <a
    //           href="https://.com"
    //           className="btn btn-primary"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Live Demo
    //         </a>
    //       </div>
    //     </article>
    //     <article data-aos="zoom-in" className="portfolio__item">
    //       <div className="portfolio__item-image">
    //         <img src={IMG4} alt="image4" />
    //       </div>
    //       <h3>This is a portfolio item title</h3>
    //       <div className="portfolio__item-cta">
    //         <a
    //           href="https://github.com"
    //           className="btn"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Github
    //         </a>
    //         <a
    //           href="https://.com"
    //           className="btn btn-primary"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Live Demo
    //         </a>
    //       </div>
    //     </article>
    //     <article data-aos="zoom-in" className="portfolio__item">
    //       <div className="portfolio__item-image">
    //         <img src={IMG5} alt="image5" />
    //       </div>
    //       <h3>This is a portfolio item title</h3>
    //       <div className="portfolio__item-cta">
    //         <a
    //           href="https://github.com"
    //           className="btn"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Github
    //         </a>
    //         <a
    //           href="https://.com"
    //           className="btn btn-primary"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Live Demo
    //         </a>
    //       </div>
    //     </article>
    //     <article data-aos="zoom-in" className="portfolio__item">
    //       <div className="portfolio__item-image">
    //         <img src={IMG6} alt="image6" />
    //       </div>
    //       <h3>This is a portfolio item title</h3>
    //       <div className="portfolio__item-cta">
    //         <a
    //           href="https://github.com"
    //           className="btn"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Github
    //         </a>
    //         <a
    //           href="https://.com"
    //           className="btn btn-primary"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           Live Demo
    //         </a>
    //       </div>
    //     </article>
    //   </div>
    //   <div className="more">
    //     <button className="btn btn-primary">
    //       Show More{" "}
    //       <BsFillCaretDownFill style={{ verticalAlign: "text-top" }} />
    //     </button>
    //   </div>
    // </section>
  );
};

export default Portofolio;
