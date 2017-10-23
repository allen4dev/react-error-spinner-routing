import React, { Component } from 'react';
import { connect } from 'react-redux';

import comments from './../modules/comments';

import CommentList from './../shared/CommentList';

class Comments extends Component {
  componentDidMount() {
    const { items } = this.props;
    if (items.length === 0) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    const { fetchComments } = this.props;

    fetchComments();
  };

  render() {
    return (
      <div className="Comments">
        <h1>Comments</h1>

        <CommentList items={this.props.items} />

        {this.props.isFetching && <h1>Loading...</h1>}

        <div className="Button">
          <button className="btn" onClick={this.fetchData}>
            Show more
          </button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: Object.values(state.comments.entities),
    isFetching: state.comments.fetching,
  };
}

export default connect(mapStateToProps, {
  fetchComments: comments.actions.fetchComments,
})(Comments);
