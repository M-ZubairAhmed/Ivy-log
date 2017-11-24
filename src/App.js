import React, { Component } from 'react'

import Pages from './pages/Pages'
import Login from './pages/login/Login'

export default class App extends Component {
  state = {
    isAuthenticated: false,
  }

  authenticate = shouldAuthenticate => {
    this.setState({
      isAuthenticated: shouldAuthenticate,
    })
  }

  render() {
    if (this.state.isAuthenticated) {
      return (
        <Pages
          isAuthenticated={this.state.isAuthenticated}
          authenticate={this.authenticate}
        />
      )
    } else {
      return <Login authenticate={this.authenticate} />
    }
  }
}
