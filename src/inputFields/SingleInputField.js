import React, { Component } from 'react';

class SingleInputField extends Component {
    render() {
        return (
            <div>
                <form>
                <p>Form For Single Input</p>
                <input type="text" placeholder="Your Name"></input>
                <input className="btn btn-success m-3" type="submit" value="Submit Now"></input>
                </form>
            </div>
        );
    }
}

export default SingleInputField;