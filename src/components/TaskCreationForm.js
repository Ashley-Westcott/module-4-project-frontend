import React from 'react'

export default class TaskCreationForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        Title <input onChange={event => this.props.handleChange(event)}  type="text" name="title" value={this.props.title} />
        Content <textarea onChange={event => this.props.handleChange(event)} type="text" name="content" value={this.props.content} />
        Deadline <input onChange={event => this.props.handleChange(event)} type="date" name="deadline" value={this.props.deadline} />
        <input type="submit" value="Submit" />
      </form>
      )
  }
}
