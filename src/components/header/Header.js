import React from 'react'
import { Menu, Dropdown, Image, Icon } from 'semantic-ui-react'

export default class Header extends React.Component {
  handleChange = (e, { value }) => {
    if (value === 'signout') {
      this.signout()
    }
  }

  signout() {
    console.log('signing out')
    return this.props.signout
  }

  dropdownDesign = (
    <span>
      <Image avatar src={this.props.userImage} />
    </span>
  )

  dropdownOptions = [{ key: 1, text: 'Sign out', value: 'signout' }]

  render() {
    return (
      <Menu borderless style={{ marginBottom: '0px' }}>
        <Menu.Item onClick={this.props.toggleSibebar}>
          <Icon name="content" size="large" />
        </Menu.Item>
        <Menu.Item header>Teacher/Student Log</Menu.Item>
        <Menu.Menu position="right">
          <Dropdown
            item
            closeOnChange={true}
            trigger={this.dropdownDesign}
            options={this.dropdownOptions}
            onChange={this.handleChange}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}
