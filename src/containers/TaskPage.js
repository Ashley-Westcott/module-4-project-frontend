import React from 'react'
import TaskCollection from './TaskCollection'

export default class TaskPage extends React.Component {


  render() {
    console.log(this.props)
    return (
        <div>
          <TaskCollection />
        </div>
      )
  }
}
