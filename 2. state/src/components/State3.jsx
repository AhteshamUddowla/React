import React from "react";

class State3 extends React.Component{

    constructor(){
        super();

        this.state = {
            count1: 0,
            count2: 0
        }

        this.Increment1 = this.Increment1.bind(this);
        this.Increment2 = this.Increment2.bind(this);
    }

    Increment1() {
        this.setState((prevState) => ({
            count1: prevState.count1+1
        }))
    }

    Increment2() {
        this.setState((prevState) => ({
            count2: prevState.count2+1
        }))
    }

    render(){
        return (
            <>
                <h4>{this.state.count1}</h4>
                <button onClick={this.Increment1}>Increment1</button>

                <h4>{this.state.count2}</h4>
                <button onClick={this.Increment2}>Increment2</button>
            </>
        )
    }
}


export default State3