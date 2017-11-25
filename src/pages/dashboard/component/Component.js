import React from 'react'
import { Header } from 'semantic-ui-react'

import ClassesPeek from '../../../components/classesPeek/ClassesPeek'
import News from '../../../components/news/News'
import NewClass from '../../../components/newClass/NewClass'

export default class DashboardComponent extends React.Component {
  render() {
    return (
      <div>
        <Header
          as="h1"
          userName={this.props.userName}
          userImage={this.props.userImage}
        >
          Dashboard
        </Header>
        <ClassesPeek
          title="Upcoming classes"
          actionText="View your schedule"
          action={this.props.router}
          actionValue="schedule"
        />
        <ClassesPeek
          title="Recomended classes for you"
          actionText="Explore all classes"
          action={this.props.router}
          actionValue="explore"
        />
        <ClassesPeek
          title="Teaching track"
          actionText="Create a class"
          action={this.props.toggleAddNewClass}
          actionValue={true}
        />
        <News news={this.props.news} />
        <NewClass
          addNewClassToDB={this.props.addNewClassToDB}
          isShownNewClass={this.props.isShownNewClass}
          toggleAddNewClass={this.props.toggleAddNewClass}
        />
      </div>
    )
  }
}
