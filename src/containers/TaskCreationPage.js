import React from 'react'
import TaskCreationForm from '../components/TaskCreationForm'

const API = 'http://localhost:3000/tasks'

export default class TaskCreationPage extends React.Component {

  state = {
    title: '',
    content: '',
    deadline: '',
    topic_id: []
  }

  handleChange = (event) => {
    this.setState({
    [event.target.name]: event.target.value
    })

    console.log("handleChange before", event.target.value)

    this.state.topic_id.map(topic => {
      if (topic.id === event.target.value){
        return this.state.topic
      } else {
        return topic
      }


      })
  }

  componentDidMount() {
    fetch('http://localhost:3000/topics')
      .then(r => r.json())
      .then(incomingTopics => {
        console.log("fetch get for topics", incomingTopics)
        this.setState({
          topic_id: incomingTopics
          })
        })
  }

  postTasks = () => {
    fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        title: this.state.title,
        content: this.state.content,
        topic_id: this.state.topic_id,
        deadline: this.state.deadline
        })
      })
      // .then(response => response.json())
      // .then(newdata => console.log(newdata))
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.postTasks()
  }

  foundTopic(){
    this.props.topic_id.find((element) => {return element.id})
  }

  render(){
    console.log(this.state)
    return (
    <div>
      <TaskCreationForm
      foundTopic={this.foundTopic}
      topic_id={this.state.topic_id} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
    </div>
    )
  }
}
