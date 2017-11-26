import React from 'react'
import { Card } from 'semantic-ui-react'

import SubjectCard from '../../components/subjectCard/SubjectCard'

export default props => (
  <div>
    {props.loading ? (
      <div>Loading</div>
    ) : (
      <Card.Group>
        {props.subjects
          .sort((subjectA, subjectB) => subjectA.datetime - subjectB.datetime)
          .map(subject => (
            <SubjectCard
              key={subject.classID}
              name={subject.name}
              classID={subject.classID}
              teacher={subject.teacher}
              description={subject.description}
              datetime={subject.datetime}
              enrolls={subject.enrolls}
              duration={subject.duration}
              enrollIntoClass={props.enrollIntoClass}
              isStudent={props.userObject.isStudent}
            />
          ))}
      </Card.Group>
    )}
  </div>
)
