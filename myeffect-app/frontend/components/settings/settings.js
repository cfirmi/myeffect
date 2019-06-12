import React, { Component } from 'react'
import styled from 'styled-components'
import NavigationSettings from './navigationsettings/navigationsettings'
import UserSettings from './usersettings/usersettings'
import jwt_decode from 'jwt-decode'

const Outerbox = styled.div`
  /* background: pink; */
  grid-column: 2 / -1;
`;

export default class settings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: '',
        about: '',
        email: ''
      }
    }
  }
  componentDidMount() {
      const token = localStorage.usertoken
      const decoded = jwt_decode(token)
    this.setState({
      name: decoded.name,
      email: decoded.email,
      password: decoded.password
    })
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
