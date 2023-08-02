import React from "react"

function Function(props){

    function DoThis(){
        alert("Function")
    }

    const UsingArrowFunction = (param) => { alert(param) }    

    // function UsingArrowFunction(param){
    //     alert(param)
    // }


    const UsingBindMethod = (param) => { alert(param) }

    // function UsingBindMethod(param){
    //     alert(param)
    // }

    return (
        <>
            <h1>Functional Component</h1>

            {/* Dont use () after DoThis, if you use DoThis() it will call
                the DoThis function before click */}
            <button onClick={DoThis}>Click</button>
            
            {/* Passing parameter in function using arrow function */}
            <button onClick={() => UsingArrowFunction("Passing Param Using Arrow Function")}
                    style={{marginLeft:'5px'}}
            >
                Click
            </button>

            {/* Passing parameter in function using Bind Method */}
            <button onClick={UsingBindMethod.bind(null, 'Passing Param Using Bind Method')}
                    style={{marginLeft:'5px'}}
            >
                Click
            </button>

            <h4>Hello {props.name}, you successfully passed parameter
                in a functional component</h4>
        </>
    )
}

export default Function