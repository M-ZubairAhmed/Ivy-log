import React from 'react'

import { fireDatabase } from '../../../utils/fire'
import ExploreComponent from '../component/Component'

export default class ExploreContainer extends React.Component {
  state = {
    subjects: [],
    loading: true,
  }

  async componentDidMount() {
    const subjectsNodeRef = await fireDatabase.ref('CLASSES')
    await subjectsNodeRef.on('value', snapshot => {
      const allSubjectsOnDB = snapshot.val()
      let allSubjectsOnClient = []
      for (let subjectOnDB in allSubjectsOnDB) {
        allSubjectsOnClient = [
          ...allSubjectsOnClient,
          allSubjectsOnDB[subjectOnDB],
        ]
      }
      this.setState({
        subjects: allSubjectsOnClient,
        loading: false,
      })
    })
  }

  enrollIntoClass = async classID => {
    // 1. Getting class object
    const classRefNode = await fireDatabase
      .ref('CLASSES/' + classID)
      .once('value')
    const classObjectOnDB = await classRefNode.val()
    // 2. Attaching to logged in user
    await fireDatabase
      .ref(`USERS/${this.props.userObject.uid}/classes/${classID}`)
      .set(classObjectOnDB)
    // 3. Incrementing enroll value
    const newEnrollValue = (await classObjectOnDB.enrolls) + 1
    await fireDatabase.ref(`CLASSES/${classID}/enrolls`).set(newEnrollValue)
  }

  render() {
    return (
      <ExploreComponent
        subjects={this.state.subjects}
        loading={this.state.loading}
        enrollIntoClass={this.enrollIntoClass}
        userObject={this.props.userObject}
      />
    )
  }
}
