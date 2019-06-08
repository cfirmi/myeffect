import React, { Component } from 'react'
import styled from 'styled-components'
import HeaderImage from './headerimage'
import HeaderProfile from './headerprofile'


 const Outerbox = styled.div`
  background: green;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 150px 80px;
  width: 100%;
  text-align: center;
 `;

export default class profile extends Component {
  render() {
    return (
      <Outerbox>
        <HeaderImage />
        <HeaderProfile />
      </Outerbox>
    )
  }
}
