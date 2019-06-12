import React, { Component } from 'react'
import Link from 'next/link'
import { login } from '../UserFunctions/userfunctions'

export default class logincomp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      useremail: '',
      password: '',
    }
  }
  onChange = (e) => {
    this.setState({[e.target.name] : e.target.value })
  }
  onSubmit = (e) => {
    e.preventDefault()
    const user = { 
      email: this.state.useremail,
      password: this.state.password
    }
    login(user)
      .then(res => {
        this.props.history.push('\settings')
      })
  }

  render() {
    return (
      <div style={{background: 'green', gridColumn: '2'}}>
        <h1>Login</h1>
        <form noValidate onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="useremail">Email Address</label>
            <input type="email"
              name="useremail"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password"
              name="password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={this.onChange}
            />
          </div>
            <Link href="/settings">
              <a>
                <button 
                  type="submit">
                      Login
                </button>
              </a>
            </Link>
        </form>
      </div>
    )
  }
}
