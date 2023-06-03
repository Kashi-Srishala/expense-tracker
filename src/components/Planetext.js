import React, { useState } from "react";


const Planetext = () => {
    const [state, setState] = useState(0);

    const buttonHandler = () => {
        setState(state + 1)
    };
    return (
    <div>
        <h1>hello word!</h1>
        <h1>Count: {state}</h1>
        <button onClick={buttonHandler}>test</button>
    </div>
        
    );
};

export default Planetext;