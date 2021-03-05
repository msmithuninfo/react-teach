import React, { Component } from 'react';

class Puti extends Component {
    render() {
        return (
            <div>
                <h1>I am From Puti</h1>
                <h1>dada(app)->Son->Nati->Puti</h1>
                {/* Props passing from dada */}
                <h2>{this.props.name}</h2>
            </div>
        );
    }
}

export default Puti;