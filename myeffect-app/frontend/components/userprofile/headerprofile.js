import React, { Component } from 'react'
import styled from 'styled-components'
import uuid from 'uuid/v4'

const testImage = '../../static/images/profile/header/me.JPG'

 const Outerbox = styled.div`
  margin-top: -80px;
  position: relative;
  grid-column: 1 / -1;
  grid-row: 2;
  margin-left: 50%;
  transform: translateX(-50%);
  z-index: 10;
 `;

 const ProfileImage = styled.img`
  border-radius: 50%;
 `;

export default class headerprofile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        { id: uuid(), name: "Christian", profileImage: "../../static/images/profile/header/me.JPG" },
      ]
    }
  }
  renderUser() {
    return (
      <div>
      {this.state.users.map(user => (
        <ProfileImage width="90px" src={user.name} alt=""/>)
        )
      }
      </div>
      ) 
    }
    render() {
      return(
        <Outerbox>
          {this.renderUser()}
          <div style={{background: 'red'}}>
            sdjhbsdouh
          </div>
        </Outerbox>
      )
    }
}
