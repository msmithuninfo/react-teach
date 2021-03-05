import React, { Component } from 'react';
import axios from 'axios';

class CountryList extends Component {
    constructor(){
        super()
        this.state={
            mydata: []
        }
    }

    //componentDidMount asece react lifecycle theke 
    //take rest json from google
    //rest countries api nebo google theke
    componentDidMount(){
        axios.get('https://restcountries.eu/rest/v2/all')
        .then(response=>{
            this.setState({mydata: response.data})
        })
        .catch(error=>{

        })
    }





    render() {
        const myList=this.state.mydata
        const CountryNmae= myList.map((mylist)=>{
        return <option>{mylist.name}</option>
        })
        return (
            <div>
                <select>
                    {CountryNmae}
                </select>
            </div>
        );
    }
}

export default CountryList;