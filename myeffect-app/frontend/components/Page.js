import React, { Component } from 'react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import Meta from '../components/Meta'
import Navigation from './navigation/navigation'

const theme = {
  // lightBlue: '#00B8F1',
  lightBlue: '#1BA2E7',
  yellow: '#FFD430',
  darkBlue: '#035899',
  grey: '#696969',
  white: '#fff',
  black: '#000',
  bsblack: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3)'
  };
const StylePage = styled.div`
  /* background: ${props => props.theme.lightBlue}; */
  width: 100vw; height: 100vh;
  margin: 0px;
  color: white;
`;

const Inner = styled.div`
  background: ${props => props.theme.grey};
  margin-left: 50%;
  transform: translateX(-50%);
`;

injectGlobal`
@font-face {
  font-family: 'Roboto', sans-serif;
  src: url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900");
  font-style: normal;
}
input, textarea, select, a { outline: none; }

  html {
    font-size: 10px;
    color: black;
    max-width: 100%;
    overflow-x: hidden;
    
    }
    * , *:before, *:after {
      box-sizing: border-box;
      font-smooth: auto;
    }
    body {
      padding: 0;
      margin: 0;
      font-size: 1.5rem;
      line-height: 2;
      font-family: 'Roboto';
      overflow-x: hidden;
      ::-webkit-scrollbar { 
        display: none; 
      }
    }
    a {
      text-decoration: none;
    }
`;

export default class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StylePage>
          <Meta />
          <Navigation />
          <Inner>{this.props.children}</Inner>
        </StylePage>
      </ThemeProvider>
    );
  }
};