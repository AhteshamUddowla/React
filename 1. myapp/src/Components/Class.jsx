import React from "react"
import { Component } from "react";

class Class extends Component{

    // Dont use function keyword in class component
    DoThis() {
        alert("Class")
    }

    UsingArrowFunction = (param) => { alert(param) }    

    // UsingArrowFunction(param){
    //     alert(param)
    // }


    UsingBindMethod = (param) => { alert(param) }

    // UsingBindMethod(param){
    //     alert(param)
    // }

    render() {
        return (
            <>
                <h1>Class Component</h1>

                {/* Dont use () after DoThis, if you use DoThis() it will call
                    the DoThis function before click */}
                <button onClick={this.DoThis}>Click</button>

                {/* Passing parameter in function using arrow function */}
                <button onClick={() => this.UsingArrowFunction("Passing Param Using Arrow Function")}
                        style={{marginLeft:'5px'}}
                >
                    Click
                </button>

                {/* Passing parameter in function using Bind Method */}
                <button onClick={this.UsingBindMethod.bind(this, 'Passing Param Using Bind Method')}
                        style={{marginLeft:'5px'}}
                >
                    Click
                </button>

                <h4>Hello {this.props.name}, you successfully passed parameter
                    in a class component</h4>
            </>
        )
    }
}

export default Class