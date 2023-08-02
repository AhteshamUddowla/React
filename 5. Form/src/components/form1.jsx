import React from "react";

class Form1 extends React.Component{

    constructor(){
        super()

        this.state = {
            username: null
        }
    }

    onChange = (event) => {
        const myName = event.target.name;
        const myValue = event.target.value;
        this.setState({
            [myName]: myValue
        })
    }

    onSubmit = () => {
        alert(this.state.username)
    }

    render(){
       return(
           <>
               <form onSubmit={this.onSubmit}>
                   <p>{this.state.username}</p>
                   <input name="username" onChange={this.onChange} type="text" placeholder="Enter your name..."/>
                   <br /> <br />
                   <input type="submit" value="Submit" />
               </form>
           </>
       )
    }
}

export default Form1