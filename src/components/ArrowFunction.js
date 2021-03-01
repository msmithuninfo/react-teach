import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const DoThis=(abc)=>{
    alert(abc);
}

const ArrowFunction=()=>{
    return(
        <button onClick={DoThis.bind(this,"Arrow Function")} className="btn btn-primary p-3 m-3 text-dark">Arrow Function</button>
    );
}
export default ArrowFunction;