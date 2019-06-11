import React, { Component } from 'react'
import styled from 'styled-components'

const settings = '../../static/images/settings/icon-settings.svg'

 const Outerbox = styled.div`
  /* background: red; */
  display: flex;
  img {
    /* background: #000; */
    height: 85px;
  }
  div {
    /* background: #000; */
    line-height: 75px;
    font-size: 80px;
  }
 `;

export default class titlenavigation extends Component {
  render() {
    return (
      <Outerbox>
        <img src={settings} alt="settings"/>
        <div>Settings</div>
      </Outerbox>
    )
  }
}
