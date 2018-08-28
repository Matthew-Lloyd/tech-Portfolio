import React from "react";

// material-ui components
import withStyles from "material-ui/styles/withStyles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";
import Face from "@material-ui/icons/Face";
import Fingerprint from "@material-ui/icons/Fingerprint";
import Palette from "@material-ui/icons/Palette";
import RecordVoiceOver from "@material-ui/icons/RecordVoiceOver";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import SectionLogin from "./SectionLogin.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import pillsStyle from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.jsx";

class SectionPills extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          <div id="navigation-pills">
            <div className={classes.title}>
              <div className="slick-caption">
              <h3 className={classes.subtitle}
                style={{
                color: "white",
                fontWeight: 450,
                // fontSize: "3.0rem",
                }}
              >
                Everything you need:
              </h3>
              </div>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={12} lg={12}>
                <NavPills
                  color="info"
                  horizontal={{
                    tabsGrid: { xs: 12, sm: 4, md: 4 },
                    contentGrid: { xs: 12, sm: 8, md: 8 }
                  }}
                  tabs={[
                    {
                      tabButton: "Bio",
                      tabIcon: Fingerprint,
                      tabContent: (
                        <span style= {{
                          color: "white"
                        }}>
                        <p>
                          How do you summarize a life? There are so many different elements and working parts... 
                          How do you know what's relevant and what is not? I suppose you start with introductions.
                        </p>
                        <br />
                        <p>
                          Hello World! My name is Matthew Lloyd. I am a human with an analytical mind trapped inside a body with a
                           lot of heart. I've spent my early work career climbing the corporate ladder of a Fortune 500 company, 
                           and found myself wanting more. Along the way I have picked up a variety of skills and experience that 
                           have proven invaluable in the world of business. Among these are things like time management, mentorship, 
                           adaptability & flexibility, business ownership, on-the-fly problem solving, and exceptional people skills.
                        </p>
                        <br />
                        <p>
                          More recently, I’ve dived head first into the world of Full-Stack Web Development and am loving every 
                          minute of it!! I can't overstate how much I was made for this kind of work! This has added a whole new 
                          array (pun intended) of skills and experience ranging from Client-side technologies like HTML, CSS, 
                          JQuery, Handlebars & React.js to Server-side tech such as Node.js, Express, mySQL/Sequelize, & MongoDB. 
                          In other words, the MERN stack toolkit is my arsenal of choice; though I'm not so limited to say this 
                          is the ONLY way.
                        </p>
                        <br />
                        <p>
                          I am looking for a career that will challenge & inspire me on a day-to-day basis and allow me to tap 
                          into the reservoir that is my full potential. I am a fast & eager learner and am willing to go out of 
                          my comfort zone to do so. Thank you for taking the time to check out my profile, and have a blessed day!
                          </p>
                        </span>
                      )
                    },
                    {
                      tabButton: "Skillset",
                      tabIcon: Palette,
                      tabContent: (
                        <span style={{
                          color: "white"
                        }}>
                          <ul>
                            <h3>LANGUAGES</h3>
                            <li>JavaScript</li>
                            <li>C#</li>
                            <li>Python</li>
                          </ul>
                          <ul>
                            <h4>TECHNOLOGIES</h4>
                            <li>React + Redux</li>
                            <li>Node.js</li>
                            <li>Express</li>
                            <li>MongoDB</li>
                            <li>MySQL</li>
                            <li>MVC Architecture</li>
                            <li>Nodemailer</li>
                            <li>Handlebars</li>
                            <li>Bootstrap</li>
                            <li>JQuery</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>API Development</li>
                            <li>Blockchain Cryptography</li>
                            <li>& MUCH more!</li>
                          </ul>
                        </span>
                      )
                    },
                    {
                      tabButton: "Contact Me",
                      tabIcon: RecordVoiceOver,
                      tabContent: (
                        <span style={{
                          color: "white"
                        }}>
                          <SectionLogin />
                        </span>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(pillsStyle)(SectionPills);
