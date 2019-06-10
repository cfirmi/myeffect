import React, { Component } from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import uuid from "uuid/v4";

 const Outerbox = styled.div`
  /* background: purple; */
  width: 80%;
  margin-left: 50%;
  transform: translateX(-50%);
  a {
    color:white;
  }
 `;
  const InnerBox = styled.div`
    display: flex;
  `;
 const NavIcon = styled.img`
  /* background: red; */
  height: 35px;
 `;
 const Title = styled.div`
  /* background: green; */
  margin-left: 30px;
  width: 100%; height: 65px;
 `;
 
class links extends Component {
  constructor(props) {
    super(props)
    this.state = {
      navItems: [
        { id: uuid(), name: "Feed", icon: "../../static/images/navigation/icon-feed.svg" },
        { id: uuid(), name: "Recognition", icon: "../../static/images/navigation/icon-recognition.svg" },
        { id: uuid(), name: "Actions", icon: "../../static/images/navigation/icon-actions.svg" },
        { id: uuid(), name: "Members", icon: "../../static/images/navigation/icon-members.svg" },
        { id: uuid(), name: "Mail", icon: "../../static/images/navigation/icon-mail.svg" },
        { id: uuid(), name: "Performance", icon: "../../static/images/navigation/icon-performance.svg" },
        { id: uuid(), name: "Settings", icon: "../../static/images/navigation/icon-settings.svg" }
      ]
    }
  }
  renderNavItems() {
    return(
      <div>
        {this.state.navItems.map(item => (
          <Link href="/settings">
          <a>
            <InnerBox key={item.id}>
                <NavIcon src={item.icon} />
                <Title>{item.name}</Title>
            </InnerBox>
          </a>
          </Link>
        ))}
      </div>
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
