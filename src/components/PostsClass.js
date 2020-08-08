import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchpost } from "../actions/postAction";
import PropTypes from "prop-types";

class PostsClass extends Component {
  componentWillMount() {
    this.props.fetchpost();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.newPost) {
      this.props.posts.unshift(nextProps.newPost);
    }
  }

  render() {
    return (
      <>
        <h1>fd</h1>
        {this.props.posts.map((post) => (
          <div key={post.id}>
            <h4>{post.title}</h4>
            <span>{post.body}</span>
          </div>
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.posts.items,
  newPost: state.posts.item,
});

PostsClass.propTypes = {
  fetchpost: PropTypes.func.isRequired,
  posts: PropTypes.array.isRequired,
  newPost: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { fetchpost })(PostsClass);
