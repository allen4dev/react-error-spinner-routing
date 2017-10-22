import React, { Component } from 'react';
import { connect } from 'react-redux';

import PostList from './../shared/PostList';

import posts from './../modules/posts';

class Posts extends Component {
  componentDidMount() {
    const { items } = this.props;

    if (items.length === 0) {
      this.fetchData();
    }
  }

  async fetchData() {
    const { fetchPosts } = this.props;

    await fetchPosts();
  }

  render() {
    return (
      <div className="Posts">
        <h1>Posts</h1>
        <PostList items={this.props.items} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: Object.values(state.posts.entities),
  };
}

export default connect(mapStateToProps, {
  fetchPosts: posts.actions.fetchPosts,
})(Posts);
