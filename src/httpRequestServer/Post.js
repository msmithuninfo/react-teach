import axios from 'axios';
import React, { Component } from 'react';

class Post extends Component {
    constructor(){
        super()
        this.state={
            postData: "",
            postResult: ""
        }
    }


onChangeHandler=(event)=>{
    var mydata=event.target.value;
    this.setState({postData:mydata})
}
onClickHandler=()=>{
    axios.post('http://ss.rabbil.com/test.php', this.state.postData)
    .then(response=>{
        this.setState({postResult:response.data})
    })
    .catch(error=>{
        alert("something went wrong");
    })
}

    render() {
        return (
            <div>
                <p>{this.state.postResult}</p>
                    <input onChange={this.onChangeHandler} type="text" />
                    <button onClick={this.onClickHandler}>Send</button>
            </div>
        );
    }
}

export default Post;