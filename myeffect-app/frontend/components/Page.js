import React, { Component } from 'react'
import styled, { ThemeProvider, injectGlobal } from 'styled-components'
import Meta from '../components/Meta'
import Navigation from './navigation/navigation'

const theme = {
  lighterblue: '#00B8F1',
  lightblue: '#1BA2E7',
  yellow: '#FFD430',
  darkBlue: '#035899',
  grey: '#696969',
  darkGrey: '#0D0C0C',
  white: '#fff',
  black: '#000',
  title: '20px',
  bsblack: '0 4px 8px 0 rgba(0, 0, 0, 0.3), 0 6px 20px 0 rgba(0, 0, 0, 0.3)'
  };
const StylePage = styled.div`
  /* background: ${props => props.theme.lightblue}; */
  width: 100vw; height: 100vh;
  margin: 0px;
  color: white;
`;
 const Layout = styled.div`

  height: 100vh;
 `;

const Inner = styled.div`
  width: 100%;
  top: 0px;right: 0px;bottom: 0px;
  /* background: ${props => props.theme.grey}; */
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

// Best for Viewing Page width: 1476px height: 950px
export default class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StylePage>
          <Meta />
          <Layout>
            <Navigation />
            <Inner>{this.props.children}</Inner>
          </Layout>
        </StylePage>
      </ThemeProvider>
    );
  }
};