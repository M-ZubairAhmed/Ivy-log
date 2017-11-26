import React from 'react'

import DashboardComponent from './DashboardComponent'
import { fireDatabase } from '../../utils/fire'
import { newsData } from '../../utils/dummyData'

export default class DashboardContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      allSubjects: [],
      loading: true,
      news: newsData,
      isShownNewClass: false,
    }
  }

  toggleAddNewClass = shouldAddNewClass => {
    this.setState({ isShownNewClass: shouldAddNewClass })
  }

  addNewClassToDB = async newClass => {
    newClass = {
      ...newClass,
      ...{
        teacher: this.props.userAuthObject.displayName,
        enrolls: 0,
      },
    }
    const subjectsNodeRef = await fireDatabase.ref(
      'CLASSES/' + newClass.classID,
    )
    await subjectsNodeRef.set(newClass)
  }

  render() {
    return (
      <DashboardComponent
        news={this.state.news}
        router={this.props.router}
        userName={this.props.userAuthObject.displayName}
        isStudent={this.props.userObject.isStudent}
        toggleAddNewClass={this.toggleAddNewClass}
        isShownNewClass={this.state.isShownNewClass}
        addNewClassToDB={this.addNewClassToDB}
      />
    )
  }
}
