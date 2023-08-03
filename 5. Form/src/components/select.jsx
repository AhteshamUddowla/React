import React from "react";

class Select extends React.Component{

    constructor(){
        super()

        this.state = {
            city1: "Dhaka",
            city2: "Chittagong",
            city3: "Khulna",
            city4: "Sylhet",
            show: " ",
            auto: "Chittagong"
        }
    }

    onChange = (event) => {
        const selected = event.target.value
        this.setState({
            show: selected,
            auto: selected
        })
    }

    render(){
        return(
            <> 
                <p>{this.state.show}</p>
                <select onChange={this.onChange} value={this.state.auto}>
                    <option>{this.state.city1}</option>
                    <option>{this.state.city2}</option>
                    <option>{this.state.city3}</option>
                    <option>{this.state.city4}</option>
                </select>
            </>
        )
    }
}

export default Select