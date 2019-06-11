import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import uuid from "uuid/v4";

 const Outerbox = styled.div`
  background: green;
  width: 80%;
  margin-left: 50%;
  transform: translateX(-50%);
 `;
  const NavItem = styled.div`
  background: red;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 0px 40px;
  min-width: 1000px;
  margin-left: 50%;
  transform: translateX(-50%);
  text-align: center;
  justify-content: space-around;
    a {
      color: white;
    }
  `;
 const Title = styled.div`
  border: 2px solid black;
  width: 100%; height: 40px;
  font-size: 17px;
  line-height: 40px;
  border-radius: 10px 10px 0px 0px;
  padding: 0px 10px;
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
      <NavItem>
        {this.state.navItems.map(item => (
          <Link key={item.id} href={`/${item.link}`}>
            <a>
              <Title>{item.name}</Title>
            </a>
          </Link>
        ))}
      </NavItem>
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
