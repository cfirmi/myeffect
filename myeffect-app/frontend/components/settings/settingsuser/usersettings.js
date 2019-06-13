import React, { Component } from 'react'
import EditProfile from './usereditprofile/usereditprofile'

export default class usersettings extends Component {
  render() {
    return (
      <div>
        <EditProfile user={this.props.user} />
      </div>
    )
  }
}
