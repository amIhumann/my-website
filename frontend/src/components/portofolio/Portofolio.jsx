import React, { useState, useEffect, useContext } from "react";
import Swal from "sweetalert2";
import "./portofolio.css";
import { BsFillCaretDownFill } from "react-icons/bs";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { GlobalState } from '../../index';

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

const Portofolio = ({portfolio}) => {
  const axios = useContext(GlobalState).axiosRequest;
  const url = useContext(GlobalState).url;
  const [value, setValue] = useState(0);
  const [item, setItem] = useState({});

  useEffect(()=>{
    if(portfolio){
      (async function(){
        let temp = { ...portfolio };
        
        await Object.entries(temp).forEach((element, index) => {
          temp[element[0]] = element[1].map((value, key) => {
            return <article data-aos="zoom-in" className="portfolio__item" key={key}>
            <div className="portfolio__item-image">
              <img src={`${url}images/${value.img}`} alt="image3" />
            </div>
            <h3>{value.title}</h3>
            <div className="portfolio__item-cta">
              <a
                href={value.github}
                className="resize-content btn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
              <a
                href={value.demo}
                className="resize-content btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
          })
        });
    
        setItem(temp);
      })();
    }
  }, [portfolio])


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const addItem = async (status) => {
    await axios
    .post(`display/portfolio`, { status : status, offset : item[status].length })
    .then((res) => {
      let output = res.data.map((value, key) =>(
         <article data-aos="zoom-in" className="portfolio__item" key={key}>
          <div className="portfolio__item-image">
            <img src={`${url}images/${value.img}`} alt="image3" />
          </div>
          <h3>{value.title}</h3>
          <div className="portfolio__item-cta">
            <a
              href={value.github}
              className="resize-content btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
            <a
              href={value.demo}
              className="resize-content btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      ));

      let temp = { ...item };
      temp[status] = [ ...temp[status], ...output];
      setItem(temp);
    })
    .catch((error) =>
      Swal.fire(
        'Error',
        error.message,
        "error"
      )
    );
    // setItem((old) => [...old, 
    //   <article data-aos="zoom-in" className="portfolio__item" key={"ghj"}>
    //     <div className="portfolio__item-image">
    //       <img src={IMG3} alt="image3" />
    //     </div>
    //     <h3>This is a portfolio item title</h3>
    //     <div className="portfolio__item-cta">
    //       <a
    //         href="https:github.com"
    //         className="resize-content btn"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Github
    //       </a>
    //       <a
    //         href="https:.com"
    //         className="resize-content btn btn-primary"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Live Demo
    //       </a>
    //     </div>
    //   </article>]);
  }

  return (
    <section id="portfolio" className="section">
      <h5 data-aos="fade">My Recent Work</h5>
      <h2 data-aos="fade">Portfolio</h2>
      <div
        className="container"
      >
        <Box>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }} key={"7d"}>
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
            {item && Object.entries(item).map((element, index)=> (
              <Tab
                label={element[0]}
                {...a11yProps(index)}
                sx={{ minWidth: "fit-content", flex: 1, color : 'var(--color-white)'}}
                key={index}
              />
            ))}
            </Tabs>
          </Box>
            {item && Object.entries(item).map((element, index)=> (
              <TabPanel value={value} index={index} key={index}>
                <div className="portfolio__container">
                  {element[1]}
                </div>
                {
                  (element[1] && element[1].length === 6) ?
                  <div className="more">
                    <button className="btn btn-primary" onClick={(() => addItem(element[0]))}>
                      Show More{" "}
                      <BsFillCaretDownFill style={{ verticalAlign: "text-top" }} />
                    </button>
                  </div> : ""
                }
              </TabPanel>
            ))}
        </Box>
      </div>
    </section>
  );
};

export default Portofolio;
