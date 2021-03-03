import React, { Component } from 'react';

class SelectOptionDropdownList extends Component {
    constructor(){
        super()
        this.state={
            city1:"Dhaka",
            city2:"Rangpur",
            city3:"Barishal",
            city4:"Rajshahi",
            show: "",
            auto: "Rajshahi"
        }
    }

    onChangeHandler=(event)=>{
        var SelectedValue=event.target.value;
        this.setState({show:SelectedValue, auto:SelectedValue})
    }

    render() {
        return (
            <div>
                <p>{this.state.show}</p>
                <select onChange={this.onChangeHandler} value={this.state.auto}>
                    <option>{this.state.city1}</option>
                    <option>{this.state.city2}</option>
                    <option>{this.state.city3}</option>
                    <option>{this.state.city4}</option>
                </select>
            </div>
        );
    }
}

export default SelectOptionDropdownList;