import React from 'react'

import DashboardComponent from '../component/Component'
import { fireDatabase } from '../../../utils/fire'
import { newsData } from '../../../utils/dummyData'

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

  async componentDidMount() {
    // const subjectsNodeRef = await fireDatabase.ref('CLASSES')
    // await subjectsNodeRef.on('value', snapshot => {
    //   const allSubjectsOnDB = snapshot.val()
    //   const allSubjectsOnClient = []
    //   for (let subjectOnDB in allSubjectsOnDB) {
    //     allSubjectsOnClient.push({
    //       id: subjectOnDB,
    //       name: allSubjectsOnDB[subjectOnDB].name,
    //       description: allSubjectsOnDB[subjectOnDB].description,
    //       datetime: allSubjectsOnDB[subjectOnDB].datetime,
    //       duration: allSubjectsOnDB[subjectOnDB].duration,
    //       teacher: allSubjectsOnDB[subjectOnDB].teacher,
    //     })
    //   }
    //   this.setState({
    //     allSubjects: allSubjectsOnClient,
    //     loading: false,
    //   })
    // })
    // Updating users in dp
    // const user = this.props.userAuthObject
    // user
    //   .updateProfile({
    //     displayName: 'Elliot Anderson',
    //     photoURL:
    //       'http://sm.ign.com/t/ign_in/review/m/mr-robot-h/mr-robot-hellofriendmov-review_qxqa.640.jpg',
    //   })
    //   .then(() => console.log('saved'))
    //   .catch(error => console.log(error))
    // Adding users in dp
    // fireDatabase.ref('USERS/' + this.props.userAuthObject.uid).set({
    //   uid: this.props.userAuthObject.uid,
    //   displayName: this.props.userAuthObject.displayName,
    //   email: this.props.userAuthObject.email,
    //   photoURL: this.props.userAuthObject.photoURL,
    //   isStudent: true,
    //   classes: [],
    // })
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
