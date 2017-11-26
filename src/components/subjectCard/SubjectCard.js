import React from 'react'
import { Card, Icon, Button } from 'semantic-ui-react'
import moment from 'moment'

export default props => (
  <Card>
    <Card.Content>
      <Card.Meta textAlign={'right'}>{props.classID}</Card.Meta>
      <Card.Header style={styles.div}>{props.name}</Card.Header>
      <Card.Meta>{props.teacher}</Card.Meta>
      <Card.Description>{props.description}</Card.Description>
    </Card.Content>
    <Card.Content extra>
      <div>
        <span style={styles.span}>
          <Icon name="calendar" />
          {new moment(props.datetime).format("MMM Do 'YY, h:mm a")}
        </span>
        <span style={styles.span}>
          <Icon name="hourglass start" />
          {props.duration} mins
        </span>
      </div>
      <div style={styles.div}>
        <span style={styles.span}>
          <Icon name="users" />
          {props.enrolls === 0 ? 'No enrollments' : `${props.enrolls} enrolled`}
        </span>
        <Button basic style={styles.button}>
          Enroll
        </Button>
      </div>
    </Card.Content>
  </Card>
)

const styles = {
  span: {
    marginRight: '10px',
  },
  button: {
    float: 'right',
  },
  div: {
    marginTop: '12px',
  },
}
