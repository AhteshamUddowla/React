import React from "react";
import ReactDOM from "react-dom";

class DOMNode extends React.Component{

    ChangeImg(){
        const container = document.getElementById("img");
        ReactDOM.findDOMNode(container).src = "https://shorturl.at/hHPWZ";
    }

    render(){
        return(
            <>
                <button onClick={this.ChangeImg}>Change Image</button> 
                <br /> <br />
                <img id="img" src="https://shorturl.at/aGMOU" alt="panda" />
            </>
        )
    }
}

export default DOMNode