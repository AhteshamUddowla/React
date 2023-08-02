import React from "react";

class State0 extends React.Component{

    constructor(){
        super()

        this.state = {
            name: 'Ahtesham'
        }
    }

    render() {
        return (
            <>
                <h1>{this.state.name}</h1>
                <hr />
            </> 
        )
    }
}

export default State0