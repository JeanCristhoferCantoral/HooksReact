import React, { useState } from "react";

export function Prueba2 (){
    const [counter, setCounter] = useState(0); 
    //se pueden crear todos los hooks que quieras y que necesites 
/*   const [username, setUsername] = useState("");*/
    const handleOnClick = () => {
        setCounter(counter + 1);
    };
        return (
            <>
                <div className="row text-center">
                    <h1>Counter value is: {counter} </h1>
                </div>
                <div className=" text-center">
                    <button onClick={handleOnClick} className="btn btn-primary">Increment</button>
                </div>
            </>
        );
    }

