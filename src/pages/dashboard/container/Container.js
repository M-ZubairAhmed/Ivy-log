import React from 'react'
import axios from 'axios'

import DashboardComponent from '../component/Component'
import { fireDatabase } from '../../../utils/fire'
import { newsURL } from '../../../utils/secrets'

export default class DashboardContainer extends React.Component {
  constructor() {
    super()
    this.state = {
      subjects: [],
      loading: true,
      news: [],
    }
  }
  async componentDidMount() {
    // const allSubjectsDb = fireDatabase.ref('Classes')
    // allSubjectsDb.on('value', snapshot => {
    //   const subjectsOnDB = snapshot.val()
    //   const subjectsOnClient = []
    //   for (let subjectOnDB in subjectsOnDB) {
    //     subjectsOnClient.push({
    //       subjectName: subjectsOnDB[subjectOnDB].sub,
    //       id: subjectOnDB,
    //     })
    //   }
    //   this.setState({
    //     subjects: subjectsOnClient,
    //     loading: false,
    //   })
    // })
    const newsResponse = await axios.get(newsURL)
    const news = await newsResponse.data.articles
    await this.setState({
      news,
    })
  }
  render() {
    return (
      <div>
        <DashboardComponent news={this.state.news} />
        {this.state.subjects.map(subject => (
          <div key={subject.id}>{subject.subjectName}</div>
        ))}
      </div>
    )
  }
}
