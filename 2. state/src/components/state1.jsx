import React from "react";

class State1 extends React.Component{

    constructor(){
        super()

        this.state = {
            name: "Ahteham"
        }
    }

    ChangeName(name){
        this.setState({
            name: name
        })
    }

    render(){
        return(
            <>
                <h1>{this.state.name}</h1>
                <button onClick={this.ChangeName.bind(this, "Yeash")}>Change Name</button>
                <hr />
            </>
        )
    }
}

export default State1