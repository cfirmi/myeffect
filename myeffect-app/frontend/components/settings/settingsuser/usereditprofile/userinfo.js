import React, { Component } from 'react'
import styled from 'styled-components'
import {SettingsTitle, SettingsSubTitle} from '../../../styles/Titles'
import { SettingsInput } from '../../../styles/Inputs'

const Outerbox = styled.div`
  /* background: red; */
  grid-column: 1 / 3;
  width: 100%;
  max-width: 400px;
  margin-left: 50%;
  transform: translateX(-50%);
 `;
const InputBox = styled.div`
 grid-column: 1 / -1;
 grid-row: 2;
 display: grid;
 grid-template-columns: repeat(4, 1fr);
 grid-template-rows: 40px 60px;
`;


export default class userinfo extends Component {
  render() {
    return (
      <Outerbox>
        <SettingsTitle>Profile Info</SettingsTitle>
        <InputBox>
          <SettingsSubTitle>Name</SettingsSubTitle>
          <SettingsInput contenteditable="true" type="text" name="name" placeholder={this.props.user.about} />
        </InputBox>
        <InputBox>
          <SettingsSubTitle>City</SettingsSubTitle>
          <SettingsInput type="text" name="city" />
        </InputBox>
        <InputBox>
          <SettingsSubTitle>Phone Number</SettingsSubTitle>
          <SettingsInput type="text" name="phone" />
        </InputBox>
      </Outerbox>
    )
  }
}
