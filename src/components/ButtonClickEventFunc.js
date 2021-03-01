import React from 'react';

function ButtonClickEventFunc(props){
    function DoThis(){
        alert("Button Is Clicked")
    }
    return (
        <div className="funcom">
            <button onClick={DoThis}>Click me After</button>
            <button onClick={DoThis()}>Click me Before</button>
            <h1>I am Functional Component for Button Event</h1>
        </div>
    );
}

export default ButtonClickEventFunc;