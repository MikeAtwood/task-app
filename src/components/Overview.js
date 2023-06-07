import React, { Component } from 'react'

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