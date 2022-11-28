import React, { useState, useEffect } from 'react';

export function HookUseEffect() {
    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    //useEffect(() => {
    //    // Update the document title using the browser API
    //    console.log(`You clicked ${count} times`);
    //    document.title = `You clicked ${count} times`;
    //},/*[count]*/);

    useEffect(() => {
        // Update the document title using the browser API
        console.log(`Se ejecutara cuando solo se cambien el contador`);

    }, /*[count]*//*[count]*//*[count]*/[count]);



    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button> 
        </div>
    );
}