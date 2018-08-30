import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import Slide from "material-ui/transitions/Slide";
import IconButton from "material-ui/IconButton";
import Dialog from "material-ui/Dialog";
import DialogTitle from "material-ui/Dialog/DialogTitle";
import DialogContent from "material-ui/Dialog/DialogContent";
import DialogActions from "material-ui/Dialog/DialogActions";
import InputLabel from "material-ui/Input/InputLabel";
import FormControl from "material-ui/Form/FormControl";
import Tooltip from "material-ui/Tooltip";
import Popover from "material-ui/Popover";

// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
import Close from "@material-ui/icons/Close";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import Button from "components/CustomButtons/Button.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import image1 from "assets/img/votechain.jpg";
import image2 from "assets/img/bawcon.jpg";
import image3 from "assets/img/redditscraper.jpg";
import image4 from "assets/img/bg7.jpg";


function Transition(props) {
  return <Slide direction="down" {...props} />;
}
class SectionCarousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      proj1Modal: false,
      proj2Modal: false,
      proj3Modal: false,
      proj4Modal: false,
    };
  }
  handleClickOpen(modal) {
    var x = [];
    x[modal] = true;
    this.setState(x);
  }
  handleClose(modal) {
    var x = [];
    x[modal] = false;
    this.setState(x);
  }
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      <div className={classes.section}>
        <div className={classes.container}>
          {/* <GridContainer> */}
            <GridItem xs={12} sm={12} md={12}>
              {/* <Card carousel> */}
                <Carousel {...settings}>
                  <div>
                    <img
                      onClick={() => this.handleClickOpen("proj1Modal")}
                      src={image1}
                      alt="First slide"
                      className="slick-image"
                    />
                    <Dialog
                      classes={{
                        root: classes.center,
                        paper: classes.modal
                      }}
                      open={this.state.proj1Modal}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={() => this.handleClose("proj1Modal")}
                      aria-labelledby="classic-modal-slide-title"
                      aria-describedby="classic-modal-slide-description"
                    >
                      <DialogTitle
                        id="classic-modal-slide-title"
                        disableTypography
                        className={classes.modalHeader}
                      >
                        <IconButton
                          className={classes.modalCloseButton}
                          key="close"
                          aria-label="Close"
                          color="inherit"
                          onClick={() => this.handleClose("proj1Modal")}
                        >
                          <Close className={classes.modalClose} />
                        </IconButton>
                        <h4 className={classes.modalTitle}>VOTECHAIN</h4>
                      </DialogTitle>
                      <DialogContent
                        id="classic-modal-slide-description"
                        className={classes.modalBody}
                      >
                      <ul>
                          <li>
                          An immutable voting system built on a homebrewed blockchain ledger. Has sessions 
                          functionality that stores user data, a responsive and clean UI, databases that 
                          store eligible voters & new blocks, and the capability to prevent voting fraud by 
                          a variety of security measures beyond that of the blockchain.
                          </li>
                          <li>
                            Technologies Used: React for frontend, MongoDB for the data storage, 
                            Express servers, Node.JS for the backend as well as a variety of packages to provide 
                            the additional functionality needed for the blockchain, sessions and routes
                          </li>
                          <li>
                            <strong>
                              For Guest Sign-In use <br />
                              Email​: 
                            </strong>
                            guest@votechain.com<br />
                            <strong>
                              password​: 
                            </strong>
                            votechain
                          </li>
                      </ul>
                      </DialogContent>
                      <DialogActions className={classes.modalFooter}>
                        <Button color="info"
                          href="https://github.com/ardnehsan/ChainVote"
                          target="_blank"
                        >
                          GITHUB
                      </Button>
                        <Button
                          onClick={() => this.handleClose("proj1Modal")}
                          color="danger"
                          href="https://vote-chain.herokuapp.com/"
                          target="_blank"                         
                        >
                        WEBSITE
                      </Button>
                      </DialogActions>
                    </Dialog>
                    <div className="slick-caption">
                      <h1 style={{
                        color: "black"
                      }}><strong>
                        VOTECHAIN
                        </strong>
                      </h1>
                    </div>
                  </div>
                  <div>
                    <img
                      onClick={() => this.handleClickOpen("proj2Modal")}
                      src={image2}
                      alt="Second slide"
                      className="slick-image"
                    />
                    <Dialog
                      classes={{
                        root: classes.center,
                        paper: classes.modal
                      }}
                      open={this.state.proj2Modal}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={() => this.handleClose("proj2Modal")}
                      aria-labelledby="classic-modal-slide-title"
                      aria-describedby="classic-modal-slide-description"
                    >
                      <DialogTitle
                        id="classic-modal-slide-title"
                        disableTypography
                        className={classes.modalHeader}
                      >
                        <IconButton
                          className={classes.modalCloseButton}
                          key="close"
                          aria-label="Close"
                          color="inherit"
                          onClick={() => this.handleClose("proj2Modal")}
                        >
                          <Close className={classes.modalClose} />
                        </IconButton>
                        <h4 className={classes.modalTitle}>BAWCON.COM</h4>
                      </DialogTitle>
                      <DialogContent
                        id="classic-modal-slide-description"
                        className={classes.modalBody}
                      >
                      <ul>
                        <li> [Black and White Construction]
                          <br />is a website for an award-winning construction 
                          company based out of Houston, TX. They specialize in environmentally friendly building 
                          practices to lower a home's energy footprint.
                        </li>
                        <li> Built using React, Express, Node.JS, Material-Kit-React (also used for this site),
                          and Nodemailer for the contact functionality!
                        </li>
                      </ul>  
                      </DialogContent>
                      <DialogActions className={classes.modalFooter}>
                        <Button
                          onClick={() => this.handleClose("proj2Modal")}
                          color="danger"
                          href="https://www.bawcon.com/"
                          target="_blank"
                        >
                          WEBSITE
                        </Button>
                      </DialogActions>
                    </Dialog>
                    <div className="slick-caption">
                      <h1 style={{
                        color: "white"
                        }}>
                        <strong>
                          BAWCON.COM
                        </strong>
                      </h1>
                    </div>
                  </div>
                  <div>
                    <img
                      onClick={() => this.handleClickOpen("proj3Modal")}
                      src={image3}
                      alt="Third slide"
                      className="slick-image"
                    />
                    <Dialog
                      classes={{
                        root: classes.center,
                        paper: classes.modal
                      }}
                      open={this.state.proj3Modal}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={() => this.handleClose("proj3Modal")}
                      aria-labelledby="classic-modal-slide-title"
                      aria-describedby="classic-modal-slide-description"
                    >
                      <DialogTitle
                        id="classic-modal-slide-title"
                        disableTypography
                        className={classes.modalHeader}
                      >
                        <IconButton
                          className={classes.modalCloseButton}
                          key="close"
                          aria-label="Close"
                          color="inherit"
                          onClick={() => this.handleClose("proj3Modal")}
                        >
                          <Close className={classes.modalClose} />
                        </IconButton>
                        <h4 className={classes.modalTitle}>REDDIT SCRAPER</h4>
                      </DialogTitle>
                      <DialogContent
                        id="classic-modal-slide-description"
                        className={classes.modalBody}
                      >
                        <ul>
                        <li> A web scraper full-stack site that pulls current posts from a favorite subreddit, 
                          stores them into a MongoDB with the Mongoose ORM, then populates the page with the saved posts.
                        </li>
                        <li> Built using Handlebars.JS, Express, Node.JS, MongoDB/Mongoose, Cheerio (as the scraper), 
                          and various other NPM Packages
                        </li>
                      </ul>
                      </DialogContent>
                      <DialogActions className={classes.modalFooter}>
                        <Button color="info"
                          href="https://github.com/Matthew-Lloyd/Mongoose-Scraper"
                          target="_blank">
                          GITHUB
                        </Button>
                        <Button
                          onClick={() => this.handleClose("proj3Modal")}
                          color="danger"
                          href="https://mongo-showerthoughts-scraper.herokuapp.com/"
                          target="_blank"
                        >
                          WEBSITE
                      </Button>
                      </DialogActions>
                    </Dialog>
                    <div className="slick-caption">
                      <h1 
                        style={{
                        color: "black"
                      }}>
                        <strong>
                        Reddit Scraper
                        </strong>
                      </h1>
                    </div>
                  </div>
                  {/* <div>
                    <img
                      onClick={() => this.handleClickOpen("proj4Modal")}
                      src={image4}
                      alt="First slide"
                      className="slick-image"
                    />
                    <Dialog
                      classes={{
                        root: classes.center,
                        paper: classes.modal
                      }}
                      open={this.state.proj4Modal}
                      TransitionComponent={Transition}
                      keepMounted
                      onClose={() => this.handleClose("proj4Modal")}
                      aria-labelledby="classic-modal-slide-title"
                      aria-describedby="classic-modal-slide-description"
                    >
                      <DialogTitle
                        id="classic-modal-slide-title"
                        disableTypography
                        className={classes.modalHeader}
                      >
                        <IconButton
                          className={classes.modalCloseButton}
                          key="close"
                          aria-label="Close"
                          color="inherit"
                          onClick={() => this.handleClose("proj4Modal")}
                        >
                          <Close className={classes.modalClose} />
                        </IconButton>
                        <h4 className={classes.modalTitle}>[Project 4]</h4>
                      </DialogTitle>
                      <DialogContent
                        id="classic-modal-slide-description"
                        className={classes.modalBody}
                      >
                        <ul>
                          <li>
                            [Project 4 description]
                          </li>
                          <li>
                            [Project 4 Technologies Used:] 
                          </li>
                        </ul>
                      </DialogContent>
                      <DialogActions className={classes.modalFooter}>
                        <Button color="info"
                          href="#"
                          target="_blank"
                        >
                          [GITHUB LINK]
                          </Button>
                        <Button
                          onClick={() => this.handleClose("proj4Modal")}
                          color="danger"
                          href="#"
                          target="_blank"
                        >
                          [WEBSITE LINK]
                          </Button>
                      </DialogActions>
                    </Dialog>
                    <div className="slick-caption">
                      <h1 style={{
                        color: "black"
                      }}><strong>
                          [PROJECT 4]
                            </strong>
                      </h1>
                    </div>
                  </div> */}
                </Carousel>
              {/* </Card> */}
            </GridItem>
          {/* </GridContainer> */}
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
