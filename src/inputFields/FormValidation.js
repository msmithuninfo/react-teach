import React, { Component } from 'react';

class FormValidation extends Component {
    constructor(){
        super()
        this.state={
            fname:"",
            lname:"",
            email:"",
            mobile:""
        }
    }


    onChangeHandler=(event)=>{
        var inputName=event.target.name;
        var inputValue=event.target.value;
        this.setState({[inputName]:inputValue});

        if(inputName==="fname"){
            var namePattern=/^([a-zA-Z]){2,30}$/;
            if(!namePattern.test(inputValue)){
                this.setState({fname:"First Name Is Not valid"});
            }
        }

        if(inputName==="lname"){
            var namePattern=/^([a-zA-Z]){2,30}$/;
            if(!namePattern.test(inputValue)){
                this.setState({lname:"Last Name Is Not valid"});
            }
        }

        if(inputName==="email"){
            var emailPattern=/\S+@\S+\.\S+/;
            if(!emailPattern.test(inputValue)){
                this.setState({email:"Email Is Not valid"});
            }
        }

        if(inputName==="mobile"){
            if(!Number(inputValue)){
                this.setState({mobile:"Mobile No is Not valid"});
            }
        }
    }


    render() {
        return (
            <div>
                <p className="mt-4">Form Validation</p>
                <p>First Name: {this.state.fname}</p>
                <p>Last Name: {this.state.lname}</p>
                <p>Email: {this.state.email}</p>
                <p>Mobile No: {this.state.mobile}</p>
                <form>
                    <input onChange={this.onChangeHandler} name="fname" type="text" placeholder="First Name"></input><br></br>
                    <input onChange={this.onChangeHandler} name="lname" type="text" placeholder="Last Name"></input><br></br>
                    <input onChange={this.onChangeHandler} name="email" type="text" placeholder="Email"></input><br></br>
                    <input onChange={this.onChangeHandler} name="mobile" type="text" placeholder="Mobile No"></input><br></br>
                    <input name="submit" type="submit" value="Save Now"></input>
                </form>
            </div>
        );
    }
}

export default FormValidation;