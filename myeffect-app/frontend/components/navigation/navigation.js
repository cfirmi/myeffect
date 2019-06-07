import React, { Component } from 'react'
import styled from 'styled-components'
import Links from './links'
import Profile from './profile'

const hamburger = "'../../static/images/navigation/hamburger.svg'"

const Outerbox = styled.div`
  background: ${props => props.theme.lightBlue};
  position: absolute;
  top: 0px;bottom: 0px;left: 0px;
  padding: 5px;
  width: 250px;
  border-radius: 0px 20px 20px 0px;
`;
 const Hamburger = styled.div`
  background: url(${hamburger});
  background-size: 100% 100%; 
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 35px; right: 40px;
  height: 40px; width: 40px;
 `;

export default class navigation extends Component {
  render() {
    return (
      <Outerbox>
        <Hamburger />
        <Profile />
        <br/>
        <Links />
        
      </Outerbox>
    )
  }
}
