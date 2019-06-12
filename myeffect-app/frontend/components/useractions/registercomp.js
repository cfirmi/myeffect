import React, { Component } from 'react'
import { register } from '../UserFunctions/userfunctions'

export default class registercomp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
    }
  }
  onChange = (e) => {
    this.setState({[e.target.name] : e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    const user = { 
      name: this.state.name,
      about: this.state.about,
      city: this.state.city,
      website: this.state.website,
      useremail: this.state.useremail,
      password: this.state.password
    }
    register(user)
      .then(res => {
          this.props.history.push('\login')
      })
  }

  render() {
    return (
      <div style={{background: 'red', gridColumn: '2'}}>
        <h1>Register</h1>
        <form noValidate onSubmit={this.onSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text"
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.onChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <input type="email"
              name="email"
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
          <button 
            type="submit">Register
          </button>
        </form>
      </div>
    )
  }
}
