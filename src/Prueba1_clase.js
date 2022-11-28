import React, { Component } from "react";

export class Prueba1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    handleOnClick = () => {
        this.setState(() => ({
            counter: this.state.counter + 1
        }));
    };

    render() {
        return (
            <>
            <div className="row text-center">
                <h1>Counter value is: {this.state.counter} </h1>
            </div>
            <div className=" text-center">
                <button onClick={this.handleOnClick} className="btn btn-primary">Increment</button>
            </div>
            </>
        );
    }
}
