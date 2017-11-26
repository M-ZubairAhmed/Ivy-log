import React from 'react'
import { Menu, Dropdown, Image } from 'semantic-ui-react'

export default class Header extends React.Component {
  handleChange = (e, { value }) => {
    if (value === 'signout') {
      this.signout()
    }
  }

  signout() {
    this.props.authenticate(false)
  }

  dropdownDesign = (
    <span>
      {this.props.userName} <Image avatar src={this.props.userImage} />
    </span>
  )

  dropdownOptions = [{ key: 1, text: 'Sign out', value: 'signout' }]

  render() {
    return (
      <Menu borderless style={{ marginBottom: '0px' }}>
        <Menu.Item header>Ivy Log</Menu.Item>
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
