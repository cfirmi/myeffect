import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import uuid from "uuid/v4";

 const Outerbox = styled.div`
  width: 100%;
  margin-top: 15px;
  a {

  }
 `;

 const Innerbox = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 9px;
  `;
 const NavItem = styled.div`
 background: #fff;
 height: 30px;
 border-radius: 12px 12px 0px 0px;
 input:active, input:focus{
   color: ${props => props.theme.lightblue};
    box-shadow: ${props => props.theme.bsblack};
  }
  `;
 const Title = styled.div`
  height: 30px;
  font-size: 14px;
  line-height: 30px;
  text-align: center;
  color: black;
  input:active, input:focus{
    box-shadow: ${props => props.theme.bsblack};
  }
 `;
 
class links extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navItems: [
        { id: uuid(), name: "Edit Profile",},
        { id: uuid(), name: "Resource Uploads" },
        { id: uuid(), name: "Impact Reporting" },
        { id: uuid(), name: "Theme Customization" },
        { id: uuid(), name: "Account Plan" },
        { id: uuid(), name: "Verification" }
      ]
    }
  }


  renderNavItems() {
    return(
      <Innerbox>
        {this.state.navItems.map(item => (
          <NavItem style={{width: `${item.name.length * 11}px`}}>
            <Link key={item.id} href={`/${item.link}`}>
              <a>
                <Title>{item.name}</Title>
              </a>
            </Link>
          </NavItem>
        ))}
      </Innerbox>
    )
  }
  render() {
    return (
      <Outerbox>
        {this.renderNavItems()}
      </Outerbox>
     )
   }
 }

export default links
