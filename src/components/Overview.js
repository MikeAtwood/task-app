import React, { Component } from 'react'

// Class component that handles adding new task
class AddTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTask: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleAddTask = this.handleAddTask.bind(this)
    }
    handleInputChange = (e) => {
        this.setState({ newTask: e.target.value })
    }

    handleAddTask = () => {
        const { newTask } = this.state;
        this.props.onAddTask(newTask)
        this.setState({ newTask: '' })
    }
    render() {
        const { newTask } = this.state
        return (
            <div>
                <input type='text' value={newTask} onChange={this.handleInputChange} />
                <button onClick={this.handleAddTask}>Add Task</button>
            </div>
        )
    }
}

// Main component that displays content
class Overview extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: []
        };
        this.handleAddTask = this.handleAddTask.bind(this)
    }
    handleAddTask(newTask) {
        this.setState(prevState => ({
            tasks: [...prevState.tasks, newTask]
        }))
    }

    render() {
        const { tasks } = this.state;
        return (
            <div>
                <h1>Tasks To Do</h1>
                <AddTask onAddTask={this.handleAddTask} />
                <ul>
                    {tasks.map((task, index) => (
                        <li key={index}>{task}</li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Overview;