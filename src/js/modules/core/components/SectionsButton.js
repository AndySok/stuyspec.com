import React from "react";
import injectSheet from "react-jss";
import { Hamburger } from '../icons'

const styles = {
  SectionsButton: {
    display: "flex",
    alignItems: "center",
    width: "9vw",
    height: "6vh",
    minWidth: "119px",
    minHeight: "29px",
    maxHeight: "45px",
    maxWidth: "140px",
    paddingRight: "10px",
    borderRadius: "3px",
    border: "solid 1.5px #dddddd",
    backgroundColor: "white",
    float: "left",
    "& span": {
      position: "relative",
      top: "2px",
      transitionDuration: ".3s"
    },
    "&:hover span": {
      color: "#888"
    }
  },
  hamburger: {
    display: "inline",
    width: "3vw",
    height: "3vh",
    minWidth: "24px",
    minHeight: "23px",
    maxHeight: "30px",
    opacity: "0.48",
    marginRight: "0.4vw",
    float: "left"
  },
  text: {
    fontFamily: "Circular Std",
    fontSize: "1.8rem",
    fontWeight: "bold",
    textAlign: "left",
    color: "#000"
  },
};

const SectionsButton = ({ onClick, classes }) => {
  return (
    <button onClick={onClick} className={classes.SectionsButton}>
      <Hamburger className={classes.hamburger} />
      <span className={classes.text}>Sections</span>
    </button>
  );
};

export default injectSheet(styles)(SectionsButton);
