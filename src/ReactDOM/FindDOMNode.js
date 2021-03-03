import React, { Component } from 'react';
import reactDom from 'react-dom';

class FindDOMNode extends Component {
    changeIMG(){
        var imgID = document.getElementById("imgID");
        reactDom.findDOMNode(imgID).src="images/img2.jpg"
    }

    render() {
        return (
            <div>
                <button onClick={this.changeIMG}>Change Image</button><br></br>
                <img id="imgID" src="images/img1.jpg" width="200px" height="200px" />
            </div>
        );
    }
}

export default FindDOMNode;