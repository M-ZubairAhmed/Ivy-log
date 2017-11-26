import React, { Component } from 'react'

import Pages from './pages/Pages'
import Login from './pages/login/Login'
import { fireAuth } from './utils/fire'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      isAuthenticated: false,
      userAuthObject: null,
    }
  }

  login() {
    fireAuth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          isAuthenticated: true,
          userAuthObject: user,
        })
      }
    })
  }

  logout() {
    fireAuth
      .signOut()
      .then(() => console.log('signed out'))
      .catch(error => console.log(error.message))
    this.setState({
      isAuthenticated: false,
    })
  }

  authenticate = shouldAuthenticate => {
    if (shouldAuthenticate === false) {
      this.logout()
    } else {
      this.login()
    }
  }

  componentWillMount() {
    this.login()
  }

  render() {
    if (this.state.isAuthenticated) {
      return (
        <Pages
          isAuthenticated={this.state.isAuthenticated}
          authenticate={this.authenticate}
          userAuthObject={this.state.userAuthObject}
        />
      )
    } else {
      return <Login authenticate={this.authenticate} />
    }
  }
}
