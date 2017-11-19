import React from 'react'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'

import Header from '../components/header/Header'
import DashboardContainer from './dashboard/container/Container'

export default class Pages extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarVisible: false,
      sidebarContentDim: false,
    }
  }

  toggleSibebar = () => {
    this.setState({
      sidebarVisible: !this.state.sidebarVisible,
      sidebarContentDim: !this.state.sidebarContentDim,
    })
  }

  render() {
    return (
      <div>
        <Header toggleSibebar={this.toggleSibebar} />
        <Sidebar.Pushable style={{ height: '100vh' }}>
          <Sidebar
            as={Menu}
            animation="push"
            width="thin"
            visible={this.state.sidebarVisible}
            icon="labeled"
            vertical>
            <Menu.Item name="home">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item name="explore">
              <Icon name="find" />
              Explore
            </Menu.Item>
            <Menu.Item name="schedule">
              <Icon name="calendar outline" />
              Schedule
            </Menu.Item>
            <Menu.Item name="idCard">
              <Icon name="id card" />
              ID card
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher dimmed={this.state.sidebarContentDim}>
            <DashboardContainer />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
