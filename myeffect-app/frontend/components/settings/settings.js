import React, { Component } from 'react'
import styled from 'styled-components'
import NavigationSettings from './navigationsettings/navigationsettings'
import UserSettings from './usersettings/usersettings'

const Outerbox = styled.div`
  /* background: pink; */
  grid-column: 2 / -1;
`;

export default class settings extends Component {
  render() {
    return (
      <Outerbox>
        <NavigationSettings />
        <UserSettings />
      </Outerbox>
    )
  }
}
