import React,{Component} from 'react';

class DoThisClass extends Component{
    DoThisClass(){
        alert("Button Is Clicked")
    }
    render(){
        return (
            <div>
                <button onClick={this.DoThisClass}>Click me</button>
                <h2>I am from Class Component for Button Event</h2>
            </div>
        )
    }
}

export default DoThisClass;