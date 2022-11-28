import React, { useState } from "react";

export function Problema1Hooks() {
  const [state, setState] = useState({
            counter: 0,
            username: ""
  });
/*    { contador: 0, nombre de usuSario: "" }
       y se convierte en : { contador: 1 }
       o { nombre de usuario: "nuevo_valor" }
 */
 
    //const handleOnClick = () => {
    //    setState({
    //        counter: state.counter + 1
    //    });
    //};
    //const handleOnChange = event => {
    //    setState({
    //        username: event.target.value
    //    });
    //};


/*    La unica solucion posible */ 
     const handleOnClick = () => {
            setState((prevState) => ({
              ...prevState,
              counter: prevState.counter + 1
            }));
          };

          const handleOnChange = (event) => {
            const value = event.target.value;
            setState((prevState) => ({
              ...prevState,
              username: value
            }));
          };

    return (
        <div>
            <div>
                <p>Counter value is: {state.counter} </p>
                <button onClick={handleOnClick}>Increment</button>
                <br />
                <br />
                Name{" "}
                <input
                    type="text"
                    name="username"
                    value={state.username}
                    placeholder="Enter your name"
                    autoComplete="off"
                    onChange={handleOnChange}
                />
                <br />
                {state.username}
            </div>
        </div>
    );
}

