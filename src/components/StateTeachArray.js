import React, {Component} from 'react';

class StateTeach extends Component{
    constructor(){
        super()
        this.state={
            name: "Mithun",
            age: ["23","24","25","26","27",],
            height: {
                class1: "100",
                class2: "200",
                class3: ["400","500","600"]
            }
        }
    }

    render(){
    return <div>
        <p>My name is: {this.state.name}</p>
        <p>My age is: {this.state.age[4]}</p>
        <p>My height is: {this.state.height.class1}</p>
        <p>My height is: {this.state.height.class3[2]}</p>
    </div>
    }
}

export default StateTeach;