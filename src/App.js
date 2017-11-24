import React, { Component } from 'react'

import Pages from './pages/Pages'
import Login from './pages/login/Login'
import { fireAuth } from './utils/fire'

export default class App extends Component {
  state = {
    isAuthenticated: false,
    userAuthObject: null,
  }

  authenticate = shouldAuthenticate => {
    if (shouldAuthenticate === false) {
      fireAuth
        .signOut()
        .then(() => console.log('signed out'))
        .catch(error => console.log(error.message))
      this.setState({
        isAuthenticated: false,
      })
    } else {
      fireAuth.onAuthStateChanged(user => {
        if (user) {
          this.setState({
            isAuthenticated: true,
            userAuthObject: user,
          })
        }
      })
    }
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
