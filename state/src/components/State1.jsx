import React from "react";

class State1 extends React.Component{

    constructor(){
        super()

        this.state = {
            name: 'Ahtesham'
        }
    }

    render() {
        return (
            <h1>{this.state.name}</h1>
        )
    }
}

export default State1