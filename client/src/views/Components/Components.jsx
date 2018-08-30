import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// @material-ui/icons
import "assets/scss/material-kit-react.css";
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionBasics from "./Sections/SectionBasics.jsx";
import SectionNavbars from "./Sections/SectionNavbars.jsx";
import SectionTabs from "./Sections/SectionTabs.jsx";
import SectionPills from "./Sections/SectionPills.jsx";
import SectionNotifications from "./Sections/SectionNotifications.jsx";
import SectionTypography from "./Sections/SectionTypography.jsx";
import SectionJavascript from "./Sections/SectionJavascript.jsx";
import SectionCarousel from "./Sections/SectionCarousel.jsx";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.jsx";
import ContactForm from "./Sections/ContactForm.jsx";
import SectionExamples from "./Sections/SectionExamples.jsx";
import SectionDownload from "./Sections/SectionDownload.jsx";
import image1 from "assets/img/_DSF9951-colored.jpg";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="Matthew Lloyd"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 200,
            color: "primary"
          }}
          {...rest}
        />
        <Parallax >
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h1 className={classes.title}>Hello Universe. Matt here.</h1>
                  <h3>
                    Developer with a passion for all things future in tech!
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div>
          {/* <SectionBasics /> */}
          {/* <SectionNavbars /> */}
          {/* <SectionTabs /> */}
          <div><img
            id="bio-pic"
            // onClick={() => this.handleClickOpen("proj1Modal")}
            src={image1}
            // alt="image"
            alt="..."
            // className={classes.imgRounded + " " + classes.imgFluid}
            // className="slick-image"
          /></div>
          <SectionPills />
          {/* <SectionNotifications /> */}
          {/* <SectionTypography /> */}
          {/* <SectionJavascript /> */}
          <h1 
            style={{
              textAlign: "center",
              fontWeight: 600,
              fontSize: "4.2rem",
              color: "white"
            }}
          >
            Portfolio
          </h1>
          <SectionCarousel />
          {/* <SectionCompletedExamples /> */}
          {/* <SectionLogin /> */}
          {/* <GridItem md={12} className={classes.textCenter}>
            <Link to={"/login-page"} className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </Link>
          </GridItem> */}
          {/* <SectionExamples />
          <SectionDownload /> */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
