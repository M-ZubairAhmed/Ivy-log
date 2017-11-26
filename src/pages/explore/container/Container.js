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

  render() {
    return (
      <ExploreComponent
        subjects={this.state.subjects}
        loading={this.state.loading}
      />
    )
  }
}
