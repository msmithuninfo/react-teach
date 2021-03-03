import React, { Component } from 'react';

class EventHandlerInTheOnChangeUsingNameAttribute extends Component {
    constructor(){
        super()
        this.state={
            username: ""
        }
    }

    onChangeHandler=(event)=>{
        var myname=event.target.name;
        var myvalue=event.target.value;
        this.setState({[myname]:myvalue})
    }

    render() {
        return (
            <div>
                <form>
                <p>Form For EventHandlerInTheOnChange Using name</p>
                <p>{this.state.username}</p>
                <input name="username" onChange={this.onChangeHandler} type="text" placeholder="Your Name"></input>
                <input className="btn btn-success m-3" type="submit" value="Submit Now"></input>
                </form>
            </div>
        );
    }
}

export default EventHandlerInTheOnChangeUsingNameAttribute;