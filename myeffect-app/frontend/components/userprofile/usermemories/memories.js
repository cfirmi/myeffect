import React, { Component } from 'react'
import styled from 'styled-components'
import MemoriesBanner from './memoriesbanner'
import MemoriesGallery from './memoriesgallery'
 
const Outerbox = styled.div`
grid-row: -1;
grid-column: 1 / -1;
`;

export default class memories extends Component {
  render() {
    return (
      <Outerbox>
        <MemoriesBanner />
        <MemoriesGallery />
      </Outerbox>
    )
  }
}
