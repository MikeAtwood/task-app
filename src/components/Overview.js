import React, { Component } from 'react'

// Class component that handles adding new task
class AddTask extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newTask: ''
        }
        
    }
}

// Main component that displays content
class Overview extends Component {
    
    
    render() {
        return (
                <div>
                    <h1>Tasks To Do</h1>
                    <input type='text' placeholder='New Task'></input>
                    <button>Add+</button>
                </div>
        )
    }
}

export default Overview;