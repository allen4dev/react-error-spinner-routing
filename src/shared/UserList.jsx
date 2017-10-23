import React from 'react';

function renderItem(item) {
  return (
    <li key={item.id} className="User">
      <h4 className="User-title">{item.name}</h4>
      <span className="User-username">{item.username}</span>
      <span className="User-email">{item.email}</span>
      <span className="User-website">{item.website}</span>
    </li>
  );
}

const UserList = ({ items }) => {
  return <ul className="UserList">{items.map(renderItem)}</ul>;
};

export default UserList;
