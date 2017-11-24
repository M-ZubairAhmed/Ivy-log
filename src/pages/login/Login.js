import React from 'react'
import { Button, Form, Grid, Header } from 'semantic-ui-react'

export default class Login extends React.Component {
  validateAuthentication = () => {
    this.props.authenticate(true)
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
              />
              <Form.Input
                fluid
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <Button
                color="grey"
                fluid
                size="large"
                onClick={this.validateAuthentication}
              >
                Login
              </Button>
            </Form>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
