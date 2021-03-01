import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class ReactRender extends Component {
    myFun(){
        var container=document.getElementById("myID");
        var element=<h1>My Name is Mou from react DOM</h1>
        var callback=function(){
            alert("Hi, i am callback function");
        }

        ReactDOM.render(element,container,callback);
    }


    render() {
        return (
            <div>
                <button onClick={this.myFun}>Change</button>
                <h1 id="myID">My name is Mithun</h1>
            </div>
        );
    }
}

export default ReactRender;