import React,{Component} from 'react';

class PropsClassComp extends Component{
    render(){
        return (
        <h2>I am from Props Class Component {this.props.name} {this.props.age}</h2>
        )
    }
}

export default PropsClassComp;