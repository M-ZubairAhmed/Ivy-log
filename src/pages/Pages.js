import React from 'react'

import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import DashboardContainer from './dashboard/container/Container'
import ExploreContainer from './explore/container/Container'
import ScheduleContainer from './schedule/Container'

import { fireDatabase } from '../utils/fire'

export default class Pages extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 'dashboard',
      userObject: {},
    }
  }

  componentdidMount() {
    console.log('componentDidMount')
    const refToUser = fireDatabase
      .ref('USERS/' + this.props.userAuthObject.uid)
      .once('value')
    const userObjectOnDB = refToUser.val()
    console.log(userObjectOnDB.name)
  }

  router = changedPage => {
    if (this.state.currentPage !== changedPage) {
      this.setState({
        currentPage: changedPage,
      })
    }
  }

  renderPage = selectedPage => {
    switch (selectedPage) {
      case 'dashboard':
        return (
          <DashboardContainer
            router={this.router}
            userAuthObject={this.props.userAuthObject}
          />
        )
      case 'explore':
        return <ExploreContainer />
      case 'schedule':
        return <ScheduleContainer />
      default:
        return <div />
    }
  }

  render() {
    return (
      <div>
        <Header
          authenticate={this.props.authenticate}
          userName={this.props.userAuthObject.displayName}
          userImage={this.props.userAuthObject.photoURL}
        />
        <div style={{ display: 'flex', minHeight: '90vh' }}>
          <Sidebar router={this.router} currentPage={this.state.currentPage} />
          <div style={{ flex: '1 1 auto', padding: '1rem' }}>
            {this.renderPage(this.state.currentPage)}
          </div>
        </div>
      </div>
    )
  }
}
