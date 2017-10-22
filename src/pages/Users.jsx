import React, { Component } from 'react';

import UserList from './../shared/UserList';

class Users extends Component {
  render() {
    return (
      <div className="Users">
        <h1>Users</h1>
        <UserList items={new Array(10).fill({})} />
      </div>
    );
  }
}

export default Users;
