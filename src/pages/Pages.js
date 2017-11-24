import React from 'react'

import Header from '../components/header/Header'
import Sidebar from '../components/sidebar/Sidebar'
import DashboardContainer from './dashboard/container/Container'
import ExploreContainer from './explore/container/container'

export default class Pages extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      sidebarVisible: false,
      sidebarContentDim: false,
      currentPage: 'dashboard',
    }
  }

  router(page) {
    switch (page) {
      case 'dashboard':
        return <DashboardContainer />
      case 'explore':
        return <ExploreContainer />
      default:
        return <div>Under construction</div>
    }
  }

  render() {
    return (
      <div>
        <Header />
        <div style={{ display: 'flex', minHeight: '90vh' }}>
          <Sidebar />
          <div style={{ flex: '1 1 auto', padding: '1rem' }}>
            <DashboardContainer />
          </div>
        </div>
      </div>
    )
  }
}
