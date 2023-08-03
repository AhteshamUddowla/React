import React from "react";

class SignUp extends React.Component{

    constructor(){
        super()

        this.state = {
            fname : " ",
            lname : " ",
            email : " ",
            mobile : " "
        }
    }

    onChangeHandler = (event) => {
        const inputName = event.target.name
        const inputValue = event.target.value

        this.setState({
            [inputName] : inputValue
        })

        if(inputName==="fname"){
            const namePattern = /^([a-zA-Z ]){2,30}$/
            if(!namePattern.test(inputValue)){
                this.setState({
                    fname:"First name is not valid"
                })
            }
        }
        if(inputName==="lname"){
            const namePattern = /^([a-zA-Z ]){2,30}$/
            if(!namePattern.test(inputValue)){
                this.setState({
                    fname:"Last name is not valid"
                })
            }
        }
        if(inputName==="email"){
            const emailPattern = /\S+@\S+\.\S+/
            if(!emailPattern.test(inputValue)){
                this.setState({
                    email:"Email is not valid"
                })
            }
        }
        if(inputName==="mobile"){
            if(!Number(inputValue)){
                this.setState({
                    mobile:"Mobile No is not valid"
                })
            }
        }
    }

    render(){
        return(
            <>
                <p>First Name: {this.state.fname}</p>
                <p>Last Name: {this.state.lname}</p>
                <p>Email: {this.state.email}</p>
                <p>Mobile: {this.state.mobile}</p>
                
                <form>
                        <input onChange={this.onChangeHandler} type="text" name="fname" placeholder="First Name" /> <br />
                        <input onChange={this.onChangeHandler} type="text" name="lname" placeholder="Last Name" /> <br />
                        <input onChange={this.onChangeHandler} type="email" name="lnamemaile" placeholder="Email" /> <br />
                        <input onChange={this.onChangeHandler} type="text" name="mobile" placeholder="Mobile" /> <br />
                        <input type="submit" name="submit" value="Save Now" />
                </form>
                <hr />
            </>
        )
    }
}

export default SignUp

