import React, { Component } from 'react';

class EventHandlerInTheOnChange extends Component {

    constructor(){
        super()
        this.state={
            name: ""
        }
    }

    onChangeHandler=(event)=>{
        var newName=event.target.value;
        this.setState({name:newName})
    }




    render() {
        return (
            <div>
                <form>
                <p>Form For EventHandlerInTheOnChange</p>
                <p>{this.state.name}</p>
                <input onChange={this.onChangeHandler} type="text" placeholder="Your Name"></input>
                <input className="btn btn-success m-3" type="submit" value="Submit Now"></input>
                </form>
            </div>
        );
    }
}

export default EventHandlerInTheOnChange;