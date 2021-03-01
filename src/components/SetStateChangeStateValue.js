import React, {Component} from 'react';

class SetStateChangeStateValue extends Component{
    constructor(){
        super()
        this.state={
            name: "Mithun"
        }
    }
    changeName(a){
        this.setState({name: a})
    }

    render(){
    return <div>
        <p>{this.state.name}</p>
        <button onClick={this.changeName.bind(this,"Sarker")}>Change State Value</button>
    </div>
    }
}

export default SetStateChangeStateValue;