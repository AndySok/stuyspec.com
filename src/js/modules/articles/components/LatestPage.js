import React from "react";
import { connect } from "react-redux";
import { Grid, Row, Col } from "react-bootstrap/lib";
import injectSheet from "react-jss";
import { Helmet } from "react-helmet";

import ArticleList from "./ArticleList";
import { TallAd } from "../../advertisements/components";
import { getLatestArticles } from "../selectors";

const styles = {
  LatestPage: {
    marginTop: "20px",
  },
  pageTitle: {
    color: "#000",
    fontFamily: "Canela",
    fontSize: "48px",
    fontWeight: 500,
    lineHeight: 1,
    marginBottom: "11px",
  },
  "@media (min-width: 992px)": {
    LatestPage: {
      marginTop: "80px",
    },
    articleList: {
      paddingRight: "14px !important",
    },
    tallAdContainer: {
      borderLeft: "1px solid #ddd",
      marginTop: "57px",
      paddingLeft: "14px !important",
    },
  },
};

const LatestPage = ({ classes, articles }) => {
  return (
    <Grid fluid className={classes.LatestPage}>
      <Helmet titleTemplate="%s | The Stuyvesant Spectator">
        <title>The Latest</title>
        <meta />
      </Helmet>
      <Row>
        <Col xs={12} sm={12} md={9} lg={9} className={classes.articleList}>
          <ArticleList articles={articles} title="Latest" label="Articles" />
        </Col>
        <Col
          xsHidden
          smHidden
          md={3}
          lg={3}
          className={classes.tallAdContainer}
        >
          <TallAd />
        </Col>
      </Row>
    </Grid>
  );
};

const mapStateToProps = state => ({
  articles: getLatestArticles(state),
});

export default connect(mapStateToProps)(injectSheet(styles)(LatestPage));
