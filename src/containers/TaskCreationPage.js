import React from 'react'
import TaskCreationForm from '../components/TaskCreationForm'

export default class TaskCreationPage extends React.Component {

  state = {
    title: '',
    content: '',
    deadline: ''
  }

  handleChange = (event) => {
    this.setState({
    [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    alert('Values submitted: ' + this.state.title + this.state.content + this.state.deadline);
    event.preventDefault();
    fetch('http://localhost:3000/tasks', {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        "title": this.state.title.value,
        "content": this.state.content.value,
        "deadline": this.state.deadline.value
        })
      })
      .then(response => response.json())
      .then(newdata => console.log(newdata))
  }

  render(){
    console.log(this.state)
    return (
    <div>
      <TaskCreationForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    </div>
    )
  }
}
