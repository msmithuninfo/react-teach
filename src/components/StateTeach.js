import React, {Component} from 'react';

class StateTeach extends Component{
    constructor(){
        super()
        this.state={
            name: "Mithun",
            age: 23,
            height: "5 feet 3 inch"
        }
    }

    render(){
    return <div>
        <p>My name is: {this.state.name}</p>
        <p>My age is: {this.state.age}</p>
        <p>My height is: {this.state.height}</p>
    </div>
    }
}

export default StateTeach;