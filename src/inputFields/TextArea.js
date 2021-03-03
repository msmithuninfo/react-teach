import React, { Component } from 'react';

class TextArea extends Component {
    constructor(){
        super()
        this.state={
            desc: "", userInput: ""
        }
    }
    onChangeHandler=(event)=>{
        var mytext = event.target.value;
        this.setState({userInput:mytext})
    }


    render() {
        return (
            <div>
                <p>{this.state.userInput}</p>
                <textarea style={{background: "white",width: "300px",height: "200px", color: "black", fontFamily: "Arial"}} placeholder="Please insert Some text.." onChange={this.onChangeHandler} />
                
            </div>
        );
    }
}

export default TextArea;