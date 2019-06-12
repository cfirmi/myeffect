import React, { Component } from 'react'
import styled from 'styled-components'
import {SettingsTitle, SettingsSubTitle} from '../../../styles/Titles'

 const Outerbox = styled.div`
  /* background: green; */
  /* border: 3px solid black; */
  padding: 0px 30px;
  grid-column: 3 / -1;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 30px 100px 100px;
 `;


const InputBox = styled.div`
   grid-column: 1 / -1;
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-template-rows: 50px 100px 100px;
  `;
  const TextInput = styled.input`
   background: ${props => props.theme.inputbg};;
   border: 1px solid ${props => props.theme.lightgrey};
   grid-column: 1 / -1;
   min-height: 150px;
   text-align: top;
   padding-left: 20px;
   grid-row: 2 / 3;
   border-radius: 10px;
  `;

export default class userabout extends Component {
  render() {
    return (
      <Outerbox>
        <SettingsTitle>Profile Description</SettingsTitle>
        <InputBox>
          <SettingsSubTitle>About</SettingsSubTitle>
          <TextInput contenteditable="true" type="text" placeholder={this.props.user.about} />
        </InputBox>
      </Outerbox>
    )
  }
}
