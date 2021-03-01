import React,{Component} from 'react';

class ClassPassingArgumentsToEventHandlers extends Component{
    DoThisClass(abc){
        alert(abc)
    }
    render(){
        return (
            <div>
                <button onClick={this.DoThisClass.bind(this,"Passing Argument from Class Comp")}>ClassPassingArgumentsToEventHandlers</button>
            </div>
        )
    }
}

export default ClassPassingArgumentsToEventHandlers;