import React from 'react'
import moment from 'moment'
import { Card, Segment, List, Header } from 'semantic-ui-react'

import SubjectCard from '../../components/subjectCard/SubjectCard'

const todaysDate = moment()
export default props => (
  <div>
    <Segment>
      <Header size="medium">Today's</Header>
      <Card.Group>
        {props.enrolledClasses
          .filter(enrolledClass =>
            moment(enrolledClass.datetime).isSame(todaysDate, 'day'),
          )
          .sort(
            (enrolledClassA, enrolledClassB) =>
              enrolledClassA.datetime - enrolledClassB.datetime,
          )
          .map(enrolledClass => (
            <SubjectCard
              key={enrolledClass.classID}
              name={enrolledClass.name}
              classID={enrolledClass.classID}
              teacher={enrolledClass.teacher}
              description={enrolledClass.description}
              datetime={enrolledClass.datetime}
              enrolls={enrolledClass.enrolls}
              duration={enrolledClass.duration}
              isStudent={false}
            />
          ))}
      </Card.Group>
    </Segment>
    <Segment>
      <Header size="medium">Upcoming classes</Header>
      <List celled size={'large'}>
        {props.enrolledClasses
          .filter(enrolledClass =>
            moment(enrolledClass.datetime).isAfter(todaysDate, 'day'),
          )
          .sort(
            (enrolledClassA, enrolledClassB) =>
              enrolledClassA.datetime - enrolledClassB.datetime,
          )
          .map(enrolledClass => (
            <List.Item>
              <List.Content>
                <List.Header>{enrolledClass.name}</List.Header>
                {moment(enrolledClass.datetime).calendar()}
              </List.Content>
            </List.Item>
          ))}
      </List>
    </Segment>
  </div>
)
