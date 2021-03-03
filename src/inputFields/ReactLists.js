import React, { Component } from 'react';

class ReactLists extends Component {
    MyDataChild=(data)=>{
        return <option>{data}</option>
    }
    render() {
        const country=['BD', 'India', 'US', 'Canada'];
        const dataItems=country.map(this.MyDataChild)
        return (
            <div>
                <select>
                    {dataItems}
                </select>
            </div>
        );
    }
}

export default ReactLists;