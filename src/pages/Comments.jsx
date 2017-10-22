import React, { Component } from 'react';

import CommentList from './../shared/CommentList';

class Comments extends Component {
  render() {
    return (
      <div className="Comments">
        <h1>Comments</h1>

        <CommentList items={new Array(10).fill({})} />
      </div>
    );
  }
}

export default Comments;
