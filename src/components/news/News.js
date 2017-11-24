import React from 'react'
import { Header, Card, Segment } from 'semantic-ui-react'

export default props => (
  <Segment>
    <Header size="medium">Campus news</Header>
    {props.news.length !== 0 ? (
      <Card.Group>
        {props.news.map(article => (
          <Card href={article.url} target="_blank" key={article.url}>
            <Card.Content>
              <Card.Header as="p" style={{ fontWeight: '300' }}>
                {article.title}
              </Card.Header>
              <Card.Description>{article.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>{article.source.name}</Card.Content>
          </Card>
        ))}
      </Card.Group>
    ) : (
      <div />
    )}
  </Segment>
)
