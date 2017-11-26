import React from 'react'
import { Button, Header, Modal, Form, Input } from 'semantic-ui-react'
import DateTime from 'react-datetime'
import moment from 'moment'

export default class ModalExampleControlled extends React.Component {
  state = {
    name: '',
    description: '',
    duration: '',
    datetime: moment(),
    classID: '',
  }

  handleClose = () => this.props.toggleAddNewClass(false)

  handleSubmit = () => {
    const newClass = {
      name: this.state.name.trim(),
      description: this.state.description.trim(),
      duration: this.state.duration,
      datetime: moment(this.state.datetime).valueOf(),
      classID: this.state.classID,
    }
    this.props.addNewClassToDB(newClass)
    this.handleClose()
  }

  render() {
    return (
      <Modal
        open={this.props.isShownNewClass}
        onClose={this.handleClose}
        size="small"
        dimmer={false}
        closeOnDimmerClick={true}
      >
        <Header icon="add to calendar" content="Schedule a new Class" />
        <Modal.Content>
          <Form>
            <Form.Field>
              <label>Class Data & Time</label>
              <DateTime
                value={this.state.datetime}
                onChange={event => this.setState({ datetime: event._d })}
              />
            </Form.Field>
            <Form.Field>
              <label>Class name</label>
              <Input
                placeholder="enter class name"
                value={this.state.name}
                onChange={event => this.setState({ name: event.target.value })}
              />
            </Form.Field>
            <Form.Field>
              <label>Description of class</label>
              <Input
                placeholder="A short one line description of class"
                value={this.state.description}
                onChange={event =>
                  this.setState({ description: event.target.value })
                }
              />
            </Form.Field>
            <Form.Field>
              <label>Duration (in mins)</label>
              <Input
                placeholder="enter in minutes eg. 30"
                type="number"
                value={this.state.duration}
                onChange={event =>
                  this.setState({ duration: event.target.value })
                }
              />
            </Form.Field>
            <Form.Field>
              <label>Class ID</label>
              <Input
                placeholder="enter a 6 letter alphanumeric id"
                value={this.state.classID}
                onChange={event =>
                  this.setState({ classID: event.target.value })
                }
              />
            </Form.Field>
          </Form>
        </Modal.Content>
        <Modal.Actions>
          <Button color="grey" onClick={this.handleSubmit}>
            Create
          </Button>
        </Modal.Actions>
      </Modal>
    )
  }
}
