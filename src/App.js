import React from 'react';
import './App.css';
import LoginPage from './containers/LoginPage'
import TaskPage from './containers/TaskPage'
import TaskCreationPage from './containers/TaskCreationPage'

export default class App extends React.Component{

  state = {
    tasks: []
  }

  componentDidMount(){
    fetch('http://localhost:3000/tasks')
      .then(response => response.json())
      .then(data => {this.setState({
        tasks: data
        })
      })
  }

  render(){
    console.log(this.state.tasks)
    return (
      <div>
        <LoginPage />
        <TaskPage tasks={this.state.tasks}/>
        <TaskCreationPage />
      </div>
    )
  }
}
