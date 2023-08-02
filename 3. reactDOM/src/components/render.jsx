import React from "react";
import ReactDOM  from "react-dom";

class Render extends React.Component{

    Change(){
        const element = "My name is Yeash. I am from ReactDOM(Using Render method)"
        const container = document.getElementById('render')
        ReactDOM.render(element, container)
    }

    render(){
        return(
            <>
                <button onClick={this.Change}>Change</button>
                <h1 id='render'>My name is Ahtesham</h1>
                <hr />
            </>
        )
    }
}

export default Render