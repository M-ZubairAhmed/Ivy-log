import React from 'react'
import { Loader, Dimmer } from 'semantic-ui-react'

import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import DashboardContainer from './dashboard/DashboardContainer'
import ExploreContainer from './explore/ExploreContainer'
import ScheduleContainer from './schedule/ScheduleContainer'
import IdCardComponent from './idCard/IdCardComponent'

export default class Pages extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 'dashboard',
      userObject: {},
    }
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
            userObject={this.props.userObject}
          />
        )
      case 'explore':
        return <ExploreContainer userObject={this.props.userObject} />
      case 'schedule':
        return <ScheduleContainer userObject={this.props.userObject} />
      case 'idCard':
        return <IdCardComponent userObject={this.props.userObject} />
      default:
        return <div />
    }
  }

  render() {
    return (
      <div>
        {this.props.userAuthObject && this.props.userObject ? (
          <div>
            <Header
              authenticate={this.props.authenticate}
              userName={this.props.userAuthObject.displayName}
              userImage={this.props.userAuthObject.photoURL}
            />
            <div style={{ display: 'flex', minHeight: '90vh' }}>
              <Sidebar
                router={this.router}
                currentPage={this.state.currentPage}
              />
              <div style={{ flex: '1 1 auto', padding: '1rem' }}>
                {this.renderPage(this.state.currentPage)}
              </div>
            </div>
          </div>
        ) : (
          <Dimmer active inverted>
            <Loader>
              <h3>
                Preparing your <br />
                Ivy Logger Dashboard
              </h3>
            </Loader>
          </Dimmer>
        )}
      </div>
    )
  }
}
