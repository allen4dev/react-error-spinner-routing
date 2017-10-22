import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostList from './../shared/PostList';
import FetchError from './../shared/FetchError';

import posts from './../modules/posts';

class Posts extends Component {
  componentDidMount() {
    const { items } = this.props;

    if (items.length === 0) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    const { fetchPosts } = this.props;

    await fetchPosts();
  };

  renderButton() {
    if (this.props.isFetching || this.props.errorMessage) {
      return;
    }

    return (
      <div className="Button">
        <button className="btn" onClick={this.fetchData}>
          Show more
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="Posts">
        <h1>Posts</h1>
        <PostList items={this.props.items} />

        {this.props.isFetching && <h1 className="Loading">Loading...</h1>}

        {this.props.errorMessage && (
          <FetchError
            message={this.props.errorMessage}
            onRetry={this.fetchData}
          />
        )}

        {this.renderButton()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: Object.values(state.posts.entities),
    isFetching: state.posts.fetching,
    errorMessage: state.posts.error,
  };
}

export default connect(mapStateToProps, {
  fetchPosts: posts.actions.fetchPosts,
})(Posts);
