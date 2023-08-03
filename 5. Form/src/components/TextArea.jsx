import React from "react";

class TextArea extends React.Component{
    
    constructor(){
        super()

        this.state = {
            desc: "Please insert some text...",
            userInput: " "
        }
    }

    onChange = (event) => {
        const myText = event.target.value
        this.setState({
            userInput: myText
        })
    }
    
    render(){
        return(
            <>
                <textarea onChange={this.onChange} placeholder="Please insert some text..." cols="30" rows="10"></textarea>
                <p>{this.state.userInput}</p>
                <hr />
            </>
        )
    }
}

export default TextArea