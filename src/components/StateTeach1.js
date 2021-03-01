import React, {Component} from 'react';

class StateTeach extends Component{
    constructor(){
        super()
        var obj={
            name: "Mithun",
            age: 23,
            height: "5 feet 3 inch"
        }
        this.state=obj
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