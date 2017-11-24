import React from 'react'
import { Menu, Icon } from 'semantic-ui-react'

export default class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activePage: 'dashboard',
    }
  }

  componentDidUpdate() {
    if (this.props.currentPage !== this.state.activePage) {
      this.setState({ activePage: this.props.currentPage })
    }
  }

  handleClick = (event, { name }) => {
    if (this.state.activePage !== name) {
      this.setState({ activePage: name })
      this.props.router(name)
    }
  }

  render() {
    return (
      <Menu
        vertical
        style={{ marginTop: '0px', marginBottom: '0px' }}
        color="grey"
      >
        <Menu.Item
          name="dashboard"
          active={this.state.activePage === 'dashboard'}
          onClick={this.handleClick}
        >
          <Icon name="home" />
          Home
        </Menu.Item>
        <Menu.Item
          name="explore"
          active={this.state.activePage === 'explore'}
          onClick={this.handleClick}
        >
          <Icon name="find" />
          Explore
        </Menu.Item>
        <Menu.Item
          name="schedule"
          active={this.state.activePage === 'schedule'}
          onClick={this.handleClick}
        >
          <Icon name="calendar outline" />
          Schedule
        </Menu.Item>
        <Menu.Item
          name="idCard"
          active={this.state.activePage === 'idCard'}
          onClick={this.handleClick}
        >
          <Icon name="id card" />
          ID card
        </Menu.Item>
      </Menu>
    )
  }
}
