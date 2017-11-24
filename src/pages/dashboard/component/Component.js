import React from 'react'
import { Header, Segment, Statistic, Button } from 'semantic-ui-react'

import ClassesPeek from '../../../components/classesPeek/ClassesPeek'
import News from '../../../components/news/News'

export default class DashboardComponent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Header as="h1">Dashboard</Header>
        <ClassesPeek title="Upcoming classes" actionText="View your schedule" />
        <ClassesPeek
          title="Recomended classes for you"
          actionText="Explore all classes"
        />
        <News news={this.props.news} />
      </div>
    )
  }
}
