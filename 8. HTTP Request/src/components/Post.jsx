import React from "react";
import axios from "axios";

class Post extends React.Component{

    constructor(){
        super()

        this.state = {
            postData: "",
            postResult: ""
        }
    }

    onChangeHandler = (event) => {
        const mydata = event.target.value
        this.setState({
            postData: mydata
        })
    }

    onClickHandler = () => {
        axios.post('URL', this.state.postData)
             .then((response) => {
                this.setState({
                    postResult: response.data
                })
                alert(this.state.postResult)
             })
             .catch((error) => {
                alert("Something went wrong..")
             })
    }

    render(){
        return (
            <>
                <h1>Post Request</h1>
                <input onChange={this.onChangeHandler} type="text" />
                <button onClick={this.onClickHandler}>Send</button>
            </>
        )
    }
}

export default Post