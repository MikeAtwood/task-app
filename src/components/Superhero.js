import React, { Component } from 'react'

class Superhero extends Component {
    // constructor(props) {
    //     super(props);
    //     this.attack=this.attack.bind(this)
    // }

    state = {
        superpower: "shapeshifting and Teleportation"
    }    
    
    // arrow function to elimnate the need to bind "this" in the constructor
    attack = (newSuperPower) =>{
        let prevPower = this.state.superpower
        let updatedSuperpower = prevPower.concat(" .Updated power: ",newSuperPower)
        this.setState({superpower:updatedSuperpower})
        console.log("this is referring to : ",this)
        console.log("Superpower is: ",this.state.superpower)
    }

    // // helper method
    // doAttack = () => {
    //     this.attack({power: "Telepathy"})
    // }

    // Lastly, we move the arrow function to the event handler to render
    // method directly
    render(){
        return (<button onClick={()=>{this.attack({power: "Telepathy"})}}
        className='btn btn-secondary btn-me'>Attack </button>)
    }
}
export default Superhero;