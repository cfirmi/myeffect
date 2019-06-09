import React, { Component } from 'react'
import styled from 'styled-components'

 const Outerbox = styled.div`
  background: red;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
  "image1 image1 image2 image2 image2"
  "image1 image1 image2 image2 image2"
  "image1 image1 image2 image2 image2"
  "image1 image1 image4 image4 image4"
  "image3 image3 image4 image4 image4"
  "image3 image3 image4 image4 image4";
 `;
  const Image = styled.div`
  background: blue;
  `;

export default class memoriesgallery extends Component {
  render() {
    return (
      <Outerbox>
        <Image image1>Img</Image>        
      </Outerbox>
    )
  }
}
