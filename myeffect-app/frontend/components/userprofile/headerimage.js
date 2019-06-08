import React, { Component } from 'react'
import styled from 'styled-components'

const headerMask = '../../static/images/profile/header/header-image.svg'
const testImage = '../../static/images/profile/header/me.JPG'

 const ImageMask = styled.img`
  mask-image: url(${headerMask});
  mask-repeat: no-repeat;
  mask-size: contain;
  width: 100%;
  grid-column: 1 / -1;
  grid-row: 1;
  background-repeat: no-repeat;
 z-index: 1;
 `;
export default class header extends Component {
  render() {
    return (
        <ImageMask src={testImage} />
    )
  }
}
