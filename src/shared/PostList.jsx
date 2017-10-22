import React from 'react';

function renderItem(item) {
  return (
    <li key={item.id} className="Post">
      <h4 className="Post-title">{item.title}</h4>
      <p className="Post-body">{item.body}</p>
    </li>
  );
}

const PostList = ({ items }) => {
  return <ul className="PostList">{items.map(renderItem)}</ul>;
};

export default PostList;
