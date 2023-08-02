import React from "react";

class Form extends React.Component{

    constructor(){
        super()

        this.state = {
            name: null
        }
    }

    onChange = (event) => {
        const name = event.target.value;
        this.setState({
            name: name
        })
    }

    render(){
       return(
           <>
               <form>
                   <p>{this.state.name}</p>
                   <input onChange={this.onChange} type="text" placeholder="Enter your name..."/>
                   <br /> <br />
                   <input type="button" value="Submit" />
               </form>
           </>
       )
    }
}

export default Form