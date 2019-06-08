import React, { Component } from 'react'
import styled from 'styled-components'
import Profile from './navigationprofile'
import Links from './links'

const hamburger = "'../../static/images/navigation/hamburger.svg'"

const Outerbox = styled.div`
  grid-column: 1;
  background: ${props => props.theme.lightBlue};
  width: 15vw; height: 100vh;
  min-width: 250px;
  max-width: 250px;
  padding: 5px;
  border-radius: 0px 20px 20px 0px;
  z-index: 100;
`;
 const Hamburger = styled.div`
  background: url(${hamburger});
  background-size: 100% 100%; 
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 35px; left: 170px;
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
