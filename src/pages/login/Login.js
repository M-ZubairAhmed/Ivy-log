import React from 'react'
import { Message, Button, Form, Grid, Header } from 'semantic-ui-react'

import { fireAuth } from '../../utils/fire'

export default class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      message: 'Enter registered email and password to get started',
    }
  }

  validateAuthentication = event => {
    event.preventDefault()
    const email = this.state.email.trim()
    const password = this.state.password.trim()
    if (this.validateInput(email, password)) {
      this.fireBaseAuthentication(email, password)
    }
  }

  validateInput(email, password) {
    if (email === '' || password === '') {
      this.setState({
        message: 'Both email & password have to be entered',
      })
      return false
    } else {
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (!regex.test(email)) {
        this.setState({
          message: 'Please make sure it is a valid email',
        })
        return false
      } else if (password !== '') {
        const minLen = password.length
        if (minLen < 6) {
          this.setState({
            message: 'Password needs atleast 6 characters',
          })
          return false
        } else {
          this.setState({
            message: 'Checking for authentication',
          })
          return true
        }
      }
    }
  }

  async fireBaseAuthentication(email, password) {
    try {
      const emailInDbMatch = await fireAuth.fetchProvidersForEmail(email)
      const didEmailInDbMatch =
        (await emailInDbMatch.length) === 0 ? false : true
      if (!didEmailInDbMatch) {
        await this.setState({
          message: 'No user found by that email',
        })
      } else {
        const user = await fireAuth.signInWithEmailAndPassword(email, password)
        await this.props.authenticate(true)
      }
    } catch (err) {
      await this.setState({
        message: err.message,
      })
    }
  }

  render() {
    return (
      <div className="login-form">
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="grey" textAlign="center">
              Ivy Logger
            </Header>
            <Form size="large">
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="E-mail address"
                value={this.state.email}
                onChange={event => this.setState({ email: event.target.value })}
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
                value={this.state.password}
                onChange={event =>
                  this.setState({ password: event.target.value })
                }
              />
              <Button
                color="grey"
                fluid
                size="large"
                onClick={this.validateAuthentication}
              >
                Login
              </Button>
              <Message>{this.state.message}</Message>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
