import React, { Component } from 'react'

import Pages from './pages/Pages'
import Login from './pages/login/Login'
import { fireAuth, fireDatabase } from './utils/fire'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      isAuthenticated: false,
      userAuthObject: null,
      userObject: null,
    }
  }

  async login() {
    await fireAuth.onAuthStateChanged(user => {
      if (user) {
        this.setState({
          isAuthenticated: true,
          userAuthObject: user,
        })
      }
    })
  }

  async logout() {
    await fireAuth
      .signOut()
      .then(() => console.log('signed out'))
      .catch(error => console.log(error.message))
    this.setState({
      isAuthenticated: false,
    })
  }

  authenticate = shouldAuthenticate => {
    shouldAuthenticate ? this.login() : this.logout()
  }

  async componentWillMount() {
    await this.login()
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevState.userAuthObject !== this.state.userAuthObject) {
      const refToUser = await fireDatabase
        .ref('USERS/' + this.state.userAuthObject.uid)
        .once('value')
      const userObjectOnDB = await refToUser.val()
      if (this.state.userAuthObject !== null) {
        await this.setState({
          userObject: userObjectOnDB,
        })
      }
    }
  }

  render() {
    if (this.state.isAuthenticated) {
      return (
        <Pages
          isAuthenticated={this.state.isAuthenticated}
          authenticate={this.authenticate}
          userAuthObject={this.state.userAuthObject}
          userObject={this.state.userObject}
        />
      )
    } else {
      return <Login authenticate={this.authenticate} />
    }
  }
}
