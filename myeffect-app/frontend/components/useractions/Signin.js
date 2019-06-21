import React, { Component } from 'react';
import gql from 'graphql-tag';
import Form from '../styles/Form';
import Error from '../ErrorMessage';

class Signin extends Component {
  state = {
    name: '',
    password: '',
    email: '',
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <div style={{background: 'white', gridColumn: '2'}}>  
          <Form
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              await signup();
              this.setState({ name: '', email: '', password: '' });
            }}
          >
            <fieldset >
              <h2 style={{color: 'darkgrey'}}>Sign into your account</h2>
              <label htmlFor="email">
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="password">
                Password
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.saveToState}
                />
              </label>
                <button type="submit">Sign In!</button>
            </fieldset>
          </Form>
      </div>
    );
  }
}

export default Signin;
