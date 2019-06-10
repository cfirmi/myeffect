import React, { Component } from 'react'
import styled from 'styled-components'
import { About } from '../../styles/Titles'


const Outerbox = styled.div`
display: grid;
`;

export default class abouttext extends Component {
  render() {
    return (
      <Outerbox>
        <About>Lorem nihil fuga aliquam porro, culpa laboriosam consectetur esse corporis quas nobis? Nihil beatae maiores reprehenderit voluptates harum debitis cumque doloremque, doloribus aperiam nostrum molestias dicta? Veritatis, reiciendis accusamus quo ea nesciunt earum voluptas.</About>
      </Outerbox>
    )
  }
}
