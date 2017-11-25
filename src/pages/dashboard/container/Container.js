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
    const subjectsNodeRef = await fireDatabase.ref('CLASSES')
    await subjectsNodeRef.on('value', snapshot => {
      const allSubjectsOnDB = snapshot.val()
      const allSubjectsOnClient = []
      for (let subjectOnDB in allSubjectsOnDB) {
        allSubjectsOnClient.push({
          id: subjectOnDB,
          name: allSubjectsOnDB[subjectOnDB].name,
          description: allSubjectsOnDB[subjectOnDB].description,
          datetime: allSubjectsOnDB[subjectOnDB].datetime,
          duration: allSubjectsOnDB[subjectOnDB].duration,
          teacher: allSubjectsOnDB[subjectOnDB].teacher,
        })
      }
      this.setState({
        allSubjects: allSubjectsOnClient,
        loading: false,
      })
    })
    ///
    // const user = this.props.userAuthObject
    // user
    //   .updateProfile({
    //     // displayName: 'John Watson',
    //     // photoURL:
    //     // 'https://pm1.narvii.com/5702/b9a7ef349c3640a3ed0b9de981c7bfca391023e4_128.jpg',
    //     isStudent: false,
    //   })
    //   .then(() => console.log('saved'))
    //   .catch(error => console.log(error))
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
    const subjectsNodeRef = await fireDatabase.ref('CLASSES')
    await subjectsNodeRef.push().set(newClass)
  }

  render() {
    console.log(this.props.userAuthObject)
    return (
      <div>
        <DashboardComponent
          news={this.state.news}
          router={this.props.router}
          userName={this.props.userAuthObject.displayName}
          toggleAddNewClass={this.toggleAddNewClass}
          isShownNewClass={this.state.isShownNewClass}
          addNewClassToDB={this.addNewClassToDB}
        />
        {this.state.allSubjects.map(subject => (
          <div key={subject.id}>
            {subject.name} by {subject.teacher}
          </div>
        ))}
      </div>
    )
  }
}
