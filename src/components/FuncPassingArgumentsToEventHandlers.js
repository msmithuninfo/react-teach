import React from 'react';

function FuncPassingArgumentsToEventHandlers(props){
    function DoThis(abc){
        alert(abc);
    }
    return (
        <div className="funcom">
            <button onClick={DoThis.bind(this,"Passing argument from func Comp")}>FuncPassingArgumentsToEventHandlers</button>
        </div>
    );
}

export default FuncPassingArgumentsToEventHandlers;