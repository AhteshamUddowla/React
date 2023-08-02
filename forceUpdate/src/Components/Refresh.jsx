import React from "react";

class Refresh extends React.Component{

    constructor(){
        super()

        this.Refresh = this.Refresh.bind(this)
    }

    Refresh(){
        this.forceUpdate()
    }

    render(){
        return (
            <>
                <button onClick={this.Refresh}>Random No</button>  
                <h1>{Math.random()}</h1>  
            </>
        )
    }
}

export default Refresh