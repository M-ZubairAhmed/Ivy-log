import React from 'react'
import { Header, Segment, Statistic } from 'semantic-ui-react'

export default props => (
  <Segment>
    <Header size="medium">{props.title}</Header>
    <Statistic.Group size="mini" widths="three">
      <Statistic>
        <Statistic.Label>2 days to</Statistic.Label>
        <Statistic.Value>PTA meet</Statistic.Value>
      </Statistic>
      <Statistic>
        <Statistic.Label>5 days to</Statistic.Label>
        <Statistic.Value>Winter break</Statistic.Value>
      </Statistic>
      <Statistic color="grey">
        <Statistic.Label
          style={{ cursor: 'pointer', color: 'grey' }}
          onClick={() => props.action(props.actionValue)}
        >
          {props.actionText}
        </Statistic.Label>
      </Statistic>
    </Statistic.Group>
  </Segment>
)
