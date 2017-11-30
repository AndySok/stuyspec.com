import React from "react";
import { connect } from "react-redux";
import injectSheet from "react-jss";
import { Grid, Row, Col } from "react-bootstrap/lib";
import { bindActionCreators } from "redux";

import Comment from "./Comment";
import CommentForm from "./CommentForm";
import { SignInModal } from "../../accounts/components";

import { createComment } from "../actions";
import { getRequestedArticleComments } from "../selectors";
import { getCurrentUser } from "../../accounts/selectors";

const styles = {
  CommentThread: {
    padding: 0,
    "& textarea": {
      resize: "vertical", // only allows vertical resizing
    },
  },
  "@media (max-width: 991px)": {
    CommentThread: {
      padding: "0 10%",
    },
    commentFormContainer: {
      marginBottom: "36px",
    },
  },
  "@media (max-width: 767px)": {
    CommentThread: {
      padding: "0 2%",
    },
  },
};

const CommentThread = ({
  classes,
  comments,
  article,
  createComment,
  sessionUser,
  session,
}) => {
  const handleCreateComment = values => {
    createComment(
      {
        ...values,
        articleId: article.id,
        userId: sessionUser.id,
      },
      session,
    );
  };
  return (
    <Grid fluid className={classes.CommentThread}>
      <Row className={classes.commentFormContainer}>
        <CommentForm onSubmit={handleCreateComment} />
        <Col md={4} lg={4} />
      </Row>
      <SignInModal />
      {Object.values(comments).map(comment => {
        return <Comment comment={comment} key={comment.id} />;
      })}
    </Grid>
  );
};

const mapStateToProps = (state, ownProps) => ({
  comments: getRequestedArticleComments(state, ownProps),
  sessionUser: getCurrentUser(state),
  session: state.accounts.session,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ createComment }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(
  injectSheet(styles)(CommentThread),
);