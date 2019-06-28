import React, { Component } from 'react'
import styled from 'styled-components'
import Profile from './navigationprofile'
import Links from './links'

const hamburger = "'../../static/images/navigation/hamburger.svg'"

const Outerbox = styled.div`
  background: ${props => props.theme.lightblue};
  position: absolute;
  grid-column: 1;
  width: 15vw; height: 100%;
  min-width: 250px;
  max-width: 250px;
  padding: 5px;
  border-radius: 0px 20px 20px 0px;
  z-index: 100;
  overflow-y: scroll;
  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;
 const Hamburger = styled.div`
  background: #000;
  background: url(${hamburger});
  background-size: 100% 100%; 
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 35px; left: 170px;
  height: 40px; width: 40px;
  cursor: pointer;
 `;

export default class navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShow: true
    }
  }
  toggleShow = () => {
    const currState = this.state.isShow
    this.setState({ isShow: !currState })
    console.log(`This is the second state` + this.state)
  }
  render() {
    return (
      {
        isOpen ===  ? 
        <Outerbox>
         {console.log(this.state)}
        <Hamburger className="hamburgerOut" onClick={this.toggleShow} />
        <Profile />
          <br/>
          <br/>
        <Links isOpen={this.props.isShow} />
      </Outerbox>
      :
      <div>
      <h1>Hi</h1>
      </div>
      }
    )
  }
}
