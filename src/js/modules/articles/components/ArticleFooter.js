import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import injectSheet from "react-jss";
import { Row, Col } from "react-bootstrap/lib";
import { toRoman } from "roman-numerals";

import SubscriptionForm from "../../accounts/components/forms/SubscriptionForm";
import { subscribe } from "../../accounts/actions";

const styles = {
  ArticleFooter: {
    fontFamily: "Minion Pro",
  },
  inPrint: {
    borderBottom: "1px solid #ddd",
    color: "#000",
    fontSize: "19px",
    fontStyle: "italic",
    lineHeight: 1.4,
    marginBottom: "14px",
    paddingBottom: "13px",
    "& a": {
      color: "#000",
      textDecoration: "underline",
      "&:hover, &:active, &:focus": {
        color: "#000",
      },
    },
  },
  subscriptionCTA: {
    color: "#000",
    fontSize: "19px",
    marginBottom: "10px",
  },
  subscriptionFormContainer: {
    marginBottom: "21px",
    "& > div > form > div": {
      display: "inline-block",
    },
    "& > div > form > div:first-child": {
      width: "80%",
      "& > div > input": {
        // email input
        borderRadius: "3px 0 0 3px",
        width: "100%",
      },
    },
    "& > div > form > div:last-child": {
      width: "20%",
      "& > button": {
        // "Subscribe" button
        borderRadius: "0 3px 3px 0",
        margin: 0,
        width: "100%",
      },
    },
  },
  "@media (max-width: 991px)": {
    ArticleFooter: {
      padding: "0 10%",
    },
  },
  "@media (max-width: 767px)": {
    ArticleFooter: {
      padding: "0 2%",
    },
  },
};

const ArticleFooter = ({ classes, article, subscribe }) => {
  return (
    <Row className={classes.ArticleFooter}>
      <Col xs={12} sm={12} md={8} lg={8}>
        <p className={classes.inPrint}>
          This article appears in print in&nbsp;
          <a
            className={classes.subscribe}
            href="https://issuu.com/stuyspectator/docs"
            target="_blank"
          >
            {`Volume ${toRoman(article.volume)}, Issue ${article.issue}`}
            {/* TODO: Lookup table for individual volume/issue links */}
          </a>
          .
        </p>
        <p className={classes.subscriptionCTA}>
          Never miss a <i>Spectator</i> issue again. Sign up for for our
          newsletter to receive a weekly e-mail with staff-picked stories.
        </p>
        <div className={classes.subscriptionFormContainer}>
          <SubscriptionForm
            onSubmit={values => subscribe(values)}
            callToAction="Go"
          />
        </div>
      </Col>
      <Col xsHidden smHidden md={4} lg={4} />
    </Row>
  );
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ subscribe }, dispatch);
};

export default connect(null, mapDispatchToProps)(
  injectSheet(styles)(ArticleFooter),
);
