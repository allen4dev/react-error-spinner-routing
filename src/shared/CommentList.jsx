import React from 'react';

function renderItem(item) {
  return (
    <li key={item.id} className="Comment">
      <h4 className="Comment-name">{item.name}</h4>
      <p className="Comment-body">{item.body}</p>
      <p className="Comment-email">{item.email}</p>
    </li>
  );
}

const CommentList = ({ items }) => {
  return <ul className="CommentList">{items.map(renderItem)}</ul>;
};

export default CommentList;
