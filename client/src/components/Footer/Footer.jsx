import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "material-ui";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer style={{color: "white"}} className={footerClasses}>
      <div className={classes.container}>
        {/* <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a href="https://www.creative-tim.com/" className={classes.block}>
                Creative Tim
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="http://presentation.creative-tim.com/"
                className={classes.block}
              >
                About us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a href="http://blog.creative-tim.com/" className={classes.block}>
                Blog
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://www.creative-tim.com/license"
                className={classes.block}
              >
                Licenses
              </a>
            </ListItem>
          </List>
        </div> */}
        <div className={classes.center}>
            Matthew Lloyd
          &copy; {1900 + new Date().getYear()}
          {/* made with{" "}
          <Favorite className={classes.icon} /> by{" "} */}
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
