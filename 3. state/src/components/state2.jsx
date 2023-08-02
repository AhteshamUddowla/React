import React from "react";

class State2 extends React.Component{

    constructor(){
        super()

        this.state = {
            name: "Ahtesham"
        }

        this.ChangeName = this.ChangeName.bind(this, "Yeash")
    }

    ChangeName(name){
        this.setState({
            name: name,
        })
    }

    render() {
        return(
            <>
                <h1>{this.state.name}</h1>
                <button onClick={this.ChangeName}>Change Name</button>
                <hr />
            </>
        )
    }
}

export default State2