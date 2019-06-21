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
  const Columns = styled.div`
    grid-row: 2;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    max-width: 900px;
    grid-column-gap: 20px;
  `;
 const InputBox = styled.div`
  grid-template-rows: 40px 60px;
`;

export default class userlinks extends Component {
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  };

  render() {
    return (
      <Outerbox>
        <SettingsTitle>Social Media Links</SettingsTitle>
        <Columns>
          <InputBox>
            <SettingsSubTitle>Facebook</SettingsSubTitle>
            <SettingsInput onChange={this.saveToState} type="text" name="facebook" />
          </InputBox>
          <InputBox>
            <SettingsSubTitle>LinkedIn</SettingsSubTitle>
            <SettingsInput onChange={this.saveToState} type="text" name="linkedIn" />
          </InputBox>
          <InputBox>
            <SettingsSubTitle>Youtube</SettingsSubTitle>
            <SettingsInput onChange={this.saveToState} type="text" name="youtube" />
          </InputBox>
          <InputBox>
            <SettingsSubTitle>Instagram</SettingsSubTitle>
            <SettingsInput onChange={this.saveToState} type="text" name="instagram" />
          </InputBox>
          <InputBox>
            <SettingsSubTitle>Twitter</SettingsSubTitle>
            <SettingsInput onChange={this.saveToState} type="text" name="twitter" />
          </InputBox>
          <InputBox>
            <SettingsSubTitle>Google Plus +</SettingsSubTitle>
            <SettingsInput onChange={this.saveToState} type="text" name="googleplus"   />
          </InputBox>
        </Columns>
      </Outerbox>
    )
  }
}
