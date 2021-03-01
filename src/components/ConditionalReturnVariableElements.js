import React, {Component} from 'react';

class ConditionalReturnVariableElements extends Component{
    constructor(){
        super()
        this.state={
            login: true
        }
    }

    render(){
        return(
            // this.state.login? <h1>I am First Condition</h1> : <h1>I am Second Condition</h1>
            this.state.login? 
            (
                <h1>I am First Condition</h1>
            ) :
            (
                <h1>I am Second Condition</h1>
            )
        )
    }
}

export default ConditionalReturnVariableElements;