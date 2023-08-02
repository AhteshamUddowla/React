import React from "react";
import ReactDOM  from "react-dom";

class Hydrate extends React.Component{

    Change(){
        const element = "My name is Yeash. I am from ReactDOM(Using Hydrate method)"
        const container = document.getElementById('hydrate')
        ReactDOM.hydrate(element, container)
    }

    render(){
        return(
            <>
                <button onClick={this.Change}>Change</button>
                <h1 id='hydrate'>My name is Ahtesham</h1> 
                <hr />
            </>
        )
    }
}

export default Hydrate