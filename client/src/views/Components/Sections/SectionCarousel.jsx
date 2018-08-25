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
import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";


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
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
              <Card carousel>
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
                        <p>
                          [VoteChain Summary]
                      </p>
                      </DialogContent>
                      <DialogActions className={classes.modalFooter}>
                        <Button color="transparent" simple>
                          [VoteChain Github Link]
                      </Button>
                        <Button
                          onClick={() => this.handleClose("proj1Modal")}
                          color="danger"
                          simple
                        >
                          [VoteChain Heroku Link]
                      </Button>
                      </DialogActions>
                    </Dialog>
                    <div className="slick-caption">
                      <h4>
                        [VOTECHAIN IMAGE]
                      </h4>
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
                        <p>
                          [BAWCON.COM SUMMARY]
                      </p>
                      </DialogContent>
                      <DialogActions className={classes.modalFooter}>
                        <Button color="transparent" simple>
                          [BAWCON LINK]
                      </Button>
                        <Button
                          onClick={() => this.handleClose("proj2Modal")}
                          color="danger"
                          simple
                        >
                          Close
                      </Button>
                      </DialogActions>
                    </Dialog>
                    <div className="slick-caption">
                      <h4>
                        [BAWCON.COM IMAGE]
                      </h4>
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
                        <p>
                          [REDDIT SCRAPER SUMMARY]
                      </p>
                      </DialogContent>
                      <DialogActions className={classes.modalFooter}>
                        <Button color="transparent" simple>
                          [REDDIT SCRAPER GITHUB LINK]
                      </Button>
                        <Button
                          onClick={() => this.handleClose("proj3Modal")}
                          color="danger"
                          simple
                        >
                          [REDDIT SCRAPER HEROKU LINK]
                      </Button>
                      </DialogActions>
                    </Dialog>
                    <div className="slick-caption">
                      <h4>
                        [REDDIT SCRAPER IMAGE]
                      </h4>
                    </div>
                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
