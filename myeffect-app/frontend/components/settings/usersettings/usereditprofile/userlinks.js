import React, { Component } from 'react'
import styled from 'styled-components'
import {SettingsTitle, SettingsSubTitle} from '../../../styles/Titles'
import {SettingsInput} from '../../../styles/Inputs'

 const Outerbox = styled.div`
  /* background: red; */
  grid-column: 3 / -1;
  width: 90%;
  margin-left: 50%;
  transform: translateX(-50%);
 `;
 const InputBox = styled.div`
 grid-row: 1;
 display: grid;
 grid-template-columns: repeat(4, 1fr);
 grid-template-rows: 40px 60px;
`;

export default class userlinks extends Component {
  render() {
    return (
      <Outerbox>
        <SettingsTitle>Social Media Links</SettingsTitle>
        <InputBox>
          <SettingsSubTitle>Facebook</SettingsSubTitle>
          <SettingsInput type="text" name="desc" />
        </InputBox>
        <InputBox>
          <SettingsSubTitle>LinkedIn</SettingsSubTitle>
          <SettingsInput type="text" name="desc" />
        </InputBox>
        <InputBox>
          <SettingsSubTitle>Youtube</SettingsSubTitle>
          <SettingsInput type="text" name="desc" />
        </InputBox>
        <InputBox>
          <SettingsSubTitle>Instagram</SettingsSubTitle>
          <SettingsInput type="text" name="desc" />
        </InputBox>
        <InputBox>
          <SettingsSubTitle>Twitter</SettingsSubTitle>
          <SettingsInput type="text" name="desc" />
        </InputBox>
        <InputBox>
          <SettingsSubTitle>Google Plus +</SettingsSubTitle>
          <SettingsInput type="text" name="desc" />
        </InputBox>
      </Outerbox>
    )
  }
}
