import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

export default props => (
  <Card style={{ margin: '0 auto', marginTop: '30px' }}>
    <Image src={props.userObject.photoURL} />
    <Card.Content>
      <Card.Header>{props.userObject.displayName}</Card.Header>
      <Card.Meta>{props.userObject.email}</Card.Meta>
      <Card.Description>
        <Icon disabled name="university" />
        {props.userObject.isStudent ? 'Student' : 'Professor'} at University of
        Zubair trust
      </Card.Description>
    </Card.Content>
    <Card.Content extra style={{ textAlign: 'center' }}>
      {props.userObject.uid}
    </Card.Content>
  </Card>
)
