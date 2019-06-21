import React, { Component } from 'react'
import styled from 'styled-components'
import NavigationSettings from './settingsnavigation/navigationsettings'
import UserSettings from './settingsuser/usersettings'
import jwt_decode from 'jwt-decode'

const Outerbox = styled.div`
  /* background: pink; */
  grid-column: 2 / -1;
`;

export default class settings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }
  componentDidMount() {
    // fetch("https://jsonplaceholder.typicode.com/users/1")
    fetch("http://localhost:4444/user/21")
    .then(response => response.json())
    .then(data =>
      this.setState({
      user: data
    }))
}
  render() {
    return (
      <Outerbox>
        <NavigationSettings />
        <UserSettings user={this.state.user} />
      </Outerbox>
    )
  }
}
