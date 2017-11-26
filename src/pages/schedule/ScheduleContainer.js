import React from 'react'

import ScheduleComponent from './ScheduleComponent'
import { fireDatabase } from '../../utils/fire'

export default class ScheduleContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      enrolledClasses: [],
    }
  }

  async componentDidMount() {
    const user_classRef = await fireDatabase.ref(
      `USERS/${this.props.userObject.uid}/classes`,
    )
    await user_classRef.on('value', snapshot => {
      const user_classesOnDB = snapshot.val()
      let user_classesOnClient = []
      for (let user_subjectOnDB in user_classesOnDB) {
        user_classesOnClient = [
          ...user_classesOnClient,
          user_classesOnDB[user_subjectOnDB],
        ]
      }
      this.setState({
        enrolledClasses: user_classesOnClient,
      })
    })
  }

  render() {
    return <ScheduleComponent enrolledClasses={this.state.enrolledClasses} />
  }
}
