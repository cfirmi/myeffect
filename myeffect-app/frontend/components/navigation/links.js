import React, { Component } from 'react'
import styled from 'styled-components'
<<<<<<< HEAD
import Link from 'next/link'
=======
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a
import uuid from "uuid/v4";

 const Outerbox = styled.div`
  /* background: purple; */
  width: 80%;
  margin-left: 50%;
  transform: translateX(-50%);
<<<<<<< HEAD
  a {
    color:white;
  }
=======
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a
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
<<<<<<< HEAD
        { id: uuid(), name: "Performance", icon: "../../static/images/navigation/icon-performance.svg" },
        { id: uuid(), name: "Settings", icon: "../../static/images/navigation/icon-settings.svg" }
=======
        { id: uuid(), name: "Performance", icon: "../../static/images/navigation/icon-performance.svg" }
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a
      ]
    }
  }
  renderNavItems() {
    return(
      <div>
        {this.state.navItems.map(item => (
<<<<<<< HEAD
          <Link href="/settings">
          <a>
            <InnerBox key={item.id}>
                <NavIcon src={item.icon} />
                <Title>{item.name}</Title>
            </InnerBox>
          </a>
          </Link>
=======
          <InnerBox key={item.id}>
              <NavIcon src={item.icon} />
              <Title>{item.name}</Title>
          </InnerBox>
>>>>>>> 44ccec69416dec4070637b3c3723b816ec7d7a0a
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
