import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../../actions'

class Users extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return <li key={user.id}>{user.name}</li>
    })
  }

  render() {
    return (
      <div>
        Heres a big list of users:
        {this.renderUsers() }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { users: state.users }
}

const loadData = (store) => {
  //console.log (store.dispatch(fetchUsers()))
  return store.dispatch(fetchUsers())
}

export default {
  loadData,
  component: connect(mapStateToProps, {fetchUsers})(Users)
}



