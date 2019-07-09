import React from 'react'

export default class TaskCreationForm extends React.Component {
  render() {
    // console.log("taskform", this.props.topic_id)
    return (
      <div>
      {this.props.topic_id.length >= 0
        ?
        <form onSubmit={this.props.handleSubmit}>
        Title <input onChange={event => this.props.handleChange(event)}  type="text" name="title" value={this.props.title} />
        Content <textarea onChange={event => this.props.handleChange(event)} type="text" name="content" value={this.props.content} />
        Topic <select onChange={event => this.props.handleChange(event)} name="topic_id">
            <option value='4'>Hobby</option>
            <option value='3'>Home</option>
            <option value="5">Misc</option>
            <option value='6'>Personal</option>
            <option value="7">Shopping</option>
            <option value="8">Travel</option>
            <option value="9">Work</option>
        </select>
        Deadline <input onChange={event => this.props.handleChange(event)} type="date" name="deadline" value={this.props.deadline} />
        <input type="submit" value="Submit" />
      </form>
      :
      null}
      </div>
      )
  }
}
