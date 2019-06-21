import React, { Component } from 'react'
import styled from 'styled-components'
import UserPhoto from './userphoto'
import UserAbout from './userabout'
import UserInfo from './userinfo'
import UserLinks from './userlinks'

 const Outerbox = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 300px 1fr 1fr 1fr 1fr 1fr;
 `;


export default class usereditprofile extends Component {

  render() {
    return (
      <Outerbox>
        <UserPhoto user={this.props.user} />
        <UserAbout user={this.props.user} />
        <UserInfo user={this.props.user} />
        <UserLinks user={this.props.user} />
      </Outerbox>
    )
  }
}
