import React, { Component } from 'react';

class ReactListFromJSONArray extends Component {
    render() {
        //JSON CREATE
        const mylist=[
            {
                city: "Dhaka",
                zip: "6000"
            },
            {
                city: "Rajshahi",
                zip: "7000"
            },
            {
                city: "Rangpur",
                zip: "8000"
            }
        ]
        const dataItamsCity=mylist.map((dataCity)=>{
            return <option>{dataCity.city}</option>
        });

        const dataItamsZip=mylist.map((dataZip)=>{
            return <option>{dataZip.zip}</option>
        });

        return (
            <div>
                <select>
                    {dataItamsCity}
                </select>
                <select>
                    {dataItamsZip}
                </select>
            </div>
        );
    }
}

export default ReactListFromJSONArray;