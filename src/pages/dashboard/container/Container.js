import React from 'react'
import Devicons from '../../../components/devicons/Devicons'
import { fireDatabase } from '../../../utils/fire'

export default class DashboardContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      subjects: [],
      loading: true,
    }
  }
  componentDidMount() {
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
    console.log(this.state.subjects)
    return (
      <div>
        Dashboard
        {this.state.subjects.map(subject => (
          <div key={subject.id}>{subject.subjectName}</div>
        ))}
        <Devicons size={'15rem'} name="devicon-css3-plain colored" />
      </div>
    )
  }
}
