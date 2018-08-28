import React from "react";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
import InputAdornment from "material-ui/Input/InputAdornment";
// @material-ui/icons
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import IconButton from "components/CustomButtons/IconButton.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import loginStyle from "assets/jss/material-kit-react/views/componentsSections/loginStyle.jsx";

class SectionLogin extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      // <div className={classes.section}>
        <div className={classes.container}>
          <GridContainer justify="center">
            {/* <GridItem xs={12} sm={12} md={12}> */}
              <Card>
                <form className={classes.form}>
                  <CardHeader color="danger" className={classes.cardHeader}>
                    <h3>CONTACT</h3>
                    <div className={classes.socialLine}>
                      <IconButton
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i
                          className={classes.socialIcons + " fab fa-twitter"}
                        />
                      </IconButton>
                      <IconButton
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i
                          className={classes.socialIcons + " fab fa-facebook"}
                        />
                      </IconButton>
                      <IconButton
                        href="#pablo"
                        target="_blank"
                        color="transparent"
                        onClick={e => e.preventDefault()}
                      >
                        <i
                          className={
                            classes.socialIcons + " fab fa-google-plus-g"
                          }
                        />
                      </IconButton>
                    </div>
                  </CardHeader>
                  <CardBody>
                    <CustomInput
                      labelText="Full Name"
                      id="first"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "text",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Face className={classes.inputIconsColor}/>
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Email"
                      id="email"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "email",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Email className={classes.inputIconsColor}/>
                          </InputAdornment>
                        )
                      }}
                    />
                    <CustomInput
                      labelText="Message"
                      id="message"
                      formControlProps={{
                        fullWidth: true,
                        className: classes.textArea
                      }}
                      inputProps={{
                        type: "text",
                        name: "Message",
                        endAdornment: (
                          <InputAdornment position="end">
                            <Chat className={classes.inputIconsColor} />
                          </InputAdornment>
                        ),
                        // onChange: event => this.handleInputChange(event),
                        multiline: true,
                        rows: 6
                      }}
                    />
                  </CardBody>
                  <CardFooter className={classes.cardFooter}>
                
                    <Button color="info" size="lg">
                      SEND
                    </Button>
                  </CardFooter>
                </form>
              </Card>
            {/* </GridItem> */}
          </GridContainer>
        </div>
      // </div>
    );
  }
}

export default withStyles(loginStyle)(SectionLogin);
