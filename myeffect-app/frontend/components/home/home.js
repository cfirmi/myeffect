import React, { Component } from 'react'
import styled from 'styled-components'


const Outerbox = styled.div`
background: red;
`;

export default class home extends Component {
  render() {
    return (
      <Outerbox>
        <h1>this is the home</h1>
      </Outerbox>
    )
  }
}
