import React from 'react'
import { Header, Segment, Statistic } from 'semantic-ui-react'

export default props => (
  <Segment>
    <Header size="medium">{props.title}</Header>
    <Statistic.Group size="mini" widths="four">
      <Statistic>
        <Statistic.Value>Physics</Statistic.Value>
        <Statistic.Label>in 5 days</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>Three</Statistic.Value>
        <Statistic.Label>in 6 days</Statistic.Label>
      </Statistic>
      <Statistic>
        <Statistic.Value>Kinetics</Statistic.Value>
        <Statistic.Label>in 6 days</Statistic.Label>
      </Statistic>
      <Statistic color="grey">
        <Statistic.Label style={{ cursor: 'pointer', color: 'grey' }}>
          {props.actionText}
        </Statistic.Label>
      </Statistic>
    </Statistic.Group>
  </Segment>
)
