import React from 'react'

import DashboardComponent from '../component/Component'
import { fireDatabase } from '../../../utils/fire'
import { newsData } from '../../../utils/dummyData'

export default class DashboardContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      subjects: [],
      loading: true,
      news: newsData,
    }
  }

  async componentDidMount() {
    const allSubjectsDb = fireDatabase.ref('Classes')
    allSubjectsDb.on('value', snapshot => {
      const subjectsOnDB = snapshot.val()
      const subjectsOnClient = []
      for (let subjectOnDB in subjectsOnDB) {
        subjectsOnClient.push({
          subjectName: subjectsOnDB[subjectOnDB].sub,
          id: subjectOnDB,
        })
      }
      this.setState({
        subjects: subjectsOnClient,
        loading: false,
      })
    })
  }

  render() {
    return (
      <div>
        <DashboardComponent news={this.state.news} router={this.props.router} />
        {this.state.subjects.map(subject => (
          <div key={subject.id}>{subject.subjectName}</div>
        ))}
      </div>
    )
  }
}
