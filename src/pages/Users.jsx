import React, { Component } from 'react';
import { connect } from 'react-redux';

import UserList from './../shared/UserList';

import users from './../modules/users';

class Users extends Component {
  componentDidMount() {
    const { items } = this.props;

    if (items.length === 0) {
      this.fetchData();
    }
  }

  fetchData = async () => {
    const { fetchUsers } = this.props;

    await fetchUsers();
  };

  render() {
    return (
      <div className="Users">
        <h1>Users</h1>
        <UserList items={this.props.items} />
        {this.props.isFetching && <h1>Loading...</h1>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: Object.values(state.users.entities),
    isFetching: state.users.fetching,
  };
}

export default connect(mapStateToProps, {
  fetchUsers: users.actions.fetchUsers,
})(Users);
