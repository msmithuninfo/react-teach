import React, { Component } from 'react';

class OnSubmitHandler extends Component {
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
    OnSubmitHandler=()=>{
        alert(this.state.username);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.OnSubmitHandler}>
                <p>OnSubmit Handler</p>
                <p>{this.state.username}</p>
                <input name="username" onChange={this.onChangeHandler} type="text" placeholder="Your Name"></input>
                <input className="btn btn-success m-3" type="submit" value="Submit Now"></input>
                </form>
            </div>
        );
    }
}

export default OnSubmitHandler;