import React from 'react'
import { Card } from 'semantic-ui-react'

import SubjectCard from '../../../components/subjectCard/SubjectCard'

export default props => (
  <div>
    {props.loading ? (
      <div>Loading</div>
    ) : (
      <Card.Group>
        {props.subjects.map(subject => (
          <SubjectCard
            name={subject.name}
            classID={subject.classID}
            teacher={subject.teacher}
            description={subject.description}
            datetime={subject.datetime}
            enrolls={subject.enrolls}
            duration={subject.duration}
          />
        ))}
      </Card.Group>
    )}
  </div>
)
